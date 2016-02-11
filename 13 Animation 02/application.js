// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('#all-tours').on('click', '.tour', function() {
    // alert("Crap");
    $('.modal-overlay').toggleClass('active'); // Within the CSS the transition animation is set
  });
});
