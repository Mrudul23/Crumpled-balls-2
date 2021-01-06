const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload(){
  back=loadImage("background.jpg")
}

function setup() {
	createCanvas(1535, 530);
   

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100, 200, 80,80);
	

  ground = new Ground(768, 500, 2300, 55);
  
  
  dustbin = new Dustbin(1335, 463, 222, 37);
 
  wall1 = new Wall(1540,380,10,750)
  wall2 = new Wall(1150,-100,2300,10)
  wall3 = new Wall(-100,380,10,750)
  wall4 = new Wall(767.5,530,2300,10)

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

 

  background(back)
 
  
  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin.display();


  textSize(20)
  fill("red")
  text("► Press right arrow to bounce towards right side | ► Your goal is to put the trash into the dust bin",10,490)
  text("► Press left arrow to bounce towards left side  ",10,520)
  
  

 
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:2000, y: -1300})
  }
  if(keyCode === LEFT_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:-2000, y: -1300})
  }
}