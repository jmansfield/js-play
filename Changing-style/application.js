// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('#all-tours').on('click', '.tour', function() {
    // alert("Hello world");
    $(this).toggleClass('highlighted');
    $(this).find('.comments').show();
  });
});
