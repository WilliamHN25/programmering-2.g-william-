let x;
let xspeed = 3;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
}

function draw() {
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }

  //Move
  x += xspeed;
  circle(x, height / 2, 50);
  /*koden laver en cirkel, som bevæger sig fra højre til venstre ved at bruge to globale værdier "x og
  xspeed". hvor "xspeed *= -1" betyder at den skifter imellem minus og plus, så speed går fra 3 til -3
  og tilbage*/
}
