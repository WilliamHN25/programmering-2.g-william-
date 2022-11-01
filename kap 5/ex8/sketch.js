let num = 5;
let w = 5;
let num2 = 10;
function setup() {
  createCanvas(400, 400);
  for (i = 0; i < num; i++) {
    fill(random(255), random(255), random(255));
    rect(random(400), random(400), 40, 20);
  }
  while (w < num2) {
    fill(random(255), random(255), random(255));
    rect(random(400), random(400), 40, 20);
    w += 1;
  }
}
