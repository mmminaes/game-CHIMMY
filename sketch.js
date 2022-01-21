var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game,rank;



function preload(){
  fondo=loadImage("images/image.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
 // database = firebase.database();
 
}


function draw(){
  background("pink");
if (playerCount==2){
game.update(1);

}
}


