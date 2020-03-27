
var twit = require('twit'); // require the lib
var config = require('./config.js'); // require the configurations
const randomItem = require('random-item');
var schedule = require('node-schedule');


var Twitter = new twit(config); // pass the configuration to the twit

var arr = [ 
            'Hey, have you already washed your hands?',
            'Coronavirus is not kidding, please wash your hands.',
            'I dont know why you still going out, but please remember to wash your hands.',
            'CORONA VIRUSSSS(Cardi B voice)!!! Wash your hands!!!!',
            'Do you wanna play a game? Please, wash your hands.',
            'Im here to remind you to wash your hands :)',
            'Once again: dont forget to wash your hands.',
            'Time to wash your hands!',
            'WASSSSHHH YOUR HANDS',
            'Do me a favour: wash your hands!',
            'Did you wash your hands today?',
            'Doing nothing? Omg, please wash your hands.',
            'Wash your hands at least for 20 seconds and DO NOT LISTEN to Bolsonaro!',
            'Please wash your hands and stay home.',
            'There is no economy when people are dead, so please stay home and wash your hands.',
            'Wash your hands, take your vitamins, stay home if you can and ignore Brazilian president.'
                
           ];

var j = schedule.scheduleJob("*/30 * * * *", function(){

    Twitter.post('statuses/update', 
    { 
        status: randomItem (arr) 
    }, 
    function(err, data, response) {
        console.log(data)
    });


});   