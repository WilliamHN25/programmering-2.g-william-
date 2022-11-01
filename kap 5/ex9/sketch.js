let y = 10;
let x = 10;

function setup() {
  createCanvas(400, 400);
  frameRate(20);
}

function draw() {
  background(220);
  for (i = 0; i < 110; i += 10) {
    line(100, y + i, 300, y + i);
  }
  for (i = 0; i < 110; i += 10) {
    line(x + i, 100, x + i, 300);
  }
  y++;
  x += 2;
}
