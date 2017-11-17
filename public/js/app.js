//Websocket variable
var f_socket = io.connect('localhost:4000');

// Link to app on heorku later
// var f_socket = io.connect('https://bcit-for-glory.herokuapp.com/');

// Socket variable to connect to the server

f_socket.on('gameStatus', function(gameObj){
    
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
var lightCommander = document.getElementById("lightCommander"),
    lightDog= document.getElementById("lightDog"),
    lightSoldier = document.getElementById("lightSoldier"),
    lightArcher = document.getElementById("lightArcher"),

    darkCommander = document.getElementById("darkCommander"),
    darkWizard = document.getElementById("darkWizard"),
    darkGrunt = document.getElementById("darkGrunt"),
    darkDog = document.getElementById("darkDog"),

    card1 = document.getElementById("card1"),
    card2 = document.getElementById("card2"),
    card3 = document.getElementById("card3"),

    menu = document.getElementById("main-menu"),
    cName = document.getElementById("cName"),
    cHp = document.getElementById("cHp"),
    cAtk = document.getElementById("cAtk"),

    discardPile = document.getElementById("discard-pile"),
    deckPile = document.getElementById("deck-pile");

    
// Dropping the cards 
var updateObj = {
    card: "",
    monster: ""
};



/* ___  ___    _ ___ ___ _____ ___ _ 
  / _ \| _ )_ | | __/ __|_   _/ __| |
 | (_) | _ \ || | _| (__  | | \__ \_|
  \___/|___/\__/|___\___| |_| |___(_)
  */
    // new henry obj


// var cardObj


// How to make loop for clicks?????

function changeDiv(id, type){

    var mon = null;
    
    if(type == "dark"){
        mon = gameObj.drkSide[id];
    } else if (type == "light"){
        mon = gameObj.lghtSide[id];
    }
    
    cName.innerHTML = mon.name;
    cHp.innerHTML = "Health: " + mon.health;
    cAtk.innerHTML = "Attack: " + mon.atk;

    /*cName.innerHTML = gameObj.lghtSide[id].name;
    cHp.innerHTML = "Health: " + gameObj.lghtSide[id].health;
    cAtk.innerHTML = "ATK: " + gameObj.lghtSide[id].atk;*/
    //innerHTML stuff
}

monStats = document.getElementsByClassName("allMins");


// SETTING THE STATES




/*   
_____ _   _ _   _  ____ _____ ___ ___  _   _ ____  
|  ___| | | | \ | |/ ___|_   _|_ _/ _ \| \ | / ___| 
| |_  | | | |  \| | |     | |  | | | | |  \| \___ \ 
|  _| | |_| | |\  | |___  | |  | | |_| | |\  |___) |
|_|    \___/|_| \_|\____| |_| |___\___/|_| \_|____/      
*/



// jQuery for dragging and dropping

var dragid = "";

$(document).ready(function () {

// jQuery function to pick up cards

    $(".cards").draggable({
        opacity: .3,
        containment: "body",
        scroll: false,  

        /* Fix this for UX purposes */
        // How to change height/width of clicked object
        // Function starts here 
        
        start: function( event, ui ) {
            dragid = $(this).attr("id");
            // Changing card value to picked up card 
            updateObj.card = dragid;
        }
    });

    // When you drop card; change dark minion value

    $(".dark-mins").droppable ({
        drop: function (event, ui) {
            var dropid = $(this).attr("id");
    
            console.log(dropid);
            updateObj.monster = dropid
            // Turning object from backend into a variable
            console.log(updateObj);
            // Update server with drop function
            f_socket.emit('updateDarkMin', updateObj);

        }
        // Ask Henry why no choose other ID
    });
    
    // When you drop card; change dark minion value

    $(".light-mins").droppable({
        drop: function (event, ui) {
            var dropid = $(this).attr("id");

            console.log(dropid);
            updateObj.monster = dropid;

            console.log(updateObj);
            // Update server with drop function
            f_socket.emit('updateLightMin', updateObj);

            }
    });

    // Main menu toggle
    $("#main-menu").click(function(){
        $("#main-menu p").slideToggle();
    });
    // Maybe make a lock div for this
})

/* Potentially change the main menu toggle to a main menu lock div */

/* Loading screen */

function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 2500);

    function checkReady() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true);
    show('loading', false);
});

// End jQuery




// receiving events from the server
// Calling gameObj via sockets
    
    console.log(gameObj);
    
    //LIGHT SIDE SERVER SIDE
    lightCommander.innerHTML = gameObj.lghtSide.lightCommander.name + "<br>Health: " + gameObj.lghtSide.lightCommander.health + "<br>Attack: " + gameObj.lghtSide.lightCommander.atk;
    
    lightDog.innerHTML = gameObj.lghtSide.lightDog.name + "<br>Health: " + gameObj.lghtSide.lightDog.health + "<br>Attack: " + gameObj.lghtSide.lightDog.atk;
    
    lightSoldier.innerHTML = gameObj.lghtSide.lightSoldier.name + "<br>Health: " + gameObj.lghtSide.lightSoldier.health + "<br>Attack: " + gameObj.lghtSide.lightSoldier.atk;
    
    lightArcher.innerHTML = gameObj.lghtSide.lightArcher.name + "<br>Health: " + gameObj.lghtSide.lightArcher.health + "<br>Attack: " + gameObj.lghtSide.lightArcher.atk;
    
    // DARK SIDE 
    darkCommander.innerHTML = gameObj.drkSide.darkCommander.name + "<br>Health: " + gameObj.drkSide.darkCommander.health + "<br>Attack: " + gameObj.drkSide.darkCommander.atk;
    
    darkDog.innerHTML = gameObj.drkSide.darkDog.name + "<br>Health: " + gameObj.drkSide.darkDog.health + "<br>Attack: " + gameObj.drkSide.darkDog.atk;
    
    darkGrunt.innerHTML = gameObj.drkSide.darkGrunt.name + "<br>Health: " + gameObj.drkSide.darkGrunt.health + "<br>Attack: " + gameObj.drkSide.darkGrunt.atk;
    
    darkWizard.innerHTML = gameObj.drkSide.darkWizard.name + "<br>Health: " + gameObj.drkSide.darkWizard.health + "<br>Attack: " + gameObj.drkSide.darkWizard.atk;

});

var setState0 = null;
    setState1 = null,
    setState2 = null,
    setState3 = null,
    setState4 = null,
    setState5 = null,
    setState6 = null,
    setState7 = null,
    setState8 = null,
    setState9 = null;

/*

    websocket id
    states for attacks/and stuff !
    changing cards size on drag
    How to make loading screen that actually loads
    neelam questions [x]
    
    drawing card concept
        card deck array in back end [?]

*/

