var Twitter = require('twitter');

var params = {screen_name: 'davidpreel'};

client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  	console.log("--------------------------------------------------")
    console.log(tweets);
  	console.log("--------------------------------------------------")
  
  }else{
  	console.log(error);
  }
});