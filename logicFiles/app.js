// // Note: soundcloud is not accepting new apps, must use different music api.

// // Code below needs to be modified
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



$(document).ready(function() {
var uBeat = ['rap', 'dance', 'rock'];
var chill = ['rnb', 'classical', 'pop'];
var aggro = ['heavy metal', 'punk', 'dance'];

$('.mood-button').on('click', function(e) {
    e.preventDefault();
    console.log(e.target.textContent);
    var buttonClicked = e.target.textContent
    var buttonsToShow
    if (buttonClicked === 'Chill') {
        buttonsToShow = chill
    } else if (buttonClicked === 'Upbeat') {
        buttonsToShow = uBeat
    } else {
        buttonsToShow = aggro
    }
    // for(var i = 0; i < uBeat.length; i++) {
    //     var btn = $("<button>");
    //     btn.text(uBeat[i]);
    //     btn.addClass('beat');
    //     $('#form').append(btn);
    //     $('.mood-button').hide(500);
    // }

    for(var j = 0; j < chill.length; j++) {
        var btn2 = $("<button>");
        btn2.text(buttonsToShow[j]);
        btn2.addClass('chilling');
        $('#form').append(btn2);
        $('.mood-button').hide(500);
        $('.beat').hide(500);

    }
    // $('#form').hide(500);
    
})
// once one of the main btns are clicked the main btns should disappear.
// once it disappears three music types should pop up.
// if a music type is picked those should pop up.

});


