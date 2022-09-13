let x=0;
let y=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if(keyIsPressed){
    x=mouseX;
    y=mouseY;
  }
  line(x,y,mouseX,mouseY);
}
