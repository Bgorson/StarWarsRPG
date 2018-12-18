// Game Logic

var data = [
  {
       name : "Luke",
       image : 'assets/images/luke.jpg',
       attack : "21",
       counterAttack:"15",
       health:"150"
   },
   {
       name : "Obi-Wan",
       image : 'assets/images/obi.jpg',
       attack : "20",
       counterAttack:"25",
       health:"130"
   },
   
   {
       name : "Darth Maul",
       image : 'assets/images/darthmaul.jpg',
       attack : "35",
       counterAttack:"20",
       health:"100"
   },
   {
       name : "Darth Vader",
       image : 'assets/images/darthvadar.jpeg',
       attack : "20",
       counterAttack:"15",
       health:"200"
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
    winCondition = i;
        
    })

var ally;
var enemy;
var firstPick= true;
var noPicks = false;
var heroPick =false;
var $characters = $(".portrait");
var allyAtt;
var boostAllyAtt= allyAtt;
var allyHP;
var enemyHP;
var target;
var gameOver=false;
var enemyPick= false;



$characters.on("click", function(){//ENEMIES
    if (firstPick == false && noPicks== false && gameOver==false){
    target= $(this);
    enemyAtt = $(this).attr("counterAttack");
    enemyHP = $(this).attr("health");
    $(this).appendTo('.enemySide')
    noPicks = true;
    enemyPick= true;
    
 
}
})

$characters.on("click", function(){//ALLY
    if (firstPick == true && noPicks== false && heroPick == false && gameOver==false){
         allyAtt = $(this).attr("data-attack");
        boostAllyAtt = $(this).attr("data-attack");
        allyHP = $(this).attr("health");
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

$(".attackBtn").on("click", function(){ //attack button event
    if (gameOver==false && enemyPick == true){
    $(".allyAttacks").text("You attack for " + boostAllyAtt + " Damage")
    $(".enemyAttacks").text("You are counter-attacked for " + enemyAtt + " Damage")
    allyHP= parseInt(allyHP)-parseInt(enemyAtt);
    enemyHP= parseInt(enemyHP)- parseInt(boostAllyAtt);
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
        enemyPick = false;
        if (winCondition < 1){
            gameOver= true;
            $(".allyAttacks").text("You won!!!!")
            $(".enemyAttacks").text("")
        
        }
    }
}
})
