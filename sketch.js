
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,world,wall1,wall2;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	ground = new Ground (400,690,800,70);
	wall1 = new Ground (500,585,10,150);
	wall2 = new Ground (700,585,10,150);
	ball =new Ball (200,10,40);
	//Create the Bodies Here.
	

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  ground.display();
 wall1.display();
  wall2.display()
  ball.displayB();
  keyPressed();
  drawSprites();
 
}

function keyPressed (){
	if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball.ball,{x:0,y:0},{x:3,y:-3})
	}
}

