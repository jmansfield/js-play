
// This function is created for reuse in both event handlers below
function showTicket () {
  $(this).closest('.confirmation').find('.ticket').slideToggle();
}


// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  alert($('button').length);
  $('.confirmation').on('click', 'button', showTicket);
  $('.confirmation').on('mouseenter', 'h3', showTicket);
});
