const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world, partsOnScreen = 0;

var divisions = [];
var particles = [];
var plinkos = [];
var ground;
var divisionHeight = 300;


function setup(){
    createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(240, 800, 500, 40);

    for(var k = 0; k <= width; k += 80){
      divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight))
    }

    for(var j = 40; j <= width; j += 50){
      plinkos.push(new Plinko(j, 75))
    }

    for(var j = 15; j <= width - 10; j += 50){
      plinkos.push(new Plinko(j, 50))
    }

    for(var j = 40; j <= width; j += 50){
      plinkos.push(new Plinko(j, 175))
    }

    for(var j = 15; j <= width - 10; j += 50){
      plinkos.push(new Plinko(j, 150))
    }
}

function draw(){
    background(0);
    Engine.update(engine); 

    if(frameCount % 30 === 0){
      particles.push(new Particle(random(width/2 - 50, width/2 + 50), 0, 5))
      partsOnScreen += 1;
    } 
    textSize(30)
    fill('white')
    text('Particles on screen: ' + partsOnScreen, 75, 400)

    ground.display();

    for(var i = 0; i < particles.length; i ++){
      particles[i].display();
    }

    for(var k = 0; k < divisions.length; k ++){
      divisions[k].display();
    }

    for(var j = 0; j < plinkos.length; j ++){
      plinkos[j].display();
    }

}