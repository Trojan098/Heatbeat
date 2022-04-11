from pprint import pprint
import boto3
from boto3.dynamodb.conditions import Key


def scan(query):

    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table('recordings')

    scan_kwargs = {
    	'FilterExpression': Key('timestamp').eq(query),
		}	

    response = table.scan(**scan_kwargs)
    return (response.get('Items')[0])


def update(items):
    dynamodb = boto3.resource('dynamodb')

    table = dynamodb.Table('recordings')

    response = table.put_item(Item=items)

    res = response.get("ResponseMetadata")

    return res.get("HTTPStatusCode")




