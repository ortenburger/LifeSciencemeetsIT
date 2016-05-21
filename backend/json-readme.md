json-Readme:

"questionnaire" <- DB-Name
"ID": "1" <- unique ID of the Question
"question": "Questiontext" <- free text for the Question
"answertype":["freetext","valuerange","selectbox","checkbox"], <- select one
"answerrange":["from","to","list","emptywhenfreetext"], <- empty, when freetext; 2 Items (min,max) for range; list the items else 
"answer": {} <- datafield for freetext
"date": "01.01.2016" <- data entered
"value": "42" <- value of the data
