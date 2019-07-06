// Note: soundcloud is not accepting new apps, must use different music api.

// Code below needs to be modified
// window.onload = buttonCreate();
// // window.onload is unobtrusive compared to document

// // Create buttons to represent array items
// function buttonCreate(){
//     $("#button-holder").empty();
//     // $("#user-input").empty();
//     for (i = 0; i < topics.length; i++){
//         var gifButton = $("<button>");
//         gifButton.addClass("btn");
//         gifButton.text(topics[i]);
//         $("#button-holder").append(gifButton); 
//     }
// }

$(document).on("click", ".mood-button", function(playlist){
    playlist.preventDefault();
    // Clear any previous gifs.
    // $(".mood-button").empty();
    
    var genre = $(this).text().toLowerCase();
    console.log(genre);
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/playlist/4341978/tracks?limit=2"
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var apiResults = response.data;
        console.log(apiResults);
    })
})
