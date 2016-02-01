// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {

  //Listen for a number being entered into the form field with id quantity
  $('.vacation').on('keyup', '.quantity', function() {

    //Get the price for the vacation
    var price = +$(this).closest('.vacation').data('price');

    //Get the quantity entered
    var quantity = +$(this).val();

    //Set the total to price * quantity
    $('#total').text(price * quantity);

    // alert(quantity);

  });
});
