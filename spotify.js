var spotify = require('spotify');

var query = process.argv[2];
}
 
spotify.search({ type: 'track', query }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
   var songInfo = data.tracks.items[0].name;

   console.log(songInfo);

});