// Game Logic

var data = [
  {
       name : "Player1",
       image : "#",
       attack : "21",
       counterAttack:"15"
   },
   {
       name : "Player2",
       image : "#",
       attack : "50",
       counterAttack:"25"
   },
   
   {
       name : "player3",
       image : "#",
       attack : "99",
       counterAttack:"5"
   },
   {
       name : "Player4",
       image : "#",
       attack : "30",
       counterAttack:"15"
   },
]

$(data).each(function(i, e){
  $(".characters").append("<li><img src='" + e.image + "' data-attack='" + e.attack + "' =></li>")
})

var $characters = $(".characters li img");

$characters.on("click", function(){
  console.log($(this).attr("data-attack"));
})


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
