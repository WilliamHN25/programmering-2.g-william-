function setup() {
  createCanvas(400, 400);
  background(220);
  circle(200,200,50)
}

function draw() {
  background(220);
  if(mouseX <= 199){
    circle(mouseX,mouseY,50)
  }
  if(mouseX >= 200){
    rect(mouseX,mouseY,40,50)
  }
}
