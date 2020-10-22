const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;





function setup() {
  createCanvas(480,800)
  engine = Engine.create();
  world = engine.world;
  ground1 = new ground(100,780,2101,20)
}

function draw() {
  Engine.update(engine)
  background(255,20,210);  
  
  ground1.display();
}