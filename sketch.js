var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg, apple;
var orangeImg, orangeLeaf, orange;
var redImg, redLeaf, red;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);

  console.log(frameCount);
  var select_sprites = Math.round(random(1, 3));
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  if(frameCount % 60 === 0){
    if(select_sprites === 1){
      createapples();
    }
    else if(select_sprites === 2){
      createoranges();
    }else {
      createred();
    }
  }

  drawSprites();
}

function createapples(){
apple=createSprite(random(50, 350), 20, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime= 150;
}

function createoranges(){
  orange=createSprite(random(50, 350), 20, 10, 10);
  orange.addImage(orangeImg);
  orange.scale=0.07;
  orange.velocityY = 3;
  orange.lifetime= 150;
}
function createred(){
  red=createSprite(random(50, 350), 20, 10, 10);
  red.addImage(redImg);
  red.scale=0.05;
  red.velocityY = 3;
  red.lifetime= 150;
}