// setting up the app to require things

var express = require('express');
var http = require('http');

// this creates the server with a port of 4000
var port = process.env.PORT || 4000;
// process.env.PORT for Heroku
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// Static files to serve
app.use(express.static('public'));

server.listen(port, function () {
    console.log("The server is running.");
});
var gameObj = {
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


// ORIGINAL CARDOBJ
//var cardObj = {
//    lghtSide: {
//        "card1":{
//            name: "Card 1",
//            atk: 10
//            }
//    }
//};

// COPYPASTA CARD OBJECT
var cardObj = {
    lghtSide: {
        "card3": {
            atk: 10,
            health: 33
        },
        "card2": {
            atk: 10,
            health: 3
        },
        "card1" : {
            atk: 5,
            health: 10            
        }
    },
    
    drkSide: {
        "card3": {
            atk: 10,
            health: 15,
        },
        "card2": {
            atk: 20,
            health: 3
        },
        "card1" : {
            atk: 15,
            health: 10
        }
    }
};

io.on('connection', function(socket){
    
    io.sockets.emit('gameStatus', gameObj);
    
    // when someone sends an event, update status
    
    socket.on('updateStatus', function(data){
        
        var getter = gameObj.lghtSide[data.getter].health;
        var doer = gameObj.lghtSide[data.doer].atk;
        
        var result = getter - doer;

        if (result <= 0){
            getter = 0;
        } else {
            getter = result;
        }
        
        gameObj.lghtSide[data.getter].health = getter;
        
        console.log(getter);
        io.sockets.emit('gameStatus', gameObj);
        
        
    });
    
    socket.on('updateDarkMin', function(data){
        
        // LINE 134 CHANGES THE ATK VALUE OF DARK BOIS
        var result = gameObj.drkSide[data.monster].atk + cardObj.drkSide[data.card].atk // DARK SIDE ATK

        // .card and .monster are from updateObj
        
        console.log(result + " DARK SIDE CHANGEd");

        gameObj.drkSide[data.monster].atk = result;
        var result = gameObj.drkSide[data.monster].health + cardObj.drkSide[data.card].health// DARK SIDE ATK



        console.log(result + " DARK SIDE CHANGEd");
        gameObj.drkSide[data.monster].health = result;
        // DARK SIDE HEALTH
        io.sockets.emit('gameStatus', gameObj);
        
    });
    
    socket.on('updateLightMin', function (data) {

        var result = gameObj.lghtSide[data.monster].atk + cardObj.lghtSide[data.card].atk
        // LIGHT SIDE ATTACK 

        console.log(result + " LIGHTSIDE CHANGED");


        gameObj.lghtSide[data.monster].atk = result;
        gameObj.lghtSide[data.monster].health = result;
        io.sockets.emit('gameStatus', gameObj);

    });
});