let i = 1;
function setup() {
  createCanvas(400, 400);
  background(100);
  for (i = 0; i < 100; i++) {
    let x = random(400);
    let y = random(400);
    let r = random(100);
    if (i % 2 == 0) {
      x = random(200);
      circle(x, y, r);
      text(i, x, y);
    } else if (!(i % 2 == 0)) {
      x = 200 + random(200);
      circle(x, y, r);
      text(i, x, y);
    }
  }
}
