function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(keyCode==70){
    rect(200,200,60,20)
  } else if(keyCode==67){
    circle(200,200,60)
  } else if(keyCode==69){
    ellipse(200,200,40,50)
  }
}
