// This files contains the custom code that uses/calls to jQuery

// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $('#items li'); //Selects all li elements within an element with id of items (cascades)
  $('#items > li'); //Selects only li elements in the next level within an element with id of items
  $('#items, .promo'); // This shows how you can select multiple items
  $('#items li:first'); // Selects only the first li item in the element with ID items (others include :last, :odd, :even)
});
