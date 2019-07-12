

    
var uBeat = ['rap', 'dance', 'rock', 'pop'];
var chill = ['r&b', 'classical', 'jazz'];
var aggro = ['metal', 'punk'];


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


    for(var j = 0; j < buttonsToShow.length; j++) {
        var btn2 = $("<button>");
        btn2.text(buttonsToShow[j]);
        $(btn2).attr('id', buttonsToShow[j]);
        btn2.addClass('keyword');
        
        $('#genreBtns').append(btn2);
        $('.mood-button').hide(500);
        // $('.beat').hide(500);


    };
    
})





// ticketmaster api key format//
// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key} //
// https://app.ticketmaster.com/discovery/v2/{resource}.json?apikey=**{API key}

$(document).on("click", ".keyword", function (playlist) {
    playlist.preventDefault();
    console.log(playlist.target.id);
    // Empty content holder so it doesn't repeat on button clicks.
    $("#content-holder").empty();
    // $('.keyword').hide(500);


    // Ticketmaster api key for the project
    var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";

    // Keywords variable for api request
    var genre = playlist.target.id;

    // City variable for request, user will have to input a city for this to work
    var city = "philadelphia";

    var state = "pa"

    // moment.js calculations to be added so ticketmaster will only return future events.
    var currentTime = moment();
    
    var date = currentTime.format("YYYY-MM-DD");
    

    // ticketmaster api date format e.g.
    // dateTime: "2019-07-15T00:00:00Z"

    // Ajax function taken from ticketmaster documentation https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2
    var lat = [];
    console.log(lat);
               
    var long = [];
    console.log(long);

    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&startDateTime=" + date + "T00:00:00Z&sort=date,asc&city=" + city + "&stateCode=" + state + "&apikey=" + apiKey,

        async: true,
        dataType: "json",
        success: function (json) {
            console.log(json._embedded.events);
            // Parse the response.
            // Do other things.

            // Create divs dynamically to hold api information.
            for (var i = 0; i < 5; i++) {
                // Get latitude and longitude from event and push to lat and long arrays.
                lat.push(json._embedded.events[i]._embedded.venues[0].location.latitude);
                
                long.push(json._embedded.events[i]._embedded.venues[0].location.longitude);

                // Create 5 new divs.
                var contentBox = document.createElement("button");
                // $(contentBox).attr("value", i);
                $(contentBox).val(i)
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


    $(document).on( "click", ".TM-content", function (event) {
        event.preventDefault();
        // var city = $("#cityInput").val().trim();
        // console.log(city)
        var latLongIndex = $(this).val();
        console.log(latLongIndex);

        // $.ajax({
        //     url:"https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/cities?q=" + city,
        //     type: "GET",
        //     headers: {
        //         "user-key": "cf48117b55f3fd5be39bd68e58889b30",
        //     }
        // }).then(function (response) {
        //     console.log(response);
        // });
    });
