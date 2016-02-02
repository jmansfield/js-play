// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('#all-tours').on('mouseenter', '.tour', function() {
    // alert("Crap");
    $(this).find('.modal-overlay').css({'visibility': 'visible', 'opacity': '1', 'border': '2px solid blue'});
    $(this).find('.details').css({'visibility': 'visible', 'opacity': '1', 'border': '2px solid blue'});
  });
});
