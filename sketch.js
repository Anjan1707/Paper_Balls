
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var left;
var right;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 650, 800, 10);
	left = new Ground(500, 596, 10, 100);
	right = new Ground(700, 596, 10, 100);

	//Create the Bodies Here.
    ball = Bodies.circle(100, 500, 30, ball_options);
	World.add(world, ball);

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  ground.display();
  left.display();
  right.display();
  ellipse(ball.position.x, ball.position.y, 30);
  drawSprites();
 
}


function keyPressed(){
    if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:130,y:-130});
		
	}
}

