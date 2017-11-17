//Websocket variable

var f_socket = io.connect('localhost:4000');

// Link to app on heorku later
// var f_socket = io.connect('https://bcit-for-glory.herokuapp.com/');

// Socket variable to connect to the server

// GAMEOBJ TO COMMUNICATE WITH BACK END 
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

            $(".healthUpSpSh").appendTo(this);
            $(".healthUpSpSh").css("display", "block")
            $(".healthUpSpSh").css("z-index", "100000")

            // Update server with drop function
            f_socket.emit('updateDarkMin', updateObj);


        }
        // Ask Henry why no choose other ID
    });
    
    // When you drop card; change light minion value

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
    
    darkDog.innerHTML = gameObj.drkSide.darkDog.name + "<br>Health: " + gameObj.drkSide.darkDog.health + "<br>Attack: " + gameObj.drkSide.darkDog.atk + 
    "<br>Type: " + gameObj.drkSide.darkDog.minType;
    
    darkGrunt.innerHTML = gameObj.drkSide.darkGrunt.name + "<br>Health: " + gameObj.drkSide.darkGrunt.health + "<br>Attack: " + gameObj.drkSide.darkGrunt.atk;
    
    darkWizard.innerHTML = gameObj.drkSide.darkWizard.name + "<br>Health: " + gameObj.drkSide.darkWizard.health + "<br>Attack: " + gameObj.drkSide.darkWizard.atk;

// CLICKABLE LOOPS

    var atkState = {
        //Setting state for clicking, starts at 0
        clickState: 0,
        // First minion clicked
        minOne: null,
        // Second minion
        minTwo: null
    };

    monStats = document.getElementsByClassName("allMins");
    // Click Monster Loop
    
    for (var i = 0; i < monStats.length; i++) {
        monStats[i].addEventListener("click", function () {

            var curMon = null;
            // Confirming if light side
            if (gameObj.lghtSide[this.id]){
                curMon = gameObj.lghtSide[this.id];

            // Confirming if dark side
            } else {
                curMon = gameObj.drkSide[this.id];
            }

                // vvvvvv FIRST CLICK vvvvvvvvv

            if (atkState.clickState == 0) {

                atkState.minOne = curMon;
                // ClickState = 1 unit has been selected
                atkState.clickState = 1;
                //Confirming everything
                console.log("State: " + atkState.clickState);

            }


            // Click state 2 is when minion is confirmed not same minion type vvvvvvv SECOND CLICK HERE vvvvvvv

            else if (atkState.clickState == 1 && atkState.minOne.minType != curMon.minType) {

                // 2nd clickstate
                atkState.clickState = 2;
                atkState.minTwo = curMon;
                console.log("Click State is on state: "
                    + atkState.clickState);
                console.log(atkState.minTwo);
                console.log("Curmon: "+ curMon);
                
                attackFunc();

                //Send atkState to backend
                // f_socket.emit('updateStatus', atkState)
            } 
            // Error log
            else {
                console.log("Invalid");
            }
        })
    }

    // clickState = 1 is when set minion is chosen

    function attackFunc(){

        var attacker = atkState.minOne.atk; 
        var victim = atkState.minTwo.health;
        var result = victim - attacker;
        atkState.minTwo.health = result;
        console.log(atkState.minTwo);
        console.log(gameObj.lghtSide.lightSoldier.health);


        // resetting the atkState
        atkState = {
            clickState:0,
            minOne:null,
            minTwo:null
        }
        console.log(atkState.clickState);
    }



}); // <--- this allows gameObj from backend to read to frontend 


// Henry for questions 

/*

    websocket id
    states for attacks/and stuff ! [x]
    changing cards size on drag (line 114) 

    Ask henry why atkState.minOne/minTwo is not communicating properly with the gameObj stuff. Brings up [object, object] if we console.log(curMon)

    drawing card concept
        card deck array in back end [?]

    hp < 0 : display: none / remove Child
*/
