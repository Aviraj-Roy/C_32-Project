const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var b1,b2,b3,b4,b5,b6,b7,b9,b10,b11,b12,b13,b14,b15,b16,b17;
var ground,stand1, stand2, ultimate, polygon , slingshot, backgroundImg;
var score=0;

function preload()
{
  getTime();
}

function setup() 
{
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  b1 = new Box(600, 255, 30, 40);
  b2 = new Box(570, 255, 30, 40);
  b3 = new Box(540, 255, 30, 40);
  b4 = new Box(510, 255, 30, 40);
  b5 = new Box(630, 255, 30, 40);
  b6 = new Box(660, 255, 30, 40);
  b7 = new Box(690, 255, 30, 40);
  b9 = new Box(600, 215, 30, 40);

  b10 = new Box(570, 215, 30, 40);
  b11 = new Box(540, 215, 30, 40);
  b12 = new Box(630, 215, 30, 40);
  b13 = new Box(660, 215, 30, 40);
  b14 = new Box(600, 175, 30, 40);
  b15 = new Box(570, 175, 30, 40);
  b16 = new Box(630, 175, 30, 40);
  b17 = new Box(600, 135, 30, 40);

  blocks1 = new Box(840, 175, 30, 40);
  blocks2 = new Box(870, 175, 30, 40);
  blocks3 = new Box(900, 175, 30, 40);
  blocks4 = new Box(930, 175, 30, 40);
  blocks5 = new Box(960, 175, 30, 40);
  blocks6 = new Box(870, 135, 30, 40);
  blocks7 = new Box(900, 135, 30, 40);
  blocks8 = new Box(930, 135, 30, 40);
  blocks9 = new Box(900, 95, 30, 40);

  stand1 = new Ground(600, 280, 210, 10);
  stand2 = new Ground(900, 200, 200, 10);
  ultimate = new Ground(600, 390, 1400, 10);

  polygon = new Polygon(200, 270, 23, 23);
  slingshot = new SlingShot(polygon.body, {x:200, y:260});
}

function draw() 
{
  if(backgroundImg)
    background(backgroundImg)

  Engine.update(engine);

  fill("red")
  textSize(30)
  text("Drag the Hexagon, Aim IT, Release it, Ping Me if any DIFFICULTY ",200,40);
  text("SCORE:"+score, 100,150);

  drawSprites();

  polygon.display();
  slingshot.display();
  stand1.display();

  b1.display();  b1.score();
  b2.display();  b2.score();  
  b3.display();  b3.score();  
  b4.display();  b4.score();  
  b5.display();  b5.score();  
  b6.display();  b6.score();  
  b7.display();  b7.score();
  b9.display();  b9.score();

  b10.display();  b10.score();  
  b11.display();  b11.score();  
  b12.display();  b12.score();  
  b13.display();  b13.score();  
  b14.display();  b14.score();  
  b15.display();  b15.score();  
  b16.display();  b16.score();  
  b17.display();  b17.score();

  blocks1.display();  blocks1.score();
  blocks2.display();  blocks2.score();  
  blocks3.display();  blocks3.score();  
  blocks4.display();  blocks4.score();  
  blocks5.display();  blocks5.score();  
  blocks6.display();  blocks6.score();  
  blocks7.display();  blocks7.score();  
  blocks8.display();  blocks8.score();  
  blocks9.display();  blocks9.score();

  stand2.display();

  ultimate.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}

function mouseReleased()
{
  slingshot.fly();
}

function keyPressed() 
{
    if (keyCode === 32) 
    {
      slingshot.attach(polygon.body);
    }
}

async function getTime()
{
    var responsetime = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var type = await responsetime.json();
    console.log(type);

    var dthr = type.datetime;
    console.log(dthr);

    var hr = dthr.slice(11,13);
    console.log(hr);

    if( hr >= 06 && hr <= 06)
    {
        bg = "bg.png";
    }

    else
    {
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}