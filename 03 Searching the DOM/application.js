// This files contains the custom code that uses/calls to jQuery

// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {

  //Searching the DOM
  $('#items li'); //Selects all li elements within an element with id of items (cascades)
  $('#items > li'); //Selects only li elements in the next level within an element with id of items
  $('#items, .promo'); // This shows how you can select multiple items
  $('#items li:first'); // Selects only the first li item in the element with ID items (others include :last, :odd, :even)
  $('#items').find('li').first(); //This does the same as the above but is faster??

  // These queries traverse up the DOM
  $('li').first('').parent(); // Finds the parents of li items

  // These queries traverse down the DOM
  $('#items').children(); // Only the direct children (does not cascade)
  

});
