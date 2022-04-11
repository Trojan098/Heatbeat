import boto, boto.ec2, boto3, os

def get_ip(region):
    #region = 'ap-south-1'
    mumbai = boto.ec2.connect_to_region(region)
    reservations = mumbai.get_all_instances()
    for r in reservations:
        for i in r.instances:
            if i.state=='running':
                tags = i.tags
                name = tags.get('Name') or '(unnamed)'
                return i.ip_address

def put_in_s3(file_name):
    s3 = boto3.client("s3")
    s3.upload_file(
            Filename = file_name,
            Bucket = "mobile-doctor-app-storage25650-staging",
            Key="public/public.txt"
            )

if __name__ == '__main__':
    ip = get_ip("ap-south-1") 
    f = open("public_ip.txt","w")
    f.write(str(ip))
    f.close()
    put_in_s3("public_ip.txt")
    os.remove("public_ip.txt")

