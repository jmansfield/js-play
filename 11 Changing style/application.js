// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('#all-tours').on('click', '.tour', function() { // On clicking an element with class tour within an element of id all-tours
    $(this).toggleClass('highlighted'); // Toggle the addition and subtraction of teh class highlighted
    // $(this).find('.comments').show();
  });
});
