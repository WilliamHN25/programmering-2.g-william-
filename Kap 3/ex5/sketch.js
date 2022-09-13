function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(keyCode==70){
    rect(mouseX,mouseY,60,20)
  } else if(keyCode==67){
    circle(mouseX,mouseY,60)
  } else if(keyCode==69){
    ellipse(mouseX,mouseY,40,50)
  }
}
