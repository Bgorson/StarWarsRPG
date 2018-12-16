// Game Logic

var data = [
  {
       name : "Luke",
       image : 'assets/images/luke.jpg',
       attack : "21",
       counterAttack:"15",
       health:"100"
   },
   {
       name : "Obi-Wan",
       image : 'assets/images/obi.jpg',
       attack : "50",
       counterAttack:"25",
       health:"100"
   },
   
   {
       name : "Darth Maul",
       image : 'assets/images/darthmaul.jpg',
       attack : "100",
       counterAttack:"100",
       health:"100"
   },
   {
       name : "Darth Vader",
       image : 'assets/images/darthvadar.jpeg',
       attack : "30",
       counterAttack:"15",
       health:"100"
   },
]
var winCondition;

$(data).each(function(i, e){
    $(".roster").append('<div class= "portrait" " data-attack="' +e.attack + '"\
    counterAttack="' + e.counterAttack + '"health=' + e.health + ' \
    card mb-3" style="max-width: 18rem;">\
    <div class="card-header bg-transparent">'+ e.name+ '</div>\
    <div class="card-body text-primary"><h5 class="card-title"></h5>\
    <img src="' + e.image + '"></div>\
    <div class="HP card-footer bg-transparent">HP: ' + e.health + '</div></div>')
    //  $(".roster").append("<li class='portrait' ' data-attack='" +e.attack + "' counterAttack='" + e.counterAttack + "'health=" + e.health + "><p class='name'>"+e.name+"</p><img src='" + e.image + "'><p class='hp'>HP:"+e.health+ "</p></li>")
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
var gameOver=false;



$characters.on("click", function(){//ENEMIES
    if (firstPick == false && noPicks== false && gameOver==false){
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
    if (firstPick == true && noPicks== false && heroPick == false && gameOver==false){
        console.log(this)
        allyAtt = $(this).attr("data-attack");
        boostAllyAtt = $(this).attr("data-attack");
        allyHP = $(this).attr("health");
        console.log("ally hp is"+ allyHP);
        firstPick = !firstPick;
        $characters.appendTo('.opponents');
        $(this).appendTo('.allyFightSide');
        heroPick = true;
        $('.allyFightSide .portrait').css("background-color","green")
        $('.opponents .portrait').css("background-color","red")
        $('.gameDirections').css("display","inline");
        $('.startingDirections').css("display","none");
             
    }
 
})
//target footer and re-write
$(".attackBtn").on("click", function(){
    if (gameOver==false){
    $(".allyAttacks").text("You attack for " + boostAllyAtt + " Damage")
    $(".enemyAttacks").text("You are counter-attacked for " + enemyAtt + " Damage")
    allyHP= parseInt(allyHP)-parseInt(enemyAtt);
    enemyHP= parseInt(enemyHP)- parseInt(boostAllyAtt);
    console.log("enemy hp" + enemyHP)
    console.log("inc attack" + boostAllyAtt)
    console.log("OG attack" + allyAtt)
    $(".allyFightSide .HP").text("HP:" + allyHP);
    $(".enemySide .HP").text("HP:" + enemyHP);
    boostAllyAtt = parseInt(boostAllyAtt) + parseInt(allyAtt);

    if (allyHP <= 0){
        $(".allyFightSide").css({"display":"none"})
        gameOver= true;
        $(".allyAttacks").text("You Lost")
        $(".enemyAttacks").text("")
    }
    
    else if (enemyHP <= 0){
        target.appendTo(".characters")
        target.css({"display":"none"})
        noPicks =false;
        winCondition--;
        if (winCondition < 1){
            gameOver= true;
            $(".allyAttacks").text("You won!!!!")
            $(".enemyAttacks").text("")
        
        }
    }
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

  /*
  Still to be developed:
  Restarting the game
  cleaning up interface
  */