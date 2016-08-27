console.log("Welcome to LIRI");
var client = require("./keys.js");
var twitter = require("twitter");
var imdb = require("request");
var spotify = require("spotify");
var fs = require("fs");
var twitter = new Twitter(client);
var search = process.argv[2];

// Switch statement for LIRI commands.
switch(){
	case "movie-this":
		movie();
		break;

	case "spotify-this":
		spotify();
		break;

	case "my-tweets":
		twitter();
		break;

	default:
		console.log("err");

}

// IMDB  movie function to search for movies
function movie(){
	var movieName = process.argv[2]; 

	var url = 'http://www.omdbapi.com/?t='+ movieName +'&y=&plot=short&r=json';

	request(url, function(err, response, data){
		if (!err && response.statusCode == 200){

			//console.log(data);
			console.log('-----------------------------------------')
			var title = JSON.parse(data)["Title"];
			var year = JSON.parse(data)["Year"];
			var imdbRating = JSON.parse(data)["imdbRating"];
			var country = JSON.parse(data)["Country"];
			var language = JSON.parse(data)["Language"];
			var plot = JSON.parse(data)["Plot"];
			var actors = JSON.parse(data)["Actors"];
			//console.log(--------------------);
			console.log(title + '\n' + year  + '\n' + imdbRating + '\n' + country  + '\n' + language + '\n' + plot + '\n' + actors);
			console.log('-----------------------------------------');
		}
}

// Spotify function to search for song info.
function spotify(){
	var search = process.argv[2];

 
spotify.search({ type: 'track', query: search }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else{
    	var songData =  data.tracks.items[0];
    	//console.log(songData);

    	var artist = songData.artists[0].name;
    	var name = songData.name;
    	var album = songData.album.name;
    	var preview = songData.preview_url;


    	console.log("Name: " + name + "\nArtist/s: " + artist + "\nAlbum: " + album + "\nPreview URL: " + preview);
    }	  


});

// Twitter function, grabs recents tweets
function twitter(){
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
