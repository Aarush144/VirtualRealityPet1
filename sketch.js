//Create variables here
var database;
var dog,dogImage,dogImage1,food,foodImage,foodStock,foodRef;

function preload()
{
  //load images here
 // backgroundImg = loadImage("images/bg.png");
  dogImage = loadImage("images/Dog.png");

  dogImage1 = loadImage("images/happydog.png");

  foodImage = loadImage("images/Bone.png");

  bathImage = loadImage("images/bath.png");

  sleepImage = loadImage("images/sleep.png");

  playImage = loadImage("images/play.png");

  walkImage = loadImage("images/walk.png");
  

}


function setup() {
  createCanvas(480, 480);

  //Sprites

  food = createSprite(250,400,50,50);
  food.addImage(foodImage);
  food.scale = 0.3;


  dog = createSprite(400,150);
  dog.addImage(dogImage);
  dog.scale = 0.2;


  
  //Firebase
  database = firebase.database();



  //Reference for food
  foodRef = database.ref("Food");
  foodRef.on("value",read,console.log("error"));


  // food refrence as 20
  foodRef.set(20);


}


function draw() { 
  
  
  background(255, 212, 82);


  drawSprites();
  
  //add styles here
  textSize(32);
  fill("blue");
  text("Bones in the Stock: "+foodStock,50,300);


  decreaseFood();



  // food is finished then food will recover 
  if(foodStock===0){
    foodStock = 20;
  }


  // bath
  if(keyWentUp(DOWN_ARROW)){
    
    dog.addImage(bathImage);
    dog.scale = 0.3;
    
    
  }


  // sleep 
  if(keyWentUp(LEFT_ARROW)){
   
    dog.addImage(sleepImage);
    dog.scale = 0.3;
    
    
  }


// play 
  if(keyWentUp(RIGHT_ARROW)){
   
    dog.addImage(playImage);
    dog.scale = 0.4;
    
    
  }


  // if space key is pressed then walk  img appear 
  if(keyCode === 32){
    
    dog.addImage(walkImage);
    dog.scale = 0.5;

 }


}



// function for reading data 
function read(data){

  foodStock = data.val();

}


// function
function decreaseFood(){



  if(keyWentDown(UP_ARROW)){
  foodRef = database.ref("Food");
  foodStock = foodStock - 1;
  foodRef.set(foodStock);
  dog.addImage(dogImage1);
  food.x = 350;
  food.y = 200;
  food.scale = 0.1;

  }
  

  // when up arrow key is pressedd and realesed 
  if(keyWentUp(UP_ARROW)){
    
    foodStock = foodStock;
    dog.addImage(dogImage);
   /* fill("yellow");
    text('Thank you ',10,80);*/
    food.x = 250;
    food.y = 400;
    food.scale = 0.2;
    
  }
}

