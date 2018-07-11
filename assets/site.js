var fs = require("fs");
var Spotify = require('node-spotify-api');
var Twitter = require('twitter');
var keys = require("./twitterKeys.js");
var request = require("request");


var spotify = new Spotify({
  id: 'f7d3adb5899d4fb6952d239bd86d4a4b',
  secret: 'd488f5ec1f04460393945b5097cd2a35'
});

// Function for running a Spotify search
var getMeSpotify = function(songName) {
  if (songName === undefined) {
    songName = "What's my age again";
  }

  spotify.search(
    {
      type: "track",
      query: songName
    },
    function(err, data) {
      if (err) {
        console.log("Error occurred: " + err);
        return;
      }

      var songs = data.tracks.items;

      for (var i = 0; i < songs.length; i++) {
        console.log(i);
        console.log("artist(s): " + songs[i].artists.map(getArtistNames));
        console.log("song name: " + songs[i].name);
        console.log("preview song: " + songs[i].preview_url);
        console.log("album: " + songs[i].album.name);
        console.log("-----------------------------------");
      }
    }
  );
};


// Function for running a Twitter Search
var getMyTweets = function() {
  var client = new Twitter(keys);

  var params = {
    screen_name: "DjDahi"
  };
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {
      for (var i = 0; i < tweets.length; i++) {
        console.log(tweets[i].created_at);
        console.log("");
        console.log(tweets[i].text);
      }
    }
  });
};
