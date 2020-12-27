//Create variables here
var dog, happyDog, sadDog, db;
var foodValue;

function preload()
{
happyDog=loadImage("images/happy.png");
sadDog=loadImage("images/sad.png");

}

function setup() {
	createCanvas(500,500);
  dog = createSprite (250,250,10,10);
  dog.addImage(sadDog);
  dog.scale=0.2;
  db=firebase.database();
  db.ref('Food').on("value",readStock);
  
}


function draw() {   
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodValue);
    dog.addImage(happyDog);
  }
  drawSprites();
  //add styles here

  textSize(18);
  fill("blue");
  text("Food Remaining : "+ foodValue, 300,50);
}
function readStock (data){
  foodValue = data.val();
}

function writeStock(foodS){
  foodS=foodS - 1;
  db.ref('/').update({
    'Food' : foodS
  });
}

