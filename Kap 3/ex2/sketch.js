function setup() {
  createCanvas(400, 400);
  noStroke();
  fill(0);
}

function draw() {
  background(220);
  if  (mouseIsPressed == true) {
      if(mouseButton == LEFT ) {
        circle(mouseX,mouseY,30,30);
      }
      else if (mouseButton == RIGHT) {
        rect(mouseX,mouseY,40,30);
      }
    }
    }