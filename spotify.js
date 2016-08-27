var spotify = require('spotify');

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