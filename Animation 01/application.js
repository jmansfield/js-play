// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('#all-tours').on('click', '.tour', function() {
    // alert("Hello world");
    $(this).toggleClass('highlighted');

    // Check to see if the current element has a class of highlighted and if so animate it up
    if ($(this).hasClass('highlighted')) {
      $(this).find('.comments').show();
      // $(this).animate({'top': '-50px'});
    } else { // Else if it doesn't animate it closed
      $(this).find('.comments').hide();
      // $(this).animate({'top': '0px'});
    }
  });
});
