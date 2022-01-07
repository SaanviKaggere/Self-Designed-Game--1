

var boy, girl, alien;
var galaxy, spaceGoo;

var player, game, form;

function preload() {
  boy = loadImage("assets/boy.png");
  girl = loadImage("assets/girl.png");
  bgImage = loadImage("assets/galaxy.jpg");
  alien = loadImage("assets/alien.png");
  spaceGoo = loadImage("assets/spaceGoo.png");
  spacePortal = loadImage("assets/spacePortal.png");
}

function setup() {
  createCanvas(1300,620);
  game = new Game()
  game.getState()
  game.start();


  
  
}


function draw() 
{
  background(bgImage);
  
  
}

