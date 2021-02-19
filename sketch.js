var name;
var input;
var button;
var buttonimg;
var gameState = 0;
var level1;
var player;
var b_virus_img;
var virus_img;
var v_group, bv_group, s_group;
var score = 0;
var edges;
var background_img;
var retry_button;
var retry_button_img;

function preload(){
  buttonimg = loadImage("PlayButton.png");
  b_virus_img = loadImage("Mega Covid.png");
  virus_img = loadImage("Small Covid.png");
  background_img = loadImage("Lvl1terrain.png");
  retry_button_img = loadImage("retry_img.png")
}
function setup() {
  createCanvas(1000,600);
  input = createInput("Player Name");
  input.position(425,200);
  button = createSprite(500,300,20,20);
  button.addImage(buttonimg); 
  button.scale = 0.5;
  textSize(40);
  textStyle(BOLD);
  textFont("Impact");
  text("COVID-19 Simulator",325,100);
  player = createSprite(400,150,40,40);
  player.visible = false; 
  v_group = new Group();
  bv_group = new Group();
  s_group = new Group();

 retry_button = createSprite(500,300, 40,40)

 
 // retry_button.addImage(retry_button_img);
  retry_button.visible = false;
}

function draw() {
  //background("blue");  
  edges = createEdgeSprites();
  name = input.value();
  if(mousePressedOver(button)){
    gameState = 1;
    input.hide();
    button.destroy();
    clear();
  }
  if(gameState === 0){
    background("white");
  textSize(40);
  textStyle(BOLD);
  textFont("Impact");
  text("COVID-19 Simulator",325,100);
  }
  if(gameState ===1){
    clear();
     
    level1 = new Level1();
    level1.display();
    //background("red");
    background("background_img");
    textSize(20);
    text("Score: " + score, 920,50);
    }

    if(gameState ===2){
      background("white");
      player.visible = false;
    // player.destroy();
      v_group.destroyEach();
      bv_group.destroyEach();
      s_group.destroyEach();
      text("GAME OVER", 400,200);
      retry_button.visible = true;
      if(mousePressedOver(retry_button)){
        gameState = 1;
        //input.hide();
        //retry_button.visible = false;
        retry_button.destroy();
        clear();
        console.log(gameState);
        background("white");
        player.visible = true;
        level1 = new Level1();
        level1.display();
      }

    }
    

  drawSprites();
 
  
}