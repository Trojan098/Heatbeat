import torch, torchaudio
import torch.nn.functional as F
import torchaudio.transforms as T
from scipy.signal import find_peaks
import numpy as np

def alterSamplerate(path_to_audio,desired_sr):
    waveform, sr = torchaudio.load(path_to_audio)
    if sr == 4000: 
        init_length = len(waveform[0])//sr
        return waveform,init_length
    else:
        resampler = T.Resample(sr,4000,dtype=waveform.dtype)
        reduced_waveform = resampler(waveform)
        init_length = len(reduced_waveform[0])//4000
        return reduced_waveform, init_length

def pad(waveform):
    required_pad_len = 30*4000 - len(waveform[0])
    
    if len(waveform)/4000 < 30.00: waveform = F.pad(waveform,(0,required_pad_len))
    return waveform

def trim_tensor(waveform,initial_length):
    new_waveform = waveform[0][:initial_length*4000]
    new_waveform = torch.unsqueeze(new_waveform,0)
    return new_waveform

def get_bpm(waveform):
    waveform_15sec = waveform[0][:15000].numpy()
    peaks, _ = find_peaks(x=waveform_15sec,prominence=0.25)
    return len(peaks)*4
