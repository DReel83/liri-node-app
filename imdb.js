// use- npm install request (-g for global installation)
// Grabs the request package
var request = require('request');
// var request = require('request');

// url would be omdb 

var movieName = process.argv[2];   // .parse for multi-word titles???

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
;	}
});

// similar api requests for twitter and spotify will have twitter or spotify variables. 
// Look at the NPM 








              // ----Wiki Example---- //

// Grab the request package...
// var request = require('request');

// Run the request function...
// The request function takes in a URL then returns three arguments:
// 1. It provides an error if one exists.
// 2. It provides a response (usually that the request was successful)
// 3. It provides the actual body text from the website <---- what actually matters.
// request('https://en.wikipedia.org/wiki/Kudos_(granola_bar)', function (error, response, data) {

	// If the request was successful...
	// if (!error && response.statusCode == 200) {

		// Then log the body from the site!


// 		console.log(data)
// 	}
// });

     // --sample of useing variable for url below--//
// var someurl = the url
// request(someurl, function(err, response data){
// 
// })

// // INSTRUCTIONS:
// // Level 1: Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created
// // Level 2 (More Challenging): Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrive the year it was created. 
// // ----------------------------------------------------------------------------------

// // ... are the places where you need to code!

// // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// // ...

// // Grab or assemble the movie name  and store it in a variable called "movieName"
// // ...

// // Then run a request to the OMDB API with the movie specified 
// var queryUrl = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&r=json';

// // This line is just to help us debug against the actual URL.  
// console.log(queryUrl);


// // Then create a request to the queryUrl
// // ...
	
// 	// If the request is successful
// 	// ... 

// 	// Then log the Release Year for the movie
// 	// ...