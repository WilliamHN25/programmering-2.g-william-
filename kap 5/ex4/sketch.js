let i = 0;

function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0);
  while (i < 100) {
    i += 1;
    if (!(i % 2 == 0)) {
      fill(0, 0, 255);
      x = random(400);
      y = random(400);
      text(i, x, y);
    }
  }
}
