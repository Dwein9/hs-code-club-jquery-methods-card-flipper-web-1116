$( function(){

  $( "#card-one").click(function(){
    $(this).toggleClass("flipped")
  });

	// code click event for card-two here
  $( "#card-two").click(function(){
    $(this).toggleClass("flipped")
  });
  // code click event for card-three here
  $( "#card-three").click(function(){
    $(this).toggleClass("flipped")
  });
 })
// The click event should use the toggleClass method. If the card is on the front, it should add the class of flipped.
// If it's on the back, it should remove that class.
