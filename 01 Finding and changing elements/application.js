// This event handler waits for the page to load before executing the code inside to be run
$(document).ready(function() {
  $("h1"); //Selects all H1's
  $("h1").text(); //Selects all H1's and stores the text of them in a variable
  $("h1").text("Change the text to this"); //Selects all H1's and changes the text of them to what's in the string
});
