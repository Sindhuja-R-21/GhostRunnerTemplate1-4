//Declare Variables --> Global
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"; //play and end

function preload(){
  //Load Images
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");

  //Load Sound
  spookySound = loadSound("spooky.wav");
}

function setup(){

  createCanvas(600,600);

  //spookySound.loop();

  //Create Tower Sprite 
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  //create Ghost Sprite
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}

function draw(){

  background(0);

  if (gameState === "play") {

    //Movement of Ghost
    if(keyDown("left_arrow")){
      
    }
    
    if(keyDown("right_arrow")){
     
    }
    
    if(keyDown("space")){
      
    }

    //add Gravity
   
    
    //Infinite Scrolling effect
    if(tower.y > 400){
      tower.y = 300
    }

    spawnDoors();

    
    //Making Ghost to stop moving when it touches climbers
   
    
    //Making Ghost destroy when it touches invisibleBlockGroup
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      ghost.destroy();
      gameState = "end";
    }
    
    drawSprites();
  }
  
  if (gameState === "end"){
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250)
  }

}

function spawnDoors() {
  //write code here to spawn the doors in the tower
  if (frameCount % 240 === 0) {

    var door = createSprite(200, -50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);

    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    invisibleBlock.debug = true;
   // invisibleBlock.visible=false;
    

    door.x = Math.round(random(120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    
    door.addImage(doorImg);
    climber.addImage(climberImg);
    
    door.velocityY = 1;
    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    ghost.depth = door.depth;
    ghost.depth +=1;
  
    
    //add each sprite to the group



    //assign lifetime to the groups
   
    
  }
}


