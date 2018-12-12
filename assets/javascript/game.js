// Game Logic
function attackFunction() {

}
for (var i = 0; i < 4; i++) {

    var heroes = $("<div>");
  
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    heroes.addClass("characters");
  
    // Each imageCrystal will be given a src link to the crystal image
    heroes.attr("src", "#");
  
    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    heroes.attr("attack", 10);

    heroes.attr("counter-attack", 10);
  
    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#characters").append(heroes);
  }


  /* Logic to be developed:
  When I click a character- he becomes my character,
  Others move down and are selectable now.
  once I select my opponent- I click attack
  Health is decreased by attacks and counter attacks
  Attack builds on my character
  Once HP hits 0- attack choosing phase starts.
  Game ends when I get 0 hp or no more opponents (3 wins)

  Questions:
  do I want each character to be unique
  What is the logic for moving characters, CSS manipulation?
  How do I limit what is a clickable event? 
  */
