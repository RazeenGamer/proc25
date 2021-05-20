const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1,stone2,stone3,stone4,stone5,stone6,stone7;
var rubber,iron

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone (600,400,20,20)
    stone2 = new Stone (610,390,20,20)
    stone3 = new Stone (620,380,20,20)
    stone4 = new Stone (630,370,20,20)
    stone5 = new Stone (640,360,20,20)
    stone6 = new Stone (650,350,20,20)
    stone7 = new Stone  (680,320,50,50)
    iron = new Iron (500,500);
    rubber = new Rubber (700,300,150)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    iron.display();
    rubber.display();
}