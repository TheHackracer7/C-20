var movingRect, fixedRect;

function setup() {
  createCanvas(400,400);
  
  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect = createSprite(200, 200, 100, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

}

function draw() {
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.y - fixedRect.y);
  console.log(movingRect.width/2 + fixedRect.width/2);

  if (movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2){
      movingRect.shapeColor = "blue";
      fixedRect.shapeColor = "blue";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  
  drawSprites();
}

