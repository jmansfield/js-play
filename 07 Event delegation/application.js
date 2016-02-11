// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {

  // This event handler waits for a click event on only buttons inside the class vacation before executing the code inside
  $('.vacation').on('click', 'button', function() {
    //Here we create a variable vacation that checks the DOM for the closest element to the thing being clicked with the class vacation
    var vacation = $(this).closest('.vacation');
    // Here we check the data tag in the html element vacation to retrieve it's price and create a variable out of it
    var amount = vacation.data('price');
    // Here we appeand the price to the HTML sentence in a variable
    var price = $('<p>From $'+amount+'</p>');
    // Here we display the contents on teh variable price in the UI
    vacation.append(price);
    // Here we remove the item clicked
    $(this).remove();
  });

  // This event handler waits for a click event on any element with class onsale-filter inside the id filters before executing the code inside
  $('#filters').on('click', '.onsale-filter', function() {
    // This removes any existing highlights first before applying the highlighting
    $('.highlighted').removeClass('highlighted');
    // Here we add a class highlighted to the class .onsale with any element with class vacation
    $('.vacation').filter('.onsale').addClass('highlighted');
  });

  // This event handler waits for a click event on any element with class expiring inside the id #filters before executing the code inside
  $('#filters').on('click', '.expiring-filter', function() {
    // This removes any existing highlights first before applying the highlighting
    $('.highlighted').removeClass('highlighted');
    // Here we add a class highlighted to any element with class .expiring inside the id #filters before executing the code
    $('.vacation').filter('.expiring').addClass('highlighted');
  });

});
