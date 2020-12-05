const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var world,engine;
var box1,box2,ground;

function setup() {
 var canvas =  createCanvas(800,800);

 engine = Engine.create();
 world = engine.world;

 box1 = new Box(300,300,50,50);
 box2 = new Box(330,200,50,80);
 ground = new Ground(400,790,800,20);

}

function draw() {
  background(0);
    Engine.update(engine);
    
    box1.display();
    box2.display();
    ground.display();
  
}