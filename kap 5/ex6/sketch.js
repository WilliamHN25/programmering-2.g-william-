let r;
let num = 11;
function setup() {
  createCanvas(400, 400);
  r = 20;
  for (i = 1; i < num; i++) {
    x = random(400);
    y = random(400);
    circle(x, y, r * 5);
    text(i, x, y);
    console.log(i);
  }
}
