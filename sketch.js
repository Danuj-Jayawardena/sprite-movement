var ball;

function setup() {
  createCanvas(600, 600);

  ball = createSprite(300, 300, 60, 60);
  
}

function draw() {
  
  background("pink");

  drawSprites()

  if(keyDown(RIGHT_ARROW)){
    ball.x += 3;
  }
  if(keyDown(LEFT_ARROW)){
    ball.x -= 3;
  }

  if(keyDown(UP_ARROW)){
    ball.y -= 3;
  }
  if(keyDown(DOWN_ARROW)){
    ball.y += 3;
  }
}