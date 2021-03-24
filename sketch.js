
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  roof=new Roof(400,200,440,80)

	bob1=new Bob(200,400,40)
	bob2=new Bob(280,400,40)
  bob3=new Bob(320,400,40)
  bob4=new Bob(390,400,40)
  bob5=new Bob(430,400,40)

	slingshot1=new SlingShot(bob1.body,{x:200,y:200})
	slingshot2=new SlingShot(bob2.body,{x:280,y:200})
  slingshot3=new SlingShot(bob3.body,{x:320,y:200})
  slingshot4=new SlingShot(bob4.body,{x:390,y:200})
  slingshot5=new SlingShot(bob5.body,{x:430,y:200})

 	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  
  //drawSprites();
  roof.display();
  bob1.display();
  slingshot1.display();
  bob2.display();
  slingshot2.display();
  bob3.display();
  slingshot3.display();
  bob4.display();
  slingshot4.display();
  bob5.display();
  slingshot5.display();

}

function keyPressed(){
if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})
}


}