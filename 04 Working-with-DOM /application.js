// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  var price = $('<p>From $399.99</p>'); // This shows how to put HTML into a variable
  $('.vacation').append(price); //This add the content of the variable as the last child element of vacation

  // Other ways of manipulating the DOM
  $('.vacation').before("Before");
  $('.vacation').after("After");
  $('.vacation').prepend("Prepend");

  $('button').remove(); //This removes the button element
});
