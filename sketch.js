
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var astronaut,astroImg
var bgImg
var ufo,ufoImg
var cannon,cannonball
var ground
var balls=[]

function preload(){
bgImg=loadImage("bg.jpeg")
astroImg=loadImage("astronaut.jpeg")
ufoImg=loadImage("ufo.png")

}

function setup() {
    createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

    groundOpt={
        isStatic:true
    }
    ground=Bodies.rectangle(width/2,height-10,width*2,10,groundOpt)
    World.add(world,ground)

    angleMode(DEGREES)
    angle=20
    cannon=new Cannon(410,510,150,150,angle)
    cannonball=new CannonBall(cannon.x,cannon.y)
    

   
}

function draw() {
    background(51);
image(bgImg,0,0,800,600)
   
    Engine.update(engine);
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,width*2,10)
    spawnUfo()
    cannon.display()
for (var i=0;i < balls.length;i++){
    showCannonBalls(balls[i],i)
    
}    
drawSprites()
   
}





function spawnUfo(){
    if(frameCount%60===0){

    
    ufo=createSprite(200,50,10,10)
    ufo.addImage(ufoImg)
    ufo.scale=0.2

    
    
    ufo.x=Math.round(random(50,750))
    ufo.velocityY=3
}
}


function keyReleased(){
    if(keyCode===DOWN_ARROW){
        balls[balls.length-1].shoot()
    }
}

function keyPressed(){
    if (keyCode === DOWN_ARROW) {
        var cannonBall = new CannonBall(cannon.x, cannon.y);
        Matter.Body.setAngle(cannonBall.body, cannon.angle);
        balls.push(cannonBall);
      }
}
function showCannonBalls(ball,i){
    if(ball){
        ball.display()
    }
    
}

