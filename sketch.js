const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var pig1
var log1
var box3
var box4
var pig2
var log2
var bird



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground=  new Ground(600, 390, 1200, 20)
    box1 = new Box(700, 300, 50, 50);
    box2=  new Box(920, 300, 50, 50)
     pig1= new Pig(800, 310)
    log1= new Log(800, 250, 300, PI/2)
    box3= new Box(700, 230, 50, 50 )
    box4= new Box(920, 230, 50, 50)
    pig2= new Pig(800, 220)
    log2= new Log(800, 200, 300, PI/2)
    log3= new Log(760, 120, 150, PI/7 )
    log4= new Log(870, 120, 150, PI/7)
    bird= new Bird(100, 100)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    bird.display();

}