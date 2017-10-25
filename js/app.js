// Class Variables
var commander = document.getElementsByClassName("commander"),
    leftField = document.getElementsByClassName("left-field"),
    rightField = document.getElementsByClassName("right-field"),
    dropArea = document.getElementsByClassName("dropArea"),

    lightMins = document.getElementsByClassName("light-mins"),
    darkMins = document.getElementsByClassName("dark-mins"),

    cards = document.getElementsByClassName("cards"),
    smallCards = document.getElementsByClassName("small-cards");

// ID Variables
var LCommander = document.getElementById("lightCommander"),
    LDog= document.getElementById("lightDog"),
    LSoldier = document.getElementById("lightSoldier"),
    LArcher = document.getElementById("lightArcher"),

    DCommander = document.getElementById("darkCommander"),
    DWizard = document.getElementById("darkWizard"),
    DGrunt = document.getElementById("darkGrunt"),
    DDog = document.getElementById("darkDog"),

    card1 = document.getElementById("card1"),
    card2 = document.getElementById("card2"),
    card3 = document.getElementById("card3"),

    hoverPanel = document.getElementById("hoverPanel"),
    menu = document.getElementById("main-menu"),
    cName = document.getElementById("cName"),
    cHp = document.getElementById("cHp"),
    cAtk = document.getElementById("cAtk"),

    discardPile = document.getElementById("discard-pile"),
    deckPile = document.getElementById("deck-pile");



/* ___  ___    _ ___ ___ _____ ___ _ 
  / _ \| _ )_ | | __/ __|_   _/ __| |
 | (_) | _ \ || | _| (__  | | \__ \_|
  \___/|___/\__/|___\___| |_| |___(_)
  */
    // new henry obj
var gameobj = {
    lghtSide: {
        "lightCommander": {
            name: "Light Commander",
            health: 32,
            atk: 18,
            type: "light"
        },
        "lightDog": {
            name: "Light Dog",
            health: 15,
            atk: 10,
            type: "light"
        },
        "lightSoldier": {
            name: "Light Soldier",
            health: 17,
            atk: 8,
            type: "light"
        },
        "lightArcher": {
            name: "Light Archer",
            health: 15,
            atk: 10,
            type: "light"
        }
    },
    drkSide:{
        "darkCommander": {
            name: "Dark Commander",
            health: 26,
            atk: 24,
            type: "dark"
        },
        "darkDog":{
            name: "Dark Dog",
            health:18,
            atk:7,
            type: "dark"
        },
        "darkGrunt":{
            name: "Dark Grunt",
            health: 20,
            atk: 5,
            type: "dark"
        },
        "darkWizard":{
            name: "Dark Wizard",
            health: 15,
            atk: 10,
            type: "dark"
        }
    },
};


var cardObj = {
    lghtAttack10: {
        "card3": {
            atk: 10
        },
        "card2": {
            atk: 10
        },
        "card1" : {
            atk: 10
        }
    }
};

// var gameStatus = {
//     players:[
//         {
//             monsters:{
//                 "blah"
//             }
//         }
//     ]
// }


// How to make loop for clicks?????

function changeDiv(id, type){

    var mon = null;
    
    if(type == "dark"){
        mon = gameobj.drkSide[id];
    } else if (type == "light"){
        mon = gameobj.lghtSide[id];
    }
    
    cName.innerHTML = mon.name;
    cHp.innerHTML = "Health: " + mon.health;
    cAtk.innerHTML = "Attack: " + mon.atk;
    hoverPanel.style.display = "block";

    /*cName.innerHTML = gameobj.lghtSide[id].name;
    cHp.innerHTML = "Health: " + gameobj.lghtSide[id].health;
    cAtk.innerHTML = "ATK: " + gameobj.lghtSide[id].atk;*/
    //innerHTML stuff
}

monStats = document.getElementsByClassName("allMins");

// Light Loop
for(var i =0;i<monStats.length; i++){
    monStats[i].addEventListener("click", function(){
        changeDiv(this.id, "light");
        console.log("Minion Clicked");
    })
}
// Dark Loop
for(var i =0;i<monStats.length; i++){
    monStats[i].addEventListener("click", function(){
        changeDiv(this.id, "dark");
        console.log("Minion Clicked");
    })
}

/*
        
_____ _   _ _   _  ____ _____ ___ ___  _   _ ____  
|  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___| 
| |_  | | | |  \| | |     | |  | | | | |  \| \___ \ 
|  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
|_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/ 
        
        
*/

// Figure out how to support which minion

function atkCalc() {
    if (darkMin == true) {
        this.cardObj.atk + darkMinArr[i].atk;
    } else {
        cardObj.atk + lightMinArr[i].atk;
    }
};

function hpCalc() {
    this.cardObj.Health + darkMin[i].atk;
}

// jQuery tears


//when cards are added

/*
gameobj.drkSide[newid] = {

}
*/

var dragid = "";

$(document).ready(function () {

// Cards to drag everywhere

    $(".cards").draggable({
        opacity: .5,
        containment: "body",
        scroll: false,
        start: function( event, ui ) {
            dragid = $(this).attr("id");
        }
    });
// test the dropping function
    $(".dropArea").droppable({
        drop: function (event, ui) {
            $(dropArea)
                .find("h1")
                .html("Dropped!");
        }
    });
    // ask henry why no drop
    $(".dark-mins").droppable ({
        drop: function (event, ui) {
            var id = $(this).attr("id");

            // Ask why gameobj does not interact with lghtAttack10
            gameobj.drkSide[id].atk += 10;

            // Display all the hoverdiv things
            $("#cName").html(gameobj.drkSide[id].name);
            $("#cHp").html("Health: " + gameobj.drkSide[id].health);
            $("#cAtk").html("Attack: " + gameobj.drkSide[id].atk);   
            $("#hoverPanel").css("display", "block");
        }
        // Ask Henry why no choose other ID
    });
    
    $(" .light-mins ").droppable ({
        drop: function(event, ui){
            var id = $(lightMins).attr("id");
            gameobj.lghtSide[id].atk += cardObj.lghtAttack10.atk;

            // Display all the hoverdiv things
            $("#cName").html(gameobj.lghtSide[id].name);
            $("#cHp").html("Health: " + gameobj.lghtSide[id].health);
            $("#cAtk").html("Attack: " + gameobj.lghtSide[id].atk);
            $("#hoverPanel").css("display", "block");

        }
    });

    // Main menu toggle
    $("#main-menu").click(function(){
        $("#main-menu p").slideToggle();
    });
})


// End jQuery




// How to pass different info depending who I drop it on