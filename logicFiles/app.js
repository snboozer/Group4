$(document).ready(function() {

var uBeat = ['rap', 'dance', 'rock', 'pop'];
var chill = ['rnb', 'classical', 'jazz'];


var email;
var password;
var city;
var state;

$("#submit").click(function(event) {
    event.preventDefault()
    var User = {
        email: $("email").val().trim(),
        password: $("password").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
    }
    database.ref().push(User)
    $("email").val("")
    $("password").val("")
    $("#city").val("")
    $("#state").val("")
});

$('#form').on('submit', function(e) {
    e.preventDefault()
    email = $('#email').val().trim();
    password = $('#password').val().trim();
    submitted = $('.shownFirst');
    submitted.hide();
    hidden = $('.hidden').show();
    city = $('#city').val().trim();
    state = $('#state').val().trim();
    moodButtonCreate();
});

var moods = ['upbeat', 'chill', 'aggro']
var upbeat = ['rap', 'dance', 'rock', 'pop'];
var chill = ['r&b', 'classical', 'jazz'];
var aggro = ['metal', 'punk'];

var backButton = $('<button>');
backButton.text('back');
$(backButton).attr('id', 'back');

function moodButtonCreate() {
    for (var i = 0; i < moods.length; i++) {
        var moodButton = $('<button>');
        moodButton.text(moods[i]);
        moodButton.addClass("mood-button");
        $(moodButton).attr('id', moods[i]);
        $('#moods').append(moodButton);
    };
};


$(document).on('click', '.mood-button', function(e) {
    e.preventDefault();
    var buttonClicked = e.target.textContent;
    var buttonsToShow;

    if (buttonClicked === 'chill') {
        buttonsToShow = chill
    } else if (buttonClicked === 'upbeat') {
        buttonsToShow = upbeat
    } else {
        buttonsToShow = aggro
    };


    for (var j = 0; j < buttonsToShow.length; j++) {
        var btn2 = $("<button>");
        btn2.text(buttonsToShow[j]);
        $(btn2).attr('id', buttonsToShow[j]);
        btn2.addClass('keyword');

        $('#moods').append(btn2);
        $('.mood-button').hide(500);
    };
    $('#moods').append(backButton);
});

$(document).on('click', '#back', function(reset) {
    $('#moods').empty();
    $('#event-display').empty();
    moodButtonCreate();
});

var lat = [];

var long = [];

var eventName = [];

var eventDate = [];

var eventTime = [];

var imageLink = [];

// ticketmaster api key format//
// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key} //
// https://app.ticketmaster.com/discovery/v2/{resource}.json?apikey=**{API key}

$(document).on("click", ".keyword", function(playlist) {
    playlist.preventDefault();
    // Empty content holder so it doesn't repeat on button clicks.
    $("#event-display").empty();

    // Ticketmaster api key for the project
    var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";

    // Keywords variable for api request
    var genre = playlist.target.id;

    // moment.js calculations to be added so ticketmaster will only return future events.
    var currentTime = moment();

    var date = currentTime.format("YYYY-MM-DD");


    // ticketmaster api date format e.g.
    // dateTime: "2019-07-15T00:00:00Z"

    // Ajax function taken from ticketmaster documentation https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2


    $.ajax({
        type: "GET",
        url: "https://app.ticketmaster.com/discovery/v2/events.json?keyword=" + genre + "&startDateTime=" + date + "T00:00:00Z&sort=date,asc&city=" + city + "&stateCode=" + state + "&apikey=" + apiKey,

        async: true,
        dataType: "json",
        success: function(json) {

            // Create divs dynamically to hold api information.
            for (var i = 0; i < 5; i++) {
                // Get latitude and longitude from event and push to lat and long arrays.
                lat.push(json._embedded.events[i]._embedded.venues[0].location.latitude);

                long.push(json._embedded.events[i]._embedded.venues[0].location.longitude);

                eventName.push(json._embedded.events[i].name);
                eventDate.push(json._embedded.events[i].dates.start.localDate);
                eventTime.push(json._embedded.events[i].dates.start.localTime);
                imageLink.push(json._embedded.events[i].images[0].url)

                // Create 5 new divs.
                var contentBox = document.createElement("button");
                // $(contentBox).attr("value", i);
                $(contentBox).val(i)
                // Give them a class attribute "TM-content".
                contentBox.classList.add("TM-content");
                // Assign the name information from api to each <div class="TM-content"></div>.
                contentBox.innerHTML = json._embedded.events[i].name;
                // Append newly created divs to content-holder div.
                $("#event-display").append($(contentBox));
            };

            $('#event-display').append(backButton);

        },
    })
});

var eventIndex;

$(document).on("click", ".TM-content", function(event) {
    event.preventDefault();

    eventIndex = $(this).val();
    
    $('#moods').empty();

    var infoDisplay = $('<p>').text(eventName[eventIndex] + " " + eventDate[eventIndex] + " " + eventTime[eventIndex]);
    $('#moods').append(infoDisplay);

    var eventImage = $('<img>');
    eventImage.attr({
        src: imageLink[eventIndex],
        class: "event-image"

    });

    $('#moods').append(eventImage);
    var eatButton = $("<button>");
    eatButton.attr({
        id: "eat-button",
    });
    eatButton.text("find restaurants nearby");
    $("#moods").append(eatButton);
});


$(document).on("click", "#eat-button", function(eat) {
    eat.preventDefault();
    $('#moods').empty();

    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?lat=" + lat[eventIndex] + "&lon=" + long[eventIndex] + "&radius=500&sort=rating",
        type: "GET",
        headers: {
            "user-key": "cf48117b55f3fd5be39bd68e58889b30",
        }
    }).then(function(response) {
        for (var i = 0; i < 5; i++) {
            var food = $("<p>").text(response.restaurants[i].restaurant.name + " " + response.restaurants[i].restaurant.location.address);
            $('#moods').append(food);
        }
    });
});
});

