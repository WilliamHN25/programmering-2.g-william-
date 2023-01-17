/*Lav en funktion der som input tager tre sidelængder og efterfølgende konstruerer en trekant
 med de vinkler og angivelser af sidelængderne, som beregnes ved brug af de trigonometriske funktioner.*/
let x1 = 0;
let y1 = 0;
function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  angleMode(radians);
  trekant(random(10), random(10), random(10));
}
function trekant(s1, s2, s3) {
  x2 = x1 + s1;
  r1 = acos((s2 ** 2 + s1 ** 2 - s3 ** 2) / (2 * s2 * s1));
  x3 = cos(r1) * 6;
  y3 = sin(r1) * 6;
  x4 = x2 - x3;
  y4 = y1 + y3;
  triangle(x1 * 10, y1 * 10, x2 * 10, y1 * 10, x4 * 10, y4 * 10);
}
