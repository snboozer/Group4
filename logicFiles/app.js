// ticketmaster api key format//
// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key} //
// https://app.ticketmaster.com/discovery/v2/{resource}.json?apikey=**{API key}

$(document).on("click", ".mood-button", function(playlist){
    playlist.preventDefault();

    $("#content-holder").empty();
    var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";
    var genre = "rap";
    // var zipCode = "19123"
    var city = "philadelphia";
    var currentTime = moment.js;

    // ticketmaster api date format e.g.
    // dateTime: "2019-07-07T00:00:00Z"
    
    
    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&startDateTime=2019-07-09T00:00:00Z&sort=date,asc&city=" + city + "&apikey=" + apiKey,
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json._embedded.events);
                    // Parse the response.
                    // Do other things.
                    for (var i = 0; i < 5; i++){
                        var contentBox = document.createElement("div");
                        contentBox.classList.add("TM-content");
                        contentBox.innerHTML = json._embedded.events[i].name;
                        $("#content-holder").append($(contentBox));    
                 };
        },
        error: function(xhr, status, err) {
                    // This time, we do not end up here!
                 }
      });
    });
    
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
