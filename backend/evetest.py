#!/usr/bin/env python3
"""

"""

from eve import Eve
from med import blueprint
from flask import current_app, request

def pre_med_get_callback(request, lookup):
	print('now we need to check PZN')

def get_med_from_pzn(pzn):
    resource = request.endpoint.split('|')[0]
    return  current_app.data.driver.db[resource].update(
        {"pzn" : pzn},
        {"$set": {"user": None}},
        multi=True
    )

app = Eve()

app.register_blueprint(blueprint)
app.on_pre_GET_med += pre_med_get_callback

app.get_meded += get_med_from_pzn

app.run(debug=True)
