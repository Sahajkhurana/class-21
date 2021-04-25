const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   
  
ball1=new Ball(200,200,20)
ball2=new Ball(100,100,30)
ball3=new Ball(300,300,40)
ground=new Ground(200,380,700,15)
   // console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
   
  ball1.display()
  ball2.display()
  ball3.display()
  ground.display()
}
