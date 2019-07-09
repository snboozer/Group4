// ticketmaster api key format//
// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key} //
// https://app.ticketmaster.com/discovery/v2/{resource}.json?apikey=**{API key}

$(document).on("click", ".mood-button", function(playlist){
    playlist.preventDefault();

    // Empty content holder so it doesn't repeat on button clicks.
    $("#content-holder").empty();

    // Ticketmaster api key for the project
    var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";

    // Keywords variable for api request
    var genre = "rap";
    
    // City variable for request, user will have to input a city for this to work
    var city = "philadelphia";

    // moment.js calculations to be added so ticketmaster will only return future events.
    var currentTime = moment.js;

    // ticketmaster api date format e.g.
    // dateTime: "2019-07-07T00:00:00Z"
    
    // Ajax function taken from ticketmaster documentation https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2

    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&startDateTime=2019-07-09T00:00:00Z&sort=date,asc&city=" + city + "&apikey=" + apiKey,

    // Empty content holder so it doesn't repeat on button clicks.
    $("#content-holder").empty();

    // Ticketmaster api key for the project
    var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";

    // Keywords variable for api request
    var genre = "rap";
    
    // City variable for request, user will have to input a city for this to work
    var city = "philadelphia";

    // moment.js calculations to be added so ticketmaster will only return future events.
    var currentTime = moment.js;

    // ticketmaster api date format e.g.
    // dateTime: "2019-07-07T00:00:00Z"
    
    // Ajax function taken from ticketmaster documentation https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2

    $.ajax({
        type:"GET",
        url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&startDateTime=2019-07-09T00:00:00Z&sort=date,asc&city=" + city + "&apikey=" + apiKey,
        async:true,
        dataType: "json",
        success: function(json) {
                    console.log(json._embedded.events);
                    // Parse the response.
                    // Do other things.

                    // Create divs dynamically to hold api information.
                    for (var i = 0; i < 5; i++){
                        // Create 5 new divs.
                        var contentBox = document.createElement("div");
                        // Give them a class attribute "TM-content".
                        contentBox.classList.add("TM-content");
                        // Assign the name information from api to each <div class="TM-content"></div>.
                        contentBox.innerHTML = json._embedded.events[i].name;
                        // Append newly created divs to content-holder div.
                        $("#content-holder").append($(contentBox));    
                 };
        },

        error: function(xhr, status, err) {
            // This time, we do not end up here!
         }


    });
});
