/*Lav en funktion der konverterer mellem grader og radianer. */
function setup() {
  createCanvas(400, 400);
  konv(36, 1.5);
}

function konv(v1, r1) {
  r2 = (v1 / 360) * (2 * PI);
  console.log(r2);
  v2 = (r1 / (2 * PI)) * 360;
  console.log(v2);
}

function draw() {
  background(220);
}
