// Game Logic

var data = [
  {
       name : "Luke",
       image : 'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg/revision/latest/scale-to-width-down/500?cb=20170927034529',
       attack : "21",
       counterAttack:"15",
       health:"100"
   },
   {
       name : "Obi-Wan",
       image : 'https://nerdist.com/wp-content/uploads/2017/12/download.jpg',
       attack : "50",
       counterAttack:"25",
       health:"100"
   },
   
   {
       name : "Darth Maul",
       image : 'https://www.sideshowtoy.com/wp-content/uploads/2015/10/star-wars-darth-maul-sixth-scale-feature-100156.jpg',
       attack : "99",
       counterAttack:"5",
       health:"100"
   },
   {
       name : "Darth Vader",
       image : 'https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpeg?region=0%2C23%2C1400%2C785&width=768',
       attack : "30",
       counterAttack:"15",
       health:"100"
   },
]
var winCondition;

$(data).each(function(i, e){
     $(".roster").append("<li class='portrait' ' data-attack='" + e.attack + "' counterAttack='" + e.counterAttack + "'health=" + e.health + "><p class='name'>"+e.name+"</p><img src='" + e.image + "'><p class='hp'>HP:"+e.health+ "</p></li>")
    winCondition = i;
        
    })

var ally;
var enemy;
var firstPick= true;
var noPicks = false;
var heroPick =false;
var $characters = $(".portrait");
// var $characters = $(".roster li img");
var allyAtt;
var boostAllyAtt= allyAtt;
var allyHP;
var enemyHP;
var target;


$characters.on("click", function(){//ENEMIES
    if (firstPick == false && noPicks== false){
    target= $(this);
    enemyAtt = $(this).attr("counterAttack");
    enemyHP = $(this).attr("health");
    $(this).appendTo('.enemySide')
    console.log("enemy att is" + enemyAtt);
    console.log(enemyHP);
    console.log("wins needed"+ winCondition)
    noPicks = true;
 
}
})

$characters.on("click", function(){//ALLY
    if (firstPick == true && noPicks== false && heroPick == false){
        console.log(this)
        allyAtt = $(this).attr("data-attack");
        boostAllyAtt = $(this).attr("data-attack");
        allyHP = $(this).attr("health");
        console.log("ally hp is"+ allyHP);
        firstPick = !firstPick;
        $characters.appendTo('.opponents');
        $(this).appendTo('.allySide');
        heroPick = true;
             
    }
 
})

$(".attackBtn").on("click", function(){
    allyHP= parseInt(allyHP)-parseInt(enemyAtt);
    enemyHP= parseInt(enemyHP)- parseInt(boostAllyAtt);
    boostAllyAtt = parseInt(boostAllyAtt) + parseInt(allyAtt);
    console.log("enemy hp" + enemyHP)
    console.log("inc attack" + boostAllyAtt)
    console.log("OG attack" + allyAtt)

    if (allyHP <= 0){
        alert("Game Over")

    }
    if (enemyHP <= 0){
        alert("you win!")
        target.appendTo(".characters")
        target.css({"display":"none"})
        noPicks =false;

    }
   
})


    


  /* Logic to be developed:
  When I click a character- he becomes my character,
  Others move down and are selectable now.
  once I select my opponent- I click attack
  Health is decreased by attacks and counter attacks
  Attack builds on my character
  Once HP hits 0- attack choosing phase starts.
  Game ends when I get 0 hp or no more opponents (3 wins)
console.log($(this).attr("data-attack"));
  Questions:
  do I want each character to be unique
  What is the logic for moving characters, CSS manipulation?
  How do I limit what is a clickable event? 
  */
