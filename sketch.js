
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Box(500,590,1000,10);
box1=new Box(800,585,200,20);
box2=new Box(700,500,10,150);
box3=new Box(900,500,10,150);
ball=new Ball(200,100,30);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  ground.display();
 box1.display();
 box2.display();
 box3.display();
 ball.display();

 
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

