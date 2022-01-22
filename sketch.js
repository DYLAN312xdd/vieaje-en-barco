
function preload(){
carimage = loadImage("sea.png");

}

function setup(){
  createCanvas(500,500);
 var mar = createSprite(250, 250, 499, 499,);
  mar.scale=0.2989;
 mar.addImage(carimage)

 var ship = createSprite(100, 300, 40, 40);
  ship.addAnimation("ship-1.png","ship-2.png","ship-3.png","ship-1.png");
  ship.scale=0.24;
  
}

function draw() {

  background("blue");



  drawSprites()
}