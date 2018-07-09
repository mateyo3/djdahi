console.log('Spotify API this is loaded');


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: 'f7d3adb5899d4fb6952d239bd86d4a4b',
  secret: 'd488f5ec1f04460393945b5097cd2a35'
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

console.log("Spotify API: " + data);
});

module.exports = spotifyKeys;
