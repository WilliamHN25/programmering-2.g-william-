let x;
let xspeed = 3;

function setup() {
  createCanvas(400, 400);
  x = height / 2;
}

function draw() {
  background(220);
  fill(0, 0, 255);
  noStroke();
  if (x > height - 40 || x < 0 + 40) [(xspeed *= -1)];
  x += xspeed;
  circle(width / 2, x, 80);
}
