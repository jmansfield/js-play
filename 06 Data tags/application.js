// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  // This event handler waits for a click on a button element before running //
  $('button').on('click', function(){
    var amount = $(this).closest('.vacation').data('price'); // Traverese up the DOM to find the closest ancestor with class vacation and gets the price from the data attribute
    var price = $('<p>From $'+amount+'</p>'); //Set a variable that is html code
    $(this).closest('.vacation').append(price); // Traverses up the DOM to find the closest ancestor with a vacation class and then appends
    $(this).remove(); // Removes the button
  });
});
