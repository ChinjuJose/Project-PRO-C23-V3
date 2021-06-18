const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var playerBase, compBase, player, comp;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  playerBase = new Base(300,400,"base1.png");
  compBase = new Base(900,400,"base2.png");
  player = new Player(350,310);
  comp = new Player(950,310);
	

 }

function draw() {

  background(180);

  Engine.update(engine);

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base
   playerBase.display();
   compBase.display();
   player.display();
   comp.display();

   //display Player and computerplayer


}
