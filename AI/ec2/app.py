import torch
import torchaudio
from Model.NN import AE
import utils.essentials as es
import json
from flask import Flask
from flask import request
import subprocess
import os
from dynamo.db_update import scan , update

app = Flask(__name__)
app.config["DEBUG"] = True


def load_model():
    with open('config/config.json') as f:
        model_name = json.load(f)
    model = AE()
    model.load_state_dict(torch.load(model_name["model_name"],map_location=torch.device('cpu')))
    model.eval()

    return model

def S3_download(s3_url):
    print("s3_url : ",s3_url)
    try:
        subprocess.run(["aws","s3","cp",s3_url,"weights/"])
        return 200
    except :
        return 400



@app.route('/inference', methods=['POST'])
def inference():
    record = json.loads(request.data)
    status = S3_download(record["s3_url"])
    filename = record["s3_url"].split("/")[-1]
    filename_ = filename[:-4]
    print("filename : ", filename)
    if status == 400:
        return {"Status" : "400","message":"Error in s3_download"}
    model = load_model()

    if model == None:
        return {"Status" : "500","message":"model Loading Failed"}

    try:
        with torch.no_grad():
            #Preprocess ....
            x,init_length = es.alterSamplerate('weights/'+filename,4000)
            x = es.pad(x)

            #Actual inference ...
            output = model.forward(x)
            
            #Postprocess ...
            output = es.trim_tensor(output,init_length)

            bpm = es.get_bpm(output)

            torchaudio.save(filename_+"_output.wav",output,4000)

    except Exception as e:
        return {"status":"500","message":"Model Inference failed","Exception":str(e)}

    subprocess.run(["aws","s3","cp",filename_+"_output.wav","s3://mobile-doctor-app-storage25650-staging/public/denoised/"+record["email"]+"/"])

    data = scan(filename_[2:])

    data["audio_length"] = str(init_length)
    data["bucketpath_denoised"] = "s3://mobile-doctor-app-storage25650-staging/public/denoised/"+record["email"]+"/"+filename_+"_output.wav"

    # call function here : 

    data["bpm"] = str(bpm)

    res_db = update(data)

    if res_db != 200:
        return{
                "status":"800",
                "message":"problem in updating DB"
                }
    
    try : 
        os.remove(filename_+"_output.wav")
        os.remove("weights/"+filename)
    except:
        print("Not removed")

    return {"status":"200", 
            "message":"hey there !!",
            "s3_url":data["bucketpath_denoised"],
            "bpm":data["bpm"],
            "length":str(init_length)
            }



@app.route('/heartbeat', methods=['GET'])
def message():
    return {"status":"200","message":"im alive !!"}
