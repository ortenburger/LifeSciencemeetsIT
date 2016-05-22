#!/usr/bin/env python3


from bs4 import BeautifulSoup
import urllib.request


# here we want to get the value of user (i.e. ?user=some-value)
pzn = "00078597"
url='https://arzneimittel.aok.de/medikament-detailinformationen.60.de.html?amn[pzn]='+pzn
page = urllib.request.urlopen(url)
soup = BeautifulSoup(page.read(), "lxml")
medname =  soup.findAll("h2", { "class" : "medicineHeader" })[0].string

for row in soup.findAll('table')[0].tbody.findAll('tr'):
    first_column = row.findAll('td')[0].contents
    a_substance =first_column[0]


print(medname)
print(a_substance)
