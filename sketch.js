const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 40; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));

    for (var j = -10; j <=width; j=j+50){
      plinkos.push(new Plinko(j,275));
    }

    for (var j = -45; j <=width-10; j=j+50){
      plinkos.push(new Plinko(j,375));
    }

    for (var j = 0; j < particles.length; j++){
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++){
      divisions[k].display();
    }    
    }
}

function draw() {
  background(255,255,255);  
  plinkos.display();
  divisions.display();
  particles.dsiplay();
  ground.display();
  drawSprites();
}