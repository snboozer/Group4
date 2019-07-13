

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAQ9upIsSCFqMlxzM2uWqjBMxUTHRtZOMg",
    authDomain: "fir-58006.firebaseapp.com",
    databaseURL: "https://fir-58006.firebaseio.com",
    projectId: "fir-58006",
    storageBucket: "fir-58006.appspot.com",
    messagingSenderId: "1033199777878",
    appId: "1:1033199777878:web:e23d3e8896a47a6a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var email;
var password;
var city; 
console.log(city);
var state; 
console.log(state);

$("#submit").click(function (event) {
    event.preventDefault()
    var User = {
        email: $("#email").val().trim(),
        password: $("#password").val().trim(),
        city: $("#city").val().trim(),
        state: $("#state").val().trim(),
    }
    database.ref().push(User)
    $("#email").val("")
    $("#password").val("")
    $("#city").val("")
    $("#state").val("")
    // console.log(User)
});

$('#form').on('submit', function(e) {
    e.preventDefault()
    email = $('#email').val().trim();
    password = $('#password').val().trim();
    // change .shownFirst
    submitted = $('.shownFirst');
    submitted.hide();
    hidden = $('.hidden').show();
    city = $('#city').val().trim();
    console.log(city); 
    state = $('#state').val().trim();
    console.log(state);
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
    for ( var i = 0; i < moods.length; i++ ) {
        var moodButton = $('<button>');
        moodButton.text(moods[i]);
        moodButton.addClass("mood-button");
        $(moodButton).attr('id', moods[i]);
        $('#moods').append(moodButton);
    };
};


$(document).on('click', '.mood-button', function(e) {
    e.preventDefault();
    console.log(e.target.textContent);
    var buttonClicked = e.target.textContent;
    var buttonsToShow;

    if (buttonClicked === 'chill') {
        buttonsToShow = chill
    } else if (buttonClicked === 'upbeat') {
        buttonsToShow = upbeat
    } else {
        buttonsToShow = aggro
    };


    for(var j = 0; j < buttonsToShow.length; j++) {
        var btn2 = $("<button>");
        btn2.text(buttonsToShow[j]);
        $(btn2).attr('id', buttonsToShow[j]);
        btn2.addClass('keyword');
        
        $('#moods').append(btn2);
        $('.mood-button').hide(500);
    };
    $('#moods').append(backButton);
});

$(document).on('click', '#back', function(reset){
    $('#moods').empty();
    moodButtonCreate();
});

var lat = [];
// console.log(lat);
               
var long = [];
// console.log(long);

var eventName = [];
console.log(eventName);
var eventDate = [];
console.log(eventDate);
var eventTime = [];
console.log(eventTime);
var imageLink = [];

// ticketmaster api key format//
// https://app.ticketmaster.com/{package}/{version}/{resource}.json?apikey=**{API key} //
// https://app.ticketmaster.com/discovery/v2/{resource}.json?apikey=**{API key}

$(document).on("click", ".keyword", function (playlist) {
    playlist.preventDefault();
    console.log(playlist.target.id);
    // Empty content holder so it doesn't repeat on button clicks.
    $("#event-display").empty();
    // $('.keyword').hide(500);


    // Ticketmaster api key for the project
    var apiKey = "9Ava0NGUIwM3dsiyal9TG4fQF74ykDqb";

    // Keywords variable for api request
    var genre = playlist.target.id;

    // // City variable for request, user will have to input a city for this to work
    // var city = "philadelphia";

    // var state = "pa"

    // moment.js calculations to be added so ticketmaster will only return future events.
    var currentTime = moment();
    console.log(currentTime);
    
    var date = currentTime.format("YYYY-MM-DD");
    

    // ticketmaster api date format e.g.
    // dateTime: "2019-07-15T00:00:00Z"

    // Ajax function taken from ticketmaster documentation https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/#search-events-v2
    

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

                eventName.push(json._embedded.events[i].name);
                console.log(eventName);
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
            
        
        },
    })

});


$(document).on( "click", ".TM-content", function (event) {
    event.preventDefault();

    var latLongIndex = $(this).val();
    console.log(lat[latLongIndex]);
    console.log(long[latLongIndex]);
    console.log(eventName[latLongIndex]);
    console.log(eventDate[latLongIndex]);
    console.log(eventTime[latLongIndex]);
    $('#moods').empty();
    var infoDisplay = $('<p>').text(eventName[latLongIndex]+ " " + eventDate[latLongIndex] + " " + eventTime[latLongIndex]);
    $('#moods').append(infoDisplay);

    var eventImage = $('<img>');
    eventImage.attr({
        src: imageLink[latLongIndex],
        class: "event-image"
        
    });

    $('#moods').append(eventImage);



    $.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://developers.zomato.com/api/v2.1/search?lat=" + lat[latLongIndex] + "&lon=" + long[latLongIndex] + "&radius=500&sort=rating",
        type: "GET",
        headers: {
            "user-key": "cf48117b55f3fd5be39bd68e58889b30",
        }
    }).then(function (response) {
        console.log(response);
    });
});
    