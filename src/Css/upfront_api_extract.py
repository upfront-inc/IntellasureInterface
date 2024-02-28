
import sys
from awsglue.transforms import *
from awsglue.utils import getResolvedOptions
from pyspark.context import SparkContext
from awsglue.context import GlueContext
from awsglue.job import Job
  
sc = SparkContext.getOrCreate()
glueContext = GlueContext(sc)
spark = glueContext.spark_session
job = Job(glueContext)
access_id = 'ug2d0jWMUELRkH6ForvZ01ta-ZuNn7k3HKRL0suZ2WE'
secret_key = 'Z5HnL78xhnqi1tZckf0hkiuQapBMcoCsT9EOXU7JjyDsi6ePHLFkias7Hy/oP13RR4SlPFAqWE1RXY8sJayXZw=='
app_id = '1vKP3CfoXEaFDNr1UvfztO4Zs_C4XqNVHlsiWQw8Z3g'  # Kipu Beachside Recovery AppID
start_date = '2023-12-01'
end_date = '2023-12-08'
import hashlib
import hmac
import base64
from datetime import datetime
from urllib.parse import urlencode
def generate_kipu_signature(method, content_type, content_md5, request_uri, date, secret_key):
    canonical_string = ''
    if method.upper() == 'POST':
        canonical_string = f'{content_type},{content_md5},{request_uri},{date}'
    else:  # Assuming GET
        canonical_string = f',,{request_uri},{date}'

    hmac_sha1 = hmac.new(secret_key.encode('utf-8'), canonical_string.encode('utf-8'), hashlib.sha1)
    signature = base64.b64encode(hmac_sha1.digest()).decode('utf-8')
    return signature
# Extract last word to use in CSV file to make it unique
request_uri = '/api/contact_types'
# Split the string based on '/'
words = request_uri.split('/')
csv_file_prefix = words[-1]


def make_kipu_get_latest_patients_request(access_id, secret_key, app_id, start_date, end_date, page, request_uri):
    method = 'GET'
    date = datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT')
    query_params = {
        'app_id': app_id,
        'start_date': start_date,
        'end_date': end_date,
        'page': page
    }

    encoded_params = urlencode(query_params)
    full_request_uri = f'{request_uri}?{encoded_params}'

    signature = generate_kipu_signature(method, '', '', full_request_uri, date, secret_key)
    headers = {
        'Accept': 'application/vnd.kipusystems+json; version=3',
        'Authorization': f'APIAuth {access_id}:{signature}',
        'Date': date
    }

    full_url = f'https://api.kipuapi.com{full_request_uri}'

    try:
        response = requests.get(full_url, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.HTTPError as err:
        print(f"Status Code: {err.response.status_code}")
        print("Raw Response:", err.response.text)
        return None
page = 1
# Get json response by calling endpoint
json_response = make_kipu_get_latest_patients_request(
    access_id,
    secret_key,
    app_id,
    start_date,
    end_date,
    page,
    request_uri
)
json_response
import matplotlib.pyplot as plt

# Set X-axis and Y-axis values
x = [5, 2, 8, 4, 9]
y = [10, 4, 8, 5, 2]
  
# Create a bar chart 
plt.bar(x, y)
  
# Show the plot
s3output = glueContext.getSink(
  path="s3://bucket_name/folder_name",
  connection_type="s3",
  updateBehavior="UPDATE_IN_DATABASE",
  partitionKeys=[],
  compression="snappy",
  enableUpdateCatalog=True,
  transformation_ctx="s3output",
)
s3output.setCatalogInfo(
  catalogDatabase="demo", catalogTableName="populations"
)
s3output.setFormat("glueparquet")
s3output.writeFrame(DyF)
job.commit()