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



/* 
    
   ___  ___    _ ___ ___ _____ ___ _ 
  / _ \| _ )_ | | __/ __|_   _/ __| |
 | (_) | _ \ || | _| (__  | | \__ \_|
  \___/|___/\__/|___\___| |_| |___(_)
                                     
    
    */


// Card Arrays
// var lightArr = [{
//     cardName: "",
//     Health: "",
//     atk: ""

// }]; // add card bg later
// var darkArr = [{
//     cardName: "",
//     Health: "",
//     atk: ""
// }];

/*

  _     ___ ____ _   _ _____ 
 | |   |_ _/ ___| | | |_   _|
 | |    | | |  _| |_| | | |  
 | |___ | | |_| |  _  | | |  
 |_____|___\____|_| |_| |_|  
                                                                                                 
    */

var lightCommander = {
    name: "Light Commander",
    Health: 32,
    atk: 18,
};

var lightArcher = {
    name: "Light Archer",
    Health: 17,
    atk: 8
};

var lightSoldier = {
    name: "Light Soldier",
    Health: 17,
    atk: 8
};

var lightDog = {
    name: "Light Dawg",
    Health: 15,
    atk: 10000000 // Richard what the fuck? XD
}

/*
  ____    _    ____  _  __
 |  _ \  / \  |  _ \| |/ /
 | | | |/ _ \ | |_) | ' / 
 | |_| / ___ \|  _ <| . \ 
 |____/_/   \_\_| \_\_|\_\
                          
*/
var darkCommander = {
    name: "Dark Commander",
    Health: 26,
    atk: 24
};

var darkWizard = {
    name: "Dark Wizard",
    Health: 15,
    atk: 10
};

var darkGrunt = {
    name: "Drunk Grunt",
    atk: 5,
    Health: 20
}
var darkDog = {
    name: "Dark Dog",
    atk: 7,
    Health: 18
}

// new henry obj
var gameobj = {
    lghtSide: {
        "lightCommander": {
            name: "Light Commander",
            health: 32,
            atk: 18
        },
        "lightDog": {
            name: "Light Dog",
            health: 15,
            atk: 10
        },
        "lightSoldier": {
            name: "Light Soldier",
            health: 17,
            atk: 8
        },
        "lightArcher": {
            name: "Light Archer",
            health: 15,
            atk: 10
        }
    },
    drkSide:{
        "darkCommander": {
            name: "Dark Commander",
            health: 26,
            atk: 24
        },
        "darkDog":{
            name:"Dark Dog",
            health:18,
            atk:7
        },
        "darkGrunt":{
            name: "Dark Grunt",
            health: 20,
            atk: 5
        },
        "darkWizard":{
            name: "Dark Wizard",
            health: 15,
            atk: 10
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



function changeDiv(id){
    var name = gameobj.drkSide[id].name;
    var atk = gameobj.drkSide[id].atk;
    var health = gameobj.drkSide[id].health;
    
    cName.innerHTML = drkSide[id].name;
    cHp.innerHTML = "Health: " + drkSide[id].health;
    cAtk.innerHTML = "ATK: " + drkSide[id].atk;

    cName.innerHTML = lghtSide[id].name;
    cHp.innerHTML = "Health: " + lghtSide[id].health;
    cAtk.innerHTML = "ATK: " + lghtSide[id].atk;
    //innerHTML stuff
}

var cards = document.getElementsByClassName("mon");

// How to loop
for(var i =0;i<cards.length; i++){
    cards[i].addEventListener("click", function(){
        changeDiv(this.id);
    })
}


LCommander.addEventListener("click", function () {   
    hoverPanel.style.display = "block";
    console.log(LCommander);
    cName.innerHTML = lightCommander.name
    cHp.innerHTML = "Health: " + lightCommander.Health;
    cAtk.innerHTML = "ATK: " + lightCommander.atk;
});
// Light Archer Click Function
LArcher.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(LArcher);
    cName.innerHTML = lightArcher.name;
    cHp.innerHTML = "Health: " + lightArcher.Health;
    cAtk.innerHTML = "ATK: " + lightArcher.atk;
});

// Light Soldier Click Function
LSoldier.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(LSoldier);
    cName.innerHTML = lightSoldier.name
    cHp.innerHTML = "Health: " + lightSoldier.Health;
    cAtk.innerHTML = "ATK: " + lightSoldier.atk;
})

// Light Dog Click Function
LDog.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(LDog);
    cName.innerHTML = lightDog.name
    cHp.innerHTML = "Health: " + lightDog.Health;
    cAtk.innerHTML = "ATK: " + lightDog.atk;
})

// Dark Champion Click Function
DCommander.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(darkCommander);
    cName.innerHTML = darkCommander.name;
    cHp.innerHTML = "Health: " + darkCommander.Health;
    cAtk.innerHTML = "ATK: " + darkCommander.atk;
});

// Dark Wizard Click Function
DWizard.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(DWizard);
    // darkMin[0].name;
    // cName.innerHTML = darkMin[0].name;

    cName.innerHTML = darkWizard.name;
    cHp.innerHTML = "Health: " + darkWizard.Health;
    cAtk.innerHTML = "ATK: " + darkWizard.atk;
    
});

// Dark Grunt Click Function
DGrunt.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(DGrunt);
    cName.innerHTML = darkGrunt.name;
    cHp.innerHTML = "Health: " + darkGrunt.Health;
    cAtk.innerHTML = "ATK: " + darkGrunt.atk;
});

// Dark Dog Click Function  
DDog.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(DDog);
    cName.innerHTML = darkDog.name;
    cHp.innerHTML = "Health: " + darkDog.Health;
    cAtk.innerHTML = "ATK: " + darkDog.atk;
    console.log("Get clicked!!!");
});

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

/*
var lightCommander = {
    name: "Light Commander",
    Health: 32,
    atk: 18,
};

var lightArcher = {
    name: "Light Archer",
    Health: 17,
    atk: 8
};

var lightSoldier = {
    name: "Light Soldier",
    Health: 17,
    atk: 8
};

var lightDog = {
    name: "Light Dawg",
    Health: 15,
    atk: 10000000 // Richard what the fuck? XD
}*/


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