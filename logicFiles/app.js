

$(document).ready(function() {
<<<<<<< HEAD
var uBeat = ['rap', 'dance', 'rock', 'pop'];
var chill = ['rnb', 'classical', 'jazz'];
var aggro = ['metal', 'punk'];
=======
var uBeat = ['rap', 'dance', 'rock'];
var chill = ['rnb', 'classical', 'pop'];
var aggro = ['heavy metal', 'punk', 'dance'];
>>>>>>> master

$('.mood-button').on('click', function(e) {
    e.preventDefault();
    console.log(e.target.textContent);
    var buttonClicked = e.target.textContent;
    var buttonsToShow;

    if (buttonClicked === 'Chill') {
        buttonsToShow = chill
    } else if (buttonClicked === 'Upbeat') {
        buttonsToShow = uBeat
    } else {
        buttonsToShow = aggro
    };

<<<<<<< HEAD
    for(var j = 0; j < buttonsToShow.length; j++) {
        var btn2 = $("<button>");
        btn2.text(buttonsToShow[j]);
        $(btn2).attr('id', buttonsToShow[j]);
        btn2.addClass('keyword');
        
        $('#genreBtns').append(btn2);
        $('.mood-button').hide(500);
        // $('.beat').hide(500);
=======
    for(var j = 0; j < chill.length; j++) {
        var btn2 = $("<button>");
        btn2.text(buttonsToShow[j]);
        btn2.addClass('chilling');
        $('#genreBtns').append(btn2);
        $('.mood-button').hide(500);
        $('.beat').hide(500);
>>>>>>> master

    };
    
})





// ticketmaster api key format//
// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key} //
// https://app.ticketmaster.com/discovery/v2/{resource}.json?apikey=**{API key}

$(document).on("click", ".mood-button", function (playlist) {
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

    // $.ajax({
    //     type:"GET",
    //     url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&startDateTime=2019-07-09T00:00:00Z&sort=date,asc&city=" + city + "&apikey=" + apiKey,

    // // $(".mood-button").empty();
    // var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";
    // var genre = "rap";
    // // var zipCode = "19123"
    // var city = "philadelphia";
    // var startTime = "2019-07-10";

    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&sort=date,asc&city=" + city + "&apikey=" + apiKey,

        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json._embedded.events);
            // Parse the response.
            // Do other things.

            // Create divs dynamically to hold api information.
            for (var i = 0; i < 5; i++) {
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
    })

})


    $(document).on("click", "#cityBtn", function (event) {
        event.preventDefault();
        var city = $("#cityInput").val().trim();
        console.log(city)

        $.ajax({
            url:"https://developers.zomato.com/api/v2.1/cities?q=" + city,
            type: "GET",
            headers: {
                "user-key": "cf48117b55f3fd5be39bd68e58889b30",
            }
        }).then(function (response) {
            console.log(response);
        });
    })
    // $.ajax({
    //     type:"GET",
    //     url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&startDateTime=2019-07-09T00:00:00Z&sort=date,asc&city=" + city + "&apikey=" + apiKey,
    //     async:true,
    //     dataType: "json",
    //     success: function(json) {
    //                 console.log(json._embedded.events);
    //                 // Parse the response.
    //                 // Do other things.

    //                 // Create divs dynamically to hold api information.
    //                 for (var i = 0; i < 5; i++){
    //                     // Create 5 new divs.
    //                     var contentBox = document.createElement("div");
    //                     // Give them a class attribute "TM-content".
    //                     contentBox.classList.add("TM-content");
    //                     // Assign the name information from api to each <div class="TM-content"></div>.
    //                     contentBox.innerHTML = json._embedded.events[i].name;
    //                     // Append newly created divs to content-holder div.
    //                     $("#content-holder").append($(contentBox));    
    //              };
    //     },

    //     error: function(xhr, status, err) {
    //         // This time, we do not end up here!
    //      }


    // });
});

});
