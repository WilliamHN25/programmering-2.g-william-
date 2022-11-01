let r;
let num = 30;
function setup() {
  createCanvas(400, 400);
  r = 20;
  for (i = 0; i < num; i++) {
    circle(200, 200, (40 - i) * 10);
    console.log(i);
  }
}
