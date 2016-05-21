#!/usr/bin/env python3
"""

"""

from eve import Eve
from gcm import GCM

gcm = GCM(API_KEY)
data = {'PZN': 'value1', 'EAN': 'value2'}

# Downstream message using JSON request
reg_ids = ['token1', 'token2', 'token3']
response = gcm.json_request(registration_ids=reg_ids, data=data)

# Downstream message using JSON request with extra arguments
res = gcm.json_request(
    registration_ids=reg_ids, data=data,
    collapse_key='uptoyou', delay_while_idle=True, time_to_live=3600
)

# Topic Messaging
topic = 'topic name'
gcm.send_topic_message(topic=topic, data=data)


def pre_people_get_callback(request, lookup):
	print('A GET request on the people endpoint has just been received!')

app = Eve()


app.on_pre_GET_people += pre_people_get_callback

app.run(debug=True)
