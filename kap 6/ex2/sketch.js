function setup() {
  createCanvas(400, 400);
  cirkelGul();
}
function cirkelGul() {
  fill("Yellow");
  let x1 = random(200);
  let y1 = random(200);
  let r1 = random(100);
  circle(x1, y1, r1);
}
