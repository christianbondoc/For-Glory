// Class Variables
var johnCena = document.getElementsByClassName("john-cena"),
    leftField = document.getElementsByClassName("left-field"),
    rightField = document.getElementsByClassName("right-field"),
    dropArea = document.getElementsByClassName("dropArea"),

    lightMins = document.getElementsByClassName("light-mins"),
    darkMins = document.getElementsByClassName("dark-mins"),

    cards = document.getElementsByClassName("cards"),
    smallCards = document.getElementsByClassName("small-cards");

// ID Variables
var champ1 = document.getElementById("champ1"),
    lightMinA = document.getElementById("min1-a"),
    lightMinB = document.getElementById("min1-b"),
    lightMinC = document.getElementById("min1-c"),

    champ2 = document.getElementById("champ2"),
    darkMinA = document.getElementById("min2-a"),
    darkMinB = document.getElementById("min2-b"),
    darkMinC = document.getElementById("min2-c"),

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
var lightArr = [{
    cardName: "",
    Health: "",
    atk: ""

}]; // add card bg later
var darkArr = [{
    cardName: "",
    Health: "",
    atk: ""
}];

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

// Minion array idk how to use this
var lightMinArr = [
    lightMinA, lightMinB, lightMinC
];

var darkMinArr = [
    darkMinA, darkMinB, darkMinC
];


var gameCards = [{
    name: "",
    atk: 0,
    Health: 0
}];

champ1.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(lightCommander);
    cName.innerHTML = lightCommander.name
    cHp.innerHTML = "Health: " + lightCommander.Health;
    cAtk.innerHTML = "ATK: " + lightCommander.atk;
});
// Light Archer Click Function
lightMinA.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(lightMinA);
    cName.innerHTML = lightArcher.name;
    cHp.innerHTML = "Health: " + lightArcher.Health;
    cAtk.innerHTML = "ATK: " + lightArcher.atk;
});

// Light Soldier Click Function
lightMinB.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(lightMinB);
    cName.innerHTML = lightSoldier.name
    cHp.innerHTML = "Health: " + lightSoldier.Health;
    cAtk.innerHTML = "ATK: " + lightSoldier.atk;
})

// Light Dog Click Function
lightMinC.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(lightMinC);
    cName.innerHTML = lightDog.name
    cHp.innerHTML = "Health: " + lightDog.Health;
    cAtk.innerHTML = "ATK: " + lightDog.atk;
})

// Dark Champion Click Function
champ2.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(champ2);
    cName.innerHTML = darkCommander.name;
    cHp.innerHTML = "Health: " + darkCommander.Health;
    cAtk.innerHTML = "ATK: " + darkCommander.atk;
});

// Dark Dog Click Function
darkMinA.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(darkMinA);
    // darkMin[0].name;
    // cName.innerHTML = darkMin[0].name;

    cName.innerHTML = darkWizard.name;
    cHp.innerHTML = "Health: " + darkWizard.Health;
    cAtk.innerHTML = "ATK: " + darkWizard.atk;
    console.log(darkMinA);
});

// Dark Grunt Click Function
darkMinB.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(darkMinB);
    cName.innerHTML = darkGrunt.name;
    cHp.innerHTML = "Health: " + darkGrunt.Health;
    cAtk.innerHTML = "ATK: " + darkGrunt.Health;
});

// Dark Wizard Click Function  
darkMinC.addEventListener("click", function () {
    hoverPanel.style.display = "block";
    console.log(darkMinC);
    cName.innerHTML = darkDog.name;
    cHp.innerHTML = "Health: " + darkDog.Health;
    cAtk.innerHTML = "ATK: " + darkDog.Health;
    console.log("Get clickd bitch!!!");
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
        this.gameCards.atk + darkMinArr[i].atk;
    } else {
        gameCards.atk + lightMinArr[i].atk;
    }
};

function hpCalc() {
    this.gameCards.Health + darkMin[i].atk;
}



// jQuery tears
$(document).ready(function () {
    $(".cards").draggable({
        opacity: .5,
        containment: "body",
        scroll: false,
    });

    $(".dropArea").droppable({
        drop: function (event, ui) {
            $(dropArea)
                .find("h1")
                .html("Dropped!");
        }
    });
    // ask henry why no drop
    $(" .darkMins ").droppable ({
        drop: function (event, ui) {
            $( darkMins )
                alert("Please work");
        }
    });
    
    $(" .lightMins ").droppable ({
        drop: function(event, ui){
            $( lightMins )
                alert("lmao");
        }
    });

    $("#main-menu").click(function(){
        $("#main-menu p").slideToggle();
    });
})


// End jQuery




// How to pass different info depending who I drop it on