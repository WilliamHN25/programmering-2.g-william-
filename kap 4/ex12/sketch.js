let x = 100;
let y = 100;
let x1 = 100;
let y1 = 100;

function setup() {
  createCanvas(700, 700);
  fill(120);
}

function draw() {
  background(220);
  if (keyIsPressed) {
    if (keyIsDown(LEFT_ARROW)) {
      x -= 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x += 10;
    }
    if (keyIsDown(UP_ARROW)) {
      y -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
      y += 10;
    }
    if (key == "a") {
      x1 -= 10;
    }
    if (key == "f") {
      x1 += 10;
    }
    if (key == "w") {
      y1 -= 10;
    }
    if (key == "s") {
      y1 += 10;
    }
  }

  clear();
  fill(209);
  ellipse(x, y, 60, 40);
  fill(255);
  circle(x + 20, y - 10, 10);
  circle(x + 20, y + 10, 10);
  fill(0);
  circle(x + 22, y - 9, 5);
  circle(x + 22, y + 9, 5);
  fill(209);
  strokeWeight(1);
  line(x + 31, y, x + 40, y - 8);
  fill(209);
  line(x + 31, y, x + 40, y + 8);

  fill(209);
  rect(x1, y1, 60, 40);
  fill(255);
  circle(x1 + 20, y1 - 10, 10);
  circle(x1 + 20, y1 + 10, 10);
  fill(0);
  circle(x1 + 22, y1 - 9, 5);
  circle(x1 + 22, y1 + 9, 5);
}
