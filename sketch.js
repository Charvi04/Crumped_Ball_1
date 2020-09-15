var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var paperObject;
var line1, line2, line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

	 ground = new Ground (500,480,2000,15);
	paperObject = new PaperBall (400,200,20,20);
	 
	
	line1 = new Line1(900,460,width,height);

	line2 = new Line2(800,410,width,height);

	
	line3 = new Line3(1000,440,width,height);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  line3.display();
  line2.display();
  line1.display();
  ground.display();
 paperObject.display();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:1,y:1});
	}
}


