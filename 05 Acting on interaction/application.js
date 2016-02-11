// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  // This event handler waits for a click on a button element before running //
  $('button').on('click', function(){
    var price = $('<p>From $399</p>'); //Set a variable that is html code
    $('.vacation').append(price);
    $('button').remove(); // Removes the button
  });
});
