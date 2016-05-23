#!/usr/bin/env python3
"""
This script is used to spawn a webservice that provides a Translation from PZN to 
drug name, active substance and later Dosage, CASRN, ATC, metabolism and more pharmacokinetic data.
The Goal is to provide a tool that automatically checks for contraindications.
"""
from app import app
from flask import request
from bs4 import BeautifulSoup
import urllib.request
import json

json_data = {}

@app.route('/')
@app.route('/index')
def index():
    # here we want to get the value of user (i.e. ?user=some-value)
    pzn = request.args.get('pzn')
    #currently we request our data from AOK, later we will use a contracted DB like the yellow/red list.
    url='https://arzneimittel.aok.de/medikament-detailinformationen.60.de.html?amn[pzn]='+pzn
    page = urllib.request.urlopen(url)
    soup = BeautifulSoup(page.read(), "lxml")
    json_data["medname"] =  soup.findAll("h2", { "class" : "medicineHeader" })[0].string

    for row in soup.findAll('table')[0].tbody.findAll('tr'):
        first_column = row.findAll('td')[0].contents
        json_data["a_substance"] = first_column[0].string
	
	# Drug interaction by drugs.com:
	# http://www.drugs.com/interactions-check.php?drug_list=2221-0,243-3197,1578-957

    return json.dumps(json_data, ensure_ascii=False)
