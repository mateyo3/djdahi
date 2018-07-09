console.log('Spotify API this is loaded');


var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: 'f7d3adb5899d4fb6952d239bd86d4a4b',
  secret: 'd488f5ec1f04460393945b5097cd2a35'
});

spotify
  .request('https://api.spotify.com/v1/users/mateyo3/playlists/5ZkbY6yUuneJPRZn7XW6FS?')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err);
  });

module.exports = spotifyKeys;
