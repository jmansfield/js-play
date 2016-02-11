// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('.tour').on('click', '.expand', function(event) {
    //Find the comments ul and fade it in
    event.preventDefault(); //This prevents the browsers default behaviour of jumping to the top on clicking the # in a the a href??
    $(this).closest('.tour').find('.comments').fadeToggle();
  });
});
