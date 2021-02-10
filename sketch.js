
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground1;
var dust1, dust2, dust3;
var line;

function setup() {
	createCanvas(670, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,450);


	ground1= new Ground(400, 600,800,20);

	dust4=new Dust(510,520,130,130);
	dust4.debug=true;

	Engine.run(engine);
  
}


function draw() {
  
   background("white");
  Engine.update(engine);
  
  keyPressed();

  paper1.display();
  //Body.scale(paper1, 0.5, 0.7);
  dust4.display();
  ground1.display();
  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:5.35, y:-11.23})
	}

	if(keyCode===LEFT_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:-5.35, y:-11.23})
	}

	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:5.35, y:-1})
	}
}