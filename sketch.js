var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "orange";
  movingRect = createSprite(100,100,100,50);
  movingRect.shapeColor ="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  //console.log((fixedRect.x - movingRect.x )+"distance between rectangles :"+ (fixedRect.width/2+movingRect.width/2));
  //concatenation

  //if(condition1||condition2){}

  if(Math.abs(movingRect.x - fixedRect.x) <= (movingRect.width/2 + fixedRect.width/2)&& Math.abs(movingRect.y - fixedRect.y) <= (movingRect.height/2 + fixedRect.height/2)){
    movingRect.shapeColor ="red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor ="green";
    fixedRect.shapeColor = "orange";
  }

  /*if(Math.abs(movingRect.y - fixedRect.y) <= (movingRect.width/2 + fixedRect.width/2)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }*/
 
  //
  
  drawSprites();
}