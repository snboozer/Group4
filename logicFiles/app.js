// Note: soundcloud is not accepting new apps, must use different music api.


// spotify sdk
// window.onSpotifyWebPlaybackSDKReady = () => {
//     const token = 'BQCb-cTDOW25PHdZlQ8eUwcvtvW71AKkgW2asjFXNan9ByjUYq4rpKSrlFEAS-yZHQmyDwNTpMtgS6OZC1upFjN5zeGBHJpRjOH7fkALtFW35x50juRvLPOqkjY8lOkHDSqm0VIpz1yyfCJjy-DapII-xZpL_DZW1_CRU3u11WdZ8kzdsnoRg9i9';
//     const player = new Spotify.Player({
//       name: 'Web Playback SDK Quick Start Player',
//       getOAuthToken: cb => { cb(token); }
//     });
  
//     // Error handling
//     player.addListener('initialization_error', ({ message }) => { console.error(message); });
//     player.addListener('authentication_error', ({ message }) => { console.error(message); });
//     player.addListener('account_error', ({ message }) => { console.error(message); });
//     player.addListener('playback_error', ({ message }) => { console.error(message); });
  
//     // Playback status updates
//     player.addListener('player_state_changed', state => { console.log(state); });
  
//     // Ready
//     player.addListener('ready', ({ device_id }) => {
//       console.log('Ready with Device ID', device_id);
//     });
  
//     // Not Ready
//     player.addListener('not_ready', ({ device_id }) => {
//       console.log('Device ID has gone offline', device_id);
//     });
  
//     // Connect to the player!
//     player.connect();
//   };

// NAPSTER PLAYER //

// Napster.init({
//     consumerKey: 'Y2FkNWYzNTMtOWY5My00MjMwLTk4MGMtNzU2MTcxYThkNjkx', // application key of your application
//     isHTML5Compatible: true,
//     player: "player"
//   });

// Napster.member.set({
// accessToken: 'oauth access token',
// refreshToken: 'oauth refresh token'
// });

// Napster.player.on('ready', function(e) {
//     console.log("initialized");
//     Napster.member.set({accessToken: 'oauth access token'}); // If not set earlier
//     Napster.player.auth();
// });


// Napster.player.on('ready', function(e) {
//     Napster.member.set({accessToken: 'oauth access token'}); // If not set earlier
//     Napster.player.auth();
// });


// // #### Playing a track
// Napster.player.play('Tra.5156528');


// // #### Playing a track with an offset (in seconds)
// Napster.player.play('Tra.5156528', 40);


// // #### Pausing
// Napster.player.pause();


// // #### Resuming a paused track
// Napster.player.resume();


// // #### Seek
// // For example, to seek to 0:10 in a given track:

// Napster.player.seek();


// // #### Volume

// // Set volume between muted (0) and max (1.0)

// Napster.player.setVolume(.5);


// // ### Data
// // The Napster object exposes some API convenience methods. There are methods for HTTP GET, POST, PUT, and DELETE. The first parameter determines if a secure request is made.


// Napster.player.on('playevent', function(e) {
//   console.log(e.data);
// });

// Napster.player.on('playtimer', function(e) {
//   console.log(e.data);
// });

// Napster.player.on('error', function(e) {
//   console.log(e.data);
// });
// ticketmaster api key format//
// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key} //
// https://app.ticketmaster.com/discovery/v2/{resource}.json?apikey=**{API key}

$(document).on("click", ".mood-button", function(playlist){
    playlist.preventDefault();
//     // Clear any previous gifs.
    // $(".mood-button").empty();
    var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";
    var genre = "pop";
    var zipCode = "19104"
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&postalCode=" + zipCode + "&apikey=" + apiKey,
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json._embedded);
                    // Parse the response.
                    // Do other things.
                 },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });
    });
    
//     // var genre = $(this).text().toLowerCase();
//     // console.log(genre);
//     // var queryURL = "https://api.napster.com/v2.1/tracks/top?apikey=Y2FkNWYzNTMtOWY5My00MjMwLTk4MGMtNzU2MTcxYThkNjkx"
    
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/4341978/tracks?limit=2"

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         var apiResults = response.data[0].preview;
//         console.log(apiResults);
//         $("#audio-player").attr("src", apiResults);
//         // for (var i = 0; i < apiResults.length; i++);
//         // console.log(apiResults[i]);
//     })
// })

