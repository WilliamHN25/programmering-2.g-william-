let r;
let num = 30;
function setup() {
  createCanvas(400, 400);
  fill(255);
  r = 20;
  for (i = 0; 1 < num; i++) {
    circle(200, 200, r);
    r += 10;
  }
}
