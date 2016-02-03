// This files contains the custom code that uses/calls to jQuery

// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('.promo'); //Selects HTML elements with a class of promo
  $('#items'); //Selects HTML elements with an id of items
  $('.promo').css({'border': '1px solid red',}); // Finds ll elements with calss of promo and injects CSS into it
});
