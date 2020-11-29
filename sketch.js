
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground ;
var ball 
var box1,box2,box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	box1 = createSprite (400,660,200,20)
	box2 = createSprite (300,610,20,100)
	box2 = createSprite (500,610,20,100)
	ball = createSprite (50,650,30,30,5)
	ball.shapeColor = ("pink")
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

ball.x = 400
ball.y = 650

}

}

