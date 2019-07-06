// Note: soundcloud is not accepting new apps, must use different music api.


// spotify sdk
window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQCb-cTDOW25PHdZlQ8eUwcvtvW71AKkgW2asjFXNan9ByjUYq4rpKSrlFEAS-yZHQmyDwNTpMtgS6OZC1upFjN5zeGBHJpRjOH7fkALtFW35x50juRvLPOqkjY8lOkHDSqm0VIpz1yyfCJjy-DapII-xZpL_DZW1_CRU3u11WdZ8kzdsnoRg9i9';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };


//     $("#button-holder").empty();
//     // $("#user-input").empty();
//     for (i = 0; i < topics.length; i++){
//         var gifButton = $("<button>");
//         gifButton.addClass("btn");
//         gifButton.text(topics[i]);
//         $("#button-holder").append(gifButton); 
//     }
// }

// $(document).on("click", ".mood-button", function(playlist){
//     playlist.preventDefault();
//     // Clear any previous gifs.
//     // $(".mood-button").empty();
    
//     var genre = $(this).text().toLowerCase();
//     // console.log(genre);
//     var queryURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/4341978/tracks?limit=2"
    
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         var apiResults = response.data[0].preview;
//         console.log(apiResults);
//         // for (var i = 0; i < apiResults.length; i++);
//         // console.log(apiResults[i]);
//     })
// })

