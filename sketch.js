var ground;
var wall1,wall2,wall4;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	dustbinIM=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	
	engine = Engine.create();
	world = engine.world;

	wall1= new Wall (1000,620,20,300)
	wall2= new Wall (1200,620,20,300)
	wall3= new Wall (1100,660,200,20)
	


	
	
	paperObject= new Paper(300,100,40);
	


	ground= new Ground(800,690,1600,30)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
 
  wall1.display();
  wall2.display();
  wall3.display();
  
  
  ground.display();
console.log(paperObject)

image(dustbinIM,980,430,250,250)
paperObject.display();
 
}
function keyPressed() {
    
        if(keyCode === UP_ARROW){
    
            Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:370,y:-300});
		}
	}		



