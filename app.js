var restify = require('restify');
var YQL     = require('yql');
var builder = require('botbuilder');
var builder1 = require('botbuilder');
var express = require('express');
var app = express();
var querystring = require('querystring');
var request = require('request');

// ---  ansh start -- 
const AIMLInterpreter = require('aimlinterpreter');
//const builder = require('botbuilder');

const aimlInterpreter = new AIMLInterpreter({ name: 'Hella', age: '25' });
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/ai.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/alice.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/astrology.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/atomic.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/badanswer.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/biography.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/bot.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/bot_profile.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/client.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/client_profile.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/computers.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/continuation.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/date.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/default.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/drugs.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/emotion.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/food.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/geography.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/gossip.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/history.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/humor.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/imponderables.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/inquiry.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/interjection.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/iu.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/junktest.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/knowledge.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/literature.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/loebner10.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/money.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/movies.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp0.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp1.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp2.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp3.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp4.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp5.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/mp6.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/music.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/numbers.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/personality.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/phone.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/pickup.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/politics.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/primeminister.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/primitive-math.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/psychology.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/pyschology.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction.names.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction0.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction1.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction2.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction3.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reduction4.safe.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/reductions-update.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/religion.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/salutations.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/science.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/sex.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/sports.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/stack.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/stories.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/that.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/update_mccormick.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/update1.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/wallace.aiml']);
aimlInterpreter.loadAIMLFilesIntoArray(['./aiml_alice/xfind.aiml']);

const aimlPromise = function (question) {
    return new Promise(function (resolve, reject) {
        aimlInterpreter.findAnswerInLoadedAIMLFiles(question, function (answer, wildCardArray, input) {
            console.log(answer,'getting answererer for this question',question)
             return resolve(answer);
//should also handle reject!!! this is demo code only :)
        });
        
      
 

        
    })
};

// ---  ansh end -- 


var apiairecognizer = require('api-ai-recognizer'); 
var request = require('request');

var form = {
    username: 'usr',
    password: 'pwd',
    opaque: 'opaque',
    logintype: '1'
};

var formData = querystring.stringify(form);
var contentLength = formData.length;

var count1;
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

app.listen(4000 , function(){
console.log("port 4000 is running");
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    //appId: process.env.MICROSOFT_APP_ID,
	appId: "37f09aa3-c891-4e47-a024-eb91207d54cf",
	appPassword: "BziRNqA4v218QhYmqkEZTKF"
    //appPassword: process.env.MICROSOFT_APP_PASSWORD
});

//Message EndPoint: https://immense-wildwood-68928.herokuapp.com/api/messages
//on BotFramework

//var connector1 = new builder1.ChatConnector({
    //appId: process.env.MICROSOFT_APP_ID,
	//appId: "9f598da8-9569-4809-88cf-de05cd8d2500",
	//appPassword: "ckTkiAw55q43UnL2oirMhEA"
    //appPassword: process.env.MICROSOFT_APP_PASSWORD
//});


// Listen for messages from users 
server.post('/api/messages', connector.listen());

//server.post('/api/messages', connector1.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')

/*var bot = new builder.UniversalBot(connector, function (session) 

{
	if (session.message.text.includes("hella"))
	{
	session.send('Brillio product \n\n Brillio creates innovative digital experiences for your customers. We use advanced digital engineering to ensure these experiences run smoothly.\n\n And we enable customer-facing and operational insights with the power of big data analytics.');
	}
	else if (session.message.text.includes("how r u"))
	{
	session.send("I am doing good\n\nHow r u");
	}
	else if (session.message.text.includes("hi"))
	{
	session.send('Hi \n\n How can i help you');
	}
	else if (session.message.text.includes("happy"))
	{
	session.send('Good to see you happy');
	}
	//else
	//{
    //session.send("You said: %s", session.message.text);
	//}
});*/

var bot = new builder.UniversalBot(connector, function (session) {
		session.send('Sorry, I did not understand \'%s\'. Please check your input.', session.message.text);
});

//var bot1 = new builder1.UniversalBot(connector1);

//var LUIS_MODEL_URL='https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/8469e743-3cf0-4c53-9b2c-67e13b9326b2?subscription-key=2a4eb0bdf86042eb9138c85fd724dd6c&timezoneOffset=0&verbose=true&q='

var LUIS_MODEL_URL='https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/bd8ad2bc-a774-4fd9-8c10-c462a8190b97?subscription-key=1d9451278d7c49e3a9e5e08c13132c80&verbose=true&timezoneOffset=0&q='

var recognizer = new builder.LuisRecognizer(LUIS_MODEL_URL);

var recognizer_api = new apiairecognizer('5672dcdc85c547bfa08116c8926dd389'); 


bot.recognizer(recognizer);

//bot.recognizer(recognizer_api,recognizer);
//bot.recognizer(recognizer_api);
//bot1.recognizer(recognizer_api);//api.ai


var intents = new builder.IntentDialog({recognizers:[recognizer]});

var intents1 = new builder.IntentDialog({ recognizers: [recognizer_api] }); //api.ai

/*.matches('None',(session, args)=>{
 session.send('Hi this is the none intent you said: \'%s\'.',session.message.text)
})
.matches('weather',(session, args)=>{
 session.send('you asked for weather')
})*/

/*bot.dialog('weather', [
  function(session,args,next){
  session.send('Welcome to the Weather finder! We are analyzing your message: \'%s\'', session.message.text);
  }
  ]).triggerAction({
    matches: 'weather'
});*/

  /*bot.dialog('greeting', [
  function(session,args,next){
  session.send('Hey Brillio  \n\n\nI am your smart auto assistant powered by Hella. Help me with your car details so that I can do a lot better for you. Which Lexus auto do you own?');
  /*if (session.message.text.includes("hi"))
  {
  session.send('Hey Brillio  \n\n\nI am your smart auto assistant powered by Hella. Help me with your car details so that I can do a lot better for you. Which Lexus auto do you own? ');
  }
  //session.send('Welcome to the Weather finder! We are //analyzing your message: \'%s\'', session.message.text);*/
 /* }
  ]).triggerAction({
    matches: 'greeting'
});*/

//bot.dialog('/',(intents,intents1)); 
bot.dialog('*',intents); 
//bot.dialog('/',intents); 


//bot1.dialog('/',intents1); 



intents1.matches('whatIsWeather',[ function(session,args)
{ var city11 = builder.EntityRecognizer.findEntity(args.entities,'city'); 
if (city11)
{ 
var city_name = city11.entity; 
var url = 'http://api.apixu.com/v1/current.json?key=a3245afef9f940f3b68111100171108&q=' + city_name; 
request(url,function(error,response,body)
{ 
body = JSON.parse(body);

temp = body.current.temp_c; 
session.send("It's " + temp + " degrees celsius in " + city_name); 
}); 
}else
{ builder.Prompts.text(session, 'Which city do you want the weather for?');
 } }, function(session,results)
 { 
 var city_name = results.response; 
 var url = 'http://api.apixu.com/v1/current.json?key=a3245afef9f940f3b68111100171108&q=' + city_name; 
 request(url,function(error,response,body)
 { 
 body = JSON.parse(body);
 temp = body.current.temp_c; 
 session.send("It's " + temp + " degrees celsius in " + city_name); }); 
 } ]);




bot.dialog('greeting', [
  function(session,args,next){
 
//var userTxt= session.message.text; 
/*request({
    headers: {
      //'Content-Length': contentLength,
	  'Authorization': 'Bearer 5672dcdc85c547bfa08116c8926dd389',
      'Content-Type' : 'application/json; charset=utf-8'
	  //'Content-Type': 'application/json'
	  //'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://api.api.ai/v1/query?v=20150910',
    body: '{"query": '+session.message.text+',"timezone": "America/New_York","lang": "en","sessionId": "1234567890"	}',
    method: 'POST'
  }, function (err, res, body) {
    //it works!
	body = JSON.parse(body);
	temp = body.result.fulfillment.speech;
	tempp = body.result.metadata.intentName;
	//sleep.sleep(4);
	session.send(temp);
	//console.log(session.message.text);
  }); */
 
 
 
  var greetingListEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'greetingList');
  
  if(greetingListEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
	
	//session.send('model %s', args[0])
	builder.Prompts.text(session, 'Hey Brillio  \n\n\nI am your smart auto assistant powered by Hella. Help me with your car details so that I can do a lot better for you. Which Lexus auto do you own?');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', modelEntity)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter valid input');
	}
   count1=1; 
  //session.send('Let me know your car number');
  
  //99999999999999999999999999999999999999999999999999999
  //var bot1 = new builder.UniversalBot(connector);
  //bot1.recognizer(recognizer_api);//api.ai
  
  //bot1.dialog('/',intents1); 
/*

intents1.matches('whatIsWeather',[ function(session,args)
{ var city11 = builder.EntityRecognizer.findEntity(args.entities,'city'); 
if (city11)
{ 
var city_name = city11.entity; 
var url = 'http://api.apixu.com/v1/current.json?key=a3245afef9f940f3b68111100171108&q=' + city_name; 
request(url,function(error,response,body)
{ 
body = JSON.parse(body);

temp = body.current.temp_c; 
session.send("It's " + temp + " degrees celsius in " + city_name); 
}); 
}else
{ builder.Prompts.text(session, 'Which city do you want the weather for?');
 } }, function(session,results)
 { 
 var city_name = results.response; 
 var url = 'http://api.apixu.com/v1/current.json?key=a3245afef9f940f3b68111100171108&q=' + city_name; 
 request(url,function(error,response,body)
 { 
 body = JSON.parse(body);
 temp = body.current.temp_c; 
 session.send("It's " + temp + " degrees celsius in " + city_name); }); 
 } ]);
 
*/ 
  //99999999999999999999999999999999999999999999999999999999
  
  }
  ]).triggerAction({
    matches: 'greeting'
});






bot.dialog('None', [
  function(session,args,next){
  /*request({
    headers: {
      //'Content-Length': contentLength,
	  'Authorization': 'Bearer 5672dcdc85c547bfa08116c8926dd389',
      'Content-Type' : 'application/json; charset=utf-8'
	  //'Content-Type': 'application/json'
	  //'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://api.api.ai/v1/query?v=20150910',
    body: '{"query": '+session.message.text+',"timezone": "America/New_York","lang": "en","sessionId": "1234567890"	}',
    method: 'POST'
  }, function (err, res, body) {
    //it works!
	body = JSON.parse(body);
	temp = body.result.fulfillment.speech;
	tempp = body.result.metadata.intentName;
	//sleep.sleep(4);
	session.send(temp);
	
  });*/
  if(count1===1)
	{
	 
	 session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nLet me know your car number ', session.message.text);
	//session.send('Let me know your car number');
	}
	else if(count1===2)
	{
		
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nLet me know your car number ', session.message.text);
	//session.send('Let me know your car number')
	//session.send('How can I help you today?')
	}
	else if(count1===3)
	{
	
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nHow can I help you today?', session.message.text);
	//session.send('How can I help you today?')
	//session.send('Let me know what kind of service you like to go with Routine Service / Auxiliary service')
	}
	else if(count1===4)
	{
	
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nLet me know what kind of service you like to go with Routine Service / Auxiliary service ', session.message.text);
	//session.send('Let me know what kind of service you like to go with Routine Service / Auxiliary service')
	//session.send('When are you planning to go for this service?')
	}
	else if(count1===5)
	{
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nWhen are you planning to go for this service?', session.message.text);
	//session.send('When are you planning to go for this service?');
	//session.send('Let me know which time do you prefer for the service?\n\n9 am / 11 am / 3 pm/ 5 pm')
	}
	else if(count1===6)
	{
	
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nLet me know which time do you prefer for the service?\n\n9 am / 11 am / 3 pm/ 5 pm', session.message.text);
	//session.send('Let me know which time do you prefer for the service?\n\n9 am / 11 am / 3 pm/ 5 pm')
	//session.send('Generally people go for oil change, battery check-up, general servicing during a routine service. What are your preferences?')
	}
	else if(count1===7)
	{
	
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nGenerally people go for oil change, battery check-up, general servicing during a routine service. What are your preferences?', session.message.text);
	//session.send('Generally people go for oil change, battery check-up, general servicing during a routine service. What are your preferences?')
	//session.send('how do you prefer to move around?\n\nLoaner Car/ Shuttle service')
	}
	else if(count1===8)
	{
	
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nhow do you prefer to move around?\n\nLoaner Car/ Shuttle service', session.message.text);
	//session.send('how do you prefer to move around?\n\nLoaner Car/ Shuttle service')
	//session.send('Your loaner car would be available by 9:05 am and needs to be returned while taking your car back./ Driver named John will pick you by 9:15 am. You can reach him at (541) 754-3010)')
	}
	else if(count1===11)
	{
	
	session.send('I am not trained to answer \'%s\' \n\nPlease help me by giving questions related to Lexus car Service\n\nLet me know what you wish to go with\n\nCar Detailing/ Buy Accessories', session.message.text);
	//session.send('Let me know what you wish to go with\n\nCar Detailing/ Buy Accessories')
	}
	
	else{
	
	
var IntentText;


bot.recognizer({
  recognize: function (context, done) {
  var intent = { score: 0.0 };

     // intent = { score: 1.0, intent: context.message.text };
      
      var help1 = context.message.text;
      //console.log('inside help')
      console.log(help1)
      //console.log('inside inside help')
      IntentText = help1;
      //console.log('inside inside help', IntentText)
      
      intent =  { score: 1.0, intent: 'help' };
//        if (context.message.text) {
//            switch (context.message.text.toLowerCase()) {
//                case 'help':
//                    intent = { score: 1.0, intent: 'Help' };
//                    break;
//                case 'goodbye':
//                    intent = { score: 1.0, intent: 'Goodbye' };
//                    break;
//            }
//        }
        done(null, intent);
    }
});

bot.dialog('alicedialog', [
  //  session.endDialog("This bot will echo back anything you say. Say 'goodbye' to quit.");

    function (session,args,next) {
        console.log('test session', args,next)
        
        aimlPromise(IntentText).then(res => session.send(` ${res}`));
        
//        builder.Prompts.text(session, 'Hi! Ask me something... ');
        /*if(IntentText.toLowerCase() == 'hi' || IntentText.toLowerCase() == 'hello') {
            session.send('Hi! Ask me something... ');
        } else {
            aimlPromise(IntentText).then(res => session.send(` ${res}`));
        }*/
    },
    
  function (session, results) {
        console.log('first')
        console.log(results)
        console.log(results,'session, results')
      console.log('second')
        
  //      console.log(results,'session, res')
    
    
}]).triggerAction({ matches: 'help' });





	
	
	//session.send('Sorry, I did not understand you or maybe just lost track of our conversation. Please enter a valid input.', session.message.text);
	
	//session.send('Let me know what kind of service you like to go with Routine Service / Auxiliary service');
	
	//------------------------------------
/*
	//bot1.dialog('/',intents1); 
intents1.matches('whatIsWeather',[ function(session,args)
{ var city11 = builder.EntityRecognizer.findEntity(args.entities,'city'); 
if (city11)
{ 
var city_name = city11.entity; 
var url = 'http://api.apixu.com/v1/current.json?key=a3245afef9f940f3b68111100171108&q=' + city_name; 
request(url,function(error,response,body)
{ 
body = JSON.parse(body);

temp = body.current.temp_c; 
session.send("It's " + temp + " degrees celsius in " + city_name); 
}); 
}else
{ builder.Prompts.text(session, 'Which city do you want the weather for?');
 } }, function(session,results)
 { 
 var city_name = results.response; 
 var url = 'http://api.apixu.com/v1/current.json?key=a3245afef9f940f3b68111100171108&q=' + city_name; 
 request(url,function(error,response,body)
 { 
 body = JSON.parse(body);
 temp = body.current.temp_c; 
 session.send("It's " + temp + " degrees celsius in " + city_name); }); 
 } ]);
*/
	
	//------------------------------------
	
	}
  }
  ]).triggerAction({
    matches: 'None'
	//onInterrupted: function (session) {
    //   session.send('Please provide a valid car number');
	//   }
});

bot.dialog('service', [
  function(session,args,next){
  
  //var modelEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'model');
  
  //if(modelEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	//{
	//session.send('model %s', args[0])
	builder.Prompts.text(session, 'Let me know what kind of service you like to go with Routine Service / Auxiliary service');
	//}
	//else
	//{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', modelEntity)
	  //builder.Prompts.text(session,modelEntity);
	//builder.Prompts.text(session, 'please enter Lexus ES Hybrid/ Lexus LX/ Lexus RC F');
	//}
  count1=4;
  
  //session.send('Let me know your car number');
  }
  ]).triggerAction({
    matches: 'service'
});

bot.dialog('car', [
  function(session,args,next){
  
  var modelEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'model');
  
  if(modelEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
	//session.send('model %s', args[0])
	builder.Prompts.text(session, "Let me know your car number");
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', modelEntity)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter Lexus ES Hybrid/ Lexus LX/ Lexus RC F');
	}
  
   count1=2; 
  //session.send('Let me know your car number');
  }
  ]).triggerAction({
    matches: 'car'
});


bot.dialog('carregistered', [
  function(session,args,next){
  
  var carnumberEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'carnumber');
  
  if(carnumberEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
	//session.send('model %d', carnumberEntity);
	//session.send('model %s', carnumberEntity);
	builder.Prompts.text(session, 'Fine. How can I help you today?');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', modelEntity)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'Please enter a valid car number of format XXXX YY where X is number, Y is any alphabet.');
	}
	count1=3;
  
  //session.send('Let me know your car number');
  }
  ]).triggerAction({
    matches: 'carregistered'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });


  bot.dialog('carservice', [
  function(session,args,next){
  
  var typeofserviceEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'typeofservice');
  
  if(typeofserviceEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
		//session.send('model %s', results.response)
		builder.Prompts.text(session, "When are you planning to go for this service?");
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', args.intent.entities)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'Please enter a valid service input, either Routine Service or Auxiliary service.');
	}
  
   //session.send('Let me know your car number');
   count1=5;
  }
  
  /*,  to get user ans
  function(session, results) {
        session.endDialog('Car service selected %s!', results.response);
    }*/
  ]).triggerAction({
    matches: 'carservice'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
  
  bot.dialog('date', [
  function(session,args,next){
  
  //var dateEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'date');
  //if(dateEntity)
  
 	//{
		builder.Prompts.text(session, "That's great. Let me know which time do you prefer for the service?\n\n9 am / 11 am / 3 pm/ 5 pm");
	//}
	//else
	//{
	//builder.Prompts.text(session, 'The date you entered is //fully occupied. Please enter a new date.');
	//}
	
	
   count1=6;
  }
  ]).triggerAction({
    matches: 'date'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
  
  
  bot.dialog('time', [
  function(session,args,next){
  
  //session.send('model %s', results.response)
		builder.Prompts.text(session, "Generally people go for oil change, battery check-up, general servicing during a routine service. What are your preferences?");
		count1=7;
  }
  ]).triggerAction({
    matches: 'time'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
  
  
  bot.dialog('servicerequest', [
  function(session,args,next){
  
  var servicetypeEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'servicetype');
  
  if(servicetypeEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
		//session.send('model %s', results.response)
		builder.Prompts.text(session, 'While we service your car, how do you prefer to move around?\n\nLoaner Car/ Shuttle service');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', args.intent.entities)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'Sorry, Please enter a proper routine service as follows:\n\noil change, battery check-up, general servicing, all of them');
							
	}
  count1=8;
   //session.send('Let me know your car number');
  }
  /*,  to get user ans
  function(session, results) {
        session.endDialog('Car service selected %s!', results.response);
    }*/
  ]).triggerAction({
    matches: 'servicerequest'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
  

 bot.dialog('movearount1', [
  function(session,args,next){
  
  var movearoundtypeEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'movearoundtype');
  
  if(movearoundtypeEntity)

	{
		//session.send('model %s', results.response)
		builder.Prompts.text(session, 'Your loaner car would be available by 9:05 am and needs to be returned while taking your car back./ Driver named John will pick you by 9:15 am. You can reach him at (541) 754-3010)');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', args.intent.entities)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter valid input');
	}
  count1=9;
   //session.send('Let me know your car number');
  }
  /*,  to get user ans
  function(session, results) {
        session.endDialog('Car service selected %s!', results.response);
    }*/
  ]).triggerAction({
    matches: 'movearount1'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
   
   
  bot.dialog('movearount2', [
  function(session,args,next){
  
  var movearoundtypeEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'movearoundtype');
  
  if(movearoundtypeEntity)

	{
		//session.send('model %s', results.response)
		builder.Prompts.text(session, 'Driver named John will pick you by 9:15 am. You can reach him at (541) 754-3010)');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', args.intent.entities)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter valid input');
	}
  count1=10;
   //session.send('Let me know your car number');
  }
  /*,  to get user ans
  function(session, results) {
        session.endDialog('Car service selected %s!', results.response);
    }*/
  ]).triggerAction({
    matches: 'movearount2'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
 
 
 
 bot.dialog('carservice1', [
  function(session,args,next){
  
  var typeofserviceEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'typeofservice');
  
  if(typeofserviceEntity)
  
	{
		//session.send('model %s', results.response)
		builder.Prompts.text(session, 'Let me know what you wish to go with\n\nCar Detailing/ Buy Accessories');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', args.intent.entities)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'Please enter a valid service input, either Car Detailing or Buy Accessories.');
	}
  count1=11;
   //session.send('Let me know your car number');
  }
  
  ]).triggerAction({
    matches: 'carservice1'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
  
  
  bot.dialog('cardetailing', [
  function(session,args,next){
  
  var servicetypeEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'servicetype');
  
  if(servicetypeEntity)
  
	{
		//session.send('model %s', results.response)
		builder.Prompts.text(session, 'When are you planning to go for this service?');
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', args.intent.entities)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter valid input');
	}
  count1=12;
   //session.send('Let me know your car number');
  }
  
  ]).triggerAction({
    matches: 'cardetailing'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
 
  bot.dialog('end', [
  function(session,args,next){
  //session.send('model %s', results.response)
		builder.Prompts.text(session, "Your Welcome");
  }
  ]).triggerAction({
    matches: 'end'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  });
 
 

 
 /*
 
 bot.dialog('movearound', [
  function(session,args,next){
  
  var movearoundtypeEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'movearoundtype');
  
  session.send('you selected %s', results.response)
  if(movearoundtypeEntity)
  
  //if (modelEntity === 'Lexus' ||  modelEntity === 'lexus')
	{
		//builder.Prompts.text(session, 'you are going with');
		session.send('you1 selected %s', results.response)
		//builder.Prompts.text(session, 'While we service your car, how do you prefer to move around?\n\nLoaner Car/ Shuttle service');
		if(results.response == "loaner car")
		{
		builder.Prompts.text(session,"Your loaner car would be available by 9:05 am and needs to be returned while taking your car back./ Driver named John will pick you by 9:15 am. You can reach him at (541) 754-3010)");
		} else if(results.response == "shuttle service")
		{
			builder.Prompts.text(session,"Driver named John will pick you by 9:15 am. You can reach him at (541) 754-3010)");
		}
		else 
		{
		builder.Prompts.text(session, 'please enter valid input');
		}
	}
	else
	{
	  //user
	  //session.send('model %s', args[0])
	  //session.send('model %s', args.intent.entities)
	  //builder.Prompts.text(session,modelEntity);
	builder.Prompts.text(session, 'please enter valid input');
	}
  
   //session.send('Let me know your car number');
  }/*,function(session, results) 
	{
		if(results.response =="loaner car")
		{
		builder.Prompts.text(session,"Your loaner car would be available by 9:05 am and needs to be returned while taking your car back./ Driver named John will pick you by 9:15 am. You can reach him at (541) 754-3010)");
		} else if(results.response == "shuttle service")
		{
			builder.Prompts.text(session,"Driver named John will pick you by 9:15 am. You can reach him at (541) 754-3010)");
		}
		else
		builder.Prompts.text(session, 'please enter valid input');
	}*/
		
    
  /*,  to get user ans
  function(session, results) {
        session.endDialog('Car service selected %s!', results.response);
    }*/
  /*]).triggerAction({
    matches: 'movearound'
	//onInterrupted: function (session) {
    //    session.send('Please provide a valid car number');
  }); */
 
  

/*bot.dialog('SearchHotels', [
    function (session, args, next) {
        session.send('Welcome to the Hotels finder! We are analyzing your message: \'%s\'', session.message.text);

        // try extracting entities
        var cityEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'builtin.geography.city');
        //var airportEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'AirportCode');
        if (cityEntity) {
            // city entity detected, continue to next step
            session.dialogData.searchType = 'city';
            next({ response: cityEntity.entity });
        } /*else if (airportEntity) {
            // airport entity detected, continue to next step
            session.dialogData.searchType = 'airport';
            next({ response: airportEntity.entity });
        }*//* else {
            // no entities detected, ask user for a destination
            builder.Prompts.text(session, 'Please enter your destination');
        }
    },
    function (session, results) {
        var destination = results.response;

        var message = 'Looking for hotels';
        if (session.dialogData.searchType === 'airport') {
            message += ' near %s airport...';
        } else {
            message += ' in %s...';
        }

        session.send(message, destination);

        // Async search
        Store
            .searchHotels(destination)
            .then(function (hotels) {
                // args
                session.send('I found %d hotels:', hotels.length);

                var message = new builder.Message()
                    .attachmentLayout(builder.AttachmentLayout.carousel)
                    .attachments(hotels.map(hotelAsAttachment));

                session.send(message);

                // End
                session.endDialog();
            });
    }
]).triggerAction({
    matches: 'SearchHotels',
    onInterrupted: function (session) {
        session.send('Please provide a destination');
    }
});

bot.dialog('ShowHotelsReviews', function (session, args) {
    // retrieve hotel name from matched entities
    var hotelEntity = builder.EntityRecognizer.findEntity(args.intent.entities, 'Hotel');
    if (hotelEntity) {
        session.send('Looking for reviews of \'%s\'...', hotelEntity.entity);
        Store.searchHotelReviews(hotelEntity.entity)
            .then(function (reviews) {
                var message = new builder.Message()
                    .attachmentLayout(builder.AttachmentLayout.carousel)
                    .attachments(reviews.map(reviewAsAttachment));
                session.endDialog(message);
            });
    }
}).triggerAction({
    matches: 'ShowHotelsReviews'
});

bot.dialog('Help', function (session) {
    session.endDialog('Hi! Try asking me things like \'search hotels in Seattle\', \'search hotels near LAX airport\' or \'show me the reviews of The Bot Resort\'');
}).triggerAction({
    matches: 'Help'
});

// Spell Check
if (process.env.IS_SPELL_CORRECTION_ENABLED === 'true') {
    bot.use({
        botbuilder: function (session, next) {
            spellService
                .getCorrectedText(session.message.text)
                .then(function (text) {
                    session.message.text = text;
                    next();
                })
                .catch(function (error) {
                    console.error(error);
                    next();
                });
        }
    });
}

// Helpers
function hotelAsAttachment(hotel) {
    return new builder.HeroCard()
        .title(hotel.name)
        .subtitle('%d stars. %d reviews. From $%d per night.', hotel.rating, hotel.numberOfReviews, hotel.priceStarting)
        .images([new builder.CardImage().url(hotel.image)])
        .buttons([
            new builder.CardAction()
                .title('More details')
                .type('openUrl')
                .value('https://www.bing.com/search?q=hotels+in+' + encodeURIComponent(hotel.location))
        ]);
}

function reviewAsAttachment(review) {
    return new builder.ThumbnailCard()
        .title(review.title)
        .text(review.text)
        .images([new builder.CardImage().url(review.image)]);
}



/*********************************************


/**
 * Fetch weather details from Yahoo Weather API
 * @param loc Location to get the weather for
 */
/* 
function weatherForecast(loc, cb) {
  const query = new YQL('select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="' + loc + '")');

  query.exec((err, data) => {
    if (err) return cb(err);

    return cb(null, data.query);
  });
}

/**
 * Find forecast for a specified date (if available)
 */
 /*

function forecastForADate(forecastDate, forecasts) {
  return forecasts.find((item) => {
    var date = moment(item.date, 'DD MMM YYYY');
    return date.isSame(forecastDate);
  });
}

/** Prompts to get the current weather conditions */
/*
bot.dialog('Weather.GetForecast', [
  function(session, args, next) {
	session.send('Welcome to the Weather finder! We are analyzing your message: \'%s\'', session.message.text);
    const location = builder.EntityRecognizer.findEntity(args.entities, 'builtin.geography.city');

    if (!location) {
      builder.Prompts.text(session, 'Where?');
    } else {
      next({
        response: location.entity
      });
    }
  },
  function(session, results) {
    const loc = results.response;

    weatherForecast(loc, (err, data) => {
      var res = data.results.channel.item.condition;
      session.send(res.text + ' with a temperature of ' + res.temp + ' degress');
    });
  } /////////////////////////////
/*]).triggerAction({
    matches: 'Weather.GetForecast'
 });
*/
/*
]).triggerAction({
    matches: 'Weather.GetForecast',
    onInterrupted: function (session) {
        session.send('Please provide a weather destination');
    }
});


/** Fetch the weather forecast for a city */

/*
bot.dialog('GetForecast', [
  function(session, args, next) {
    const location = builder.EntityRecognizer.findEntity(args.entities, 'builtin.geography.city');
    const timeperiod = builder.EntityRecognizer.findEntity(args.entities, 'builtin.datetime.date');

    if (!location) {
      builder.Prompts.text(session, 'Where?');
    } else {
      next({
        location: location.entity,
        timeperiod: timeperiod
      });
    }
  },
  function(session, results) {
    const loc = results.location;

    weatherForecast(loc, (err, data) => {
      const res = data.results.channel.item.forecast;

      if (!results.timeperiod) {

        res.forEach((item) => {
          var message = item.day + ': ' + item.text + ' with a high of ' + item.high + ' and a low of ' + item.low;
          session.send(message);
        });

      } else {

        var forecastdate = moment(results.timeperiod.resolution.date, 'YYYY-MM-DD');
        var forecast = forecastForADate(forecastdate, res);

        if (forecast) {
          var msg = forecast.day + ': ' + forecast.text + ' with a high of ' + forecast.high + ' and a low of ' + forecast.low;
          session.send(msg);
        } else {
          var msg = "Whoops, forecast not available yet!";
          session.send(msg);
        }
      }
    });
  }
]).triggerAction({
    matches: 'GetForecast'//,
    //onInterrupted: function (session) {
    //session.send('Please provide a GetForecast');
    //}
});
*/

function apiCall(args){
request({
    headers: {
      //'Content-Length': contentLength,
	  'Authorization': 'Bearer 5672dcdc85c547bfa08116c8926dd389',
      'Content-Type' : 'application/json; charset=utf-8'
	  //'Content-Type': 'application/json'
	  //'Content-Type': 'application/x-www-form-urlencoded'
    },
    uri: 'https://api.api.ai/v1/query?v=20150910',
    body: '{"query": session.message.text,"timezone": "America/New_York","lang": "en","sessionId": "1234567890"	}',
    method: 'POST'
  }, function (err, res, body) {
    //it works!
	body = JSON.parse(body);
	temp = body.result.fulfillment.speech;
	tempp = body.result.metadata.intentName;
	session.send(temp);
	console.log(temp);
	console.log(tempp);
  });

}
