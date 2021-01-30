//namespacing
const Engine=Matter.Engine;//namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var box1,box2;
var b1,b2
var p1,p2,l1;

function setup() {
  createCanvas(1200,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;
  b1=new Ground(600,height,1200,20)
  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
p1=new Pig(810,350)
l1=new Log(810,260,300,PI/2);
box3=new Box(700,240,70,70);
box4=new Box(920,240,70,70);
p2=new Pig(810,220); 
l2=new Log(810,180,300,PI/2);



// console.log(ball.position.x);
 
}

function draw() {
  background("blue");
  Engine.update(myEngine);
  b1.display();
  box1.display();
  box2.display();
p1.display();
l1.display();
box3.display();
box4.display();
p2.display();
l2.display()


}

