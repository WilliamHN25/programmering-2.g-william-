function setup() {
  createCanvas(400, 400);
  background(220);
  strokeWeight(10);
  for (let i = 0; i < 10; i++) {
    stroke(random(255), random(255), random(255));
    point(random(400), random(400));
  }
}
