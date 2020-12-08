
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup(){
 createCanvas(400,400)
  monkey=createSprite(80,300,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
ground=createSprite(300,335,600,10)
  ground.velocityX=-4
}


function draw() {
background("green")
if(ground.x<0){ground.x=ground.width/2}
if(keyDown("space")){
monkey.velocityY=-12  
}
monkey.velocityY=monkey.velocityY+0.8
monkey.collide(ground)
stroke("black");
textSize(20);
fill("black");

survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+ survivalTime, 100,50);
food(); 
obstacles(); 
  
  
  
  drawSprites();
  
}

function food (){
if(frameCount%80===0){
banana=createSprite(400,120,10,15)
banana.y=random(120,200)
banana.velocityX=-5
banana.addImage(bananaImage)
banana.scale=0.05 
}  
  
  
} 

function obstacles (){
if(frameCount%300===0){
obstacle=createSprite(400,320,10,15)
obstacle.velocityX=-5
obstacle.addImage(obstaceImage)
obstacle.scale=0.1 
}  
  
  
} 





