let x = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
  fill(255);
  for (let i = 0; i < 20; i++) {
    x = 0;
    for (let h = 0; h < 20; h++) {
      if (h % 2 == 0) {
        if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        }
      }
      if (h % 2 == 1) {
        if (i % 2 == 1) {
          fill(0);
        } else {
          fill(255);
        }
      }
      rect(x, 40 * i, 40, 40);
      x += 40;
    }
  }
}
