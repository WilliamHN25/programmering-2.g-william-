function setup() {
  createCanvas(120, 120);
}

function draw() {
  background(220);
  if (keyIsPressed) {
    if (key == "A") {
      line(40, height, 60, 20);
      line(width - 40, height, 60, 20);
      line(45, 65, 75, 65);
    }
  }
  if (keyIsPressed) {
    if (key == "V") {
      line(40, 30, 60, height);
      line(80, 30, 60, height);
    }
  }
}
