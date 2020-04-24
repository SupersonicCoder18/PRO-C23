var log1, log2, log3, log4, log6, log7, knob1, knob2;
var dome1, dome2, dome3, dome4, dome5, dome6;
function setup() {
  createCanvas(800,400);
  log1 = createSprite(150, 300, 50, 300);
  log1.shapeColor = "white";
  
  
  log2 = createSprite(205, 300, 50, 200);
  log2.shapeColor = "white";
  
  
  log3 = createSprite(260, 300, 50, 200);
  log3.shapeColor = "white";
  
  
  log4 = createSprite(315, 300, 50, 200);
  log4.shapeColor = "white";
  
  
  log5 = createSprite(370, 300, 50, 200);
  log5.shapeColor = "white";
  
  
  log6 = createSprite(425, 300, 50, 200);
  log6.shapeColor = "white";
  
  
  log7 = createSprite(480, 300, 50, 300);
  log7.shapeColor = "white";


  knob1 = createSprite(150, 110, 70, 70);
  knob1.shapeColor = "white";
  
  
  knob2 = createSprite(480, 110, 70, 70);
  knob2.shapeColor = "white";


  dome1 = createSprite(250, 170, 60, 40);
  dome1.shapeColor = "white";


  dome2 = createSprite(315, 170, 60, 40);
  dome2.shapeColor = "white";


  dome3 = createSprite(380, 170, 60, 40);
  dome3.shapeColor = "white";


  dome4 = createSprite(280, 125, 60, 40);
  dome4.shapeColor = "white";


  dome5 = createSprite(345, 125, 60, 40);
  dome5.shapeColor = "white";


  dome6 = createSprite(310, 80, 60, 40);
  dome6.shapeColor = "white";
}

function draw() {
  background(0, 0, 0);  
  drawSprites();
}