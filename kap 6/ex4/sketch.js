/*Lav en funktion, der undersøger om man med venstre mus trykker på en cirkel, der er konstrueret */
function setup() {
  createCanvas(400, 400);
  fill("Yellow");
  circle(100, 200, 30);
}
function mouseClicked() {
  console.log(cirkel23(100, 200, 30, mouseX, mouseY));
}
function cirkel23(x1, y1, r1, mouseX, mouseY) {
  if (sqrt((x1 - mouseX) ** 2 + (y1 - mouseY) ** 2) <= r1 / 2) {
    return true;
  } else {
    return false;
  }
}
