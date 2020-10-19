const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var width = 400
var height  = 1000
var man
var drops = []
var maxDrop = 1000;
var Image1,Image2,Image3,Image4
let song;
function preload(){
   Image1 = loadImage("Images/1.png")
   Image2 = loadImage("Images/2.png")
   Image3 = loadImage("Images/3.png")
   Image4 = loadImage("Images/4.png")
   soundFormats('mp3', 'ogg');
   
}

function setup(){
canvas = createCanvas(400,850)
song = loadSound("thunder3.mp3");
engine = Engine.create();
world = engine.world;

for (var i=0;i<maxDrop;i++){
drops.push(new Drop(random(0,400), random(0,400)));
}
man = new Umbrella(200,700)
thunderGroup = new Group();
}

function draw(){
    background(0);
    Engine.update(engine);
   for (var i=0;i<maxDrop;i++)
    {
    
    drops[i].update()
    drops[i].display()
    }
    spawnthunder(); 
    
    man.display();
    drawSprites();
    
}   
function spawnthunder() {
        
    if(frameCount % 60 === 0) {
      var thunder = createSprite(random(0,400),150,400,400);
      
    
      var rand = Math.round(random(1,4));
      switch(rand) {
        case 1: thunder.addImage(Image1);
                Image1.resize(400,400);
                break;       
        case 2: thunder.addImage(Image2);
                Image2.resize(400,400);
                break;
        case 3: thunder.addImage(Image3);
                Image3.resize(400,400);
                break;
        case 4: thunder.addImage(Image4);
               Image4.resize(400,400);
                break;
        default: break;
      }
      thunderGroup.add(thunder);
     song.play();
      
    }
    if(frameCount % 90 === 0){
        thunderGroup.destroyEach();
        if (song.isPlaying()) {
                song.stop();
        }
      }
      
  }
