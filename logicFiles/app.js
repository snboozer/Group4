// Note: soundcloud is not accepting new apps, must use different music api.

// Code below needs to be modified
window.onload = buttonCreate();
// window.onload is unobtrusive compared to document

// Create buttons to represent array items
function buttonCreate(){
    $("#button-holder").empty();
    // $("#user-input").empty();
    for (i = 0; i < topics.length; i++){
        var gifButton = $("<button>");
        gifButton.addClass("btn");
        gifButton.text(topics[i]);
        $("#button-holder").append(gifButton); 
    }
}