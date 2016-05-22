angular.module('starter.services', ['ngResource'])
.service('People', function($resource) {
  return $resource('http://127.0.0.1:5000/people');
})

.service('Questionnaires', function($resource) {
  return { "get": function() { return [{
        "_id": "0",
        "fields": {
            "question": "How much do you weigh?",
            "data": {
                "0": {
                    "answertype":1,
                    "answerrange":[0,500],
                    "answer": "weight in kg",
                    "date": "01.01.2016",
                    "value": 0
                }
            }
        }
    },
{
        "_id": "1",
        "fields": {
            "question": "How bad is your pain?",
            "data": {
                "0": {
                    "answertype":1,
                    "answerrange":[0,10],
                    "answer": "No pain to near death",
                    "date": "01.01.2016",
                    "value": 0
                }
            }
        }
    },
{
        "_id": "2",
        "fields": {
            "question": "What is your bloodpressure?",
            "data": {
                "0": {
                    "answertype":1,
                    "answerrange":[70,200],
                    "answer": "systolic",
                    "date": "01.01.2016",
                    "value": 0
                },
                "1": {
                    "answertype":1,
                    "answerrange":[40,100],
                    "answer": "dyastolic",
                    "date": "01.01.2016",
                    "value": 0
                }
            }
        }
    },
{
        "_id": "3",
        "fields": {
            "question": "What is your resting pulse?",
            "data": {
                "0": {
                    "answertype":1,
                    "answerrange":[30,250],
                    "answer": "Sit still and check your pulse or connect Fitnesstracker",
                    "date": "01.01.2016",
                    "value": 0
                }
            }
        }
    },
{
        "_id": "4",
        "fields": {
            "question": "Are you a Smoker?",
            "data": {
                "0": {
                    "answertype":3,
                    "answerrange":["yes"],
                    "answer": "",
                    "date": "01.01.2016",
                    "value": [0]},

                  "1":{
                    "depends":"0.'value'[0]==true",
                    "answertype":1,
                    "answerrange":["yes"],
                    "answer": "How many cigarettes daily?",
                    "date": "01.01.2016",
                    "value": 0
                  }
                }
            }

    },
{
        "_id": "5",
        "fields": {
            "question": "How are you feeling?",
            "data": {
                "0": {
                    "answertype":1,
                    "answerrange":[0,10],
                    "answer": "from sad to happy",
                    "date": "01.01.2016",
                    "value": 0
                }
            }
        }
    },
{
        "_id": "6",
        "fields": {
            "question": "Did you poo today?",
            "data": {
                "0": {
                    "answertype":3,
                    "answerrange":["yes"],
                    "answer": "",
                    "date": "01.01.2016",
                    "value": [0]
                }
            }
        }
    },
{
        "_id": "7",
        "fields": {
            "question": "Are you pregnant?",
            "data": {
                "0": {
                    "answertype":3,
                    "answerrange":["yes"],
                    "answer": "",
                    "date": "01.01.2016",
                    "value": [false]
                }
            }
        }
    },
{
        "_id": "8",
        "fields": {
            "question": "How often did you pee today?",
            "data": {
                "0": {
                    "answertype":1,
                    "answerrange":[0,30],
                    "answer": "",
                    "date": "01.01.2016",
                    "value": 0
                }
            }
        }
    },
{
        "_id": "9",
        "fields": {
            "question": "How many steps you took today?",
            "data": {
                "0": {
                    "answertype":1,
                    "answerrange":[0,10000],
                    "answer": "No pain to near death",
                    "date": "01.01.2016",
                    "value": 0
                }
            }
        }
    }
  ];

}}})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow, MD',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson, MD',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor, MD',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
