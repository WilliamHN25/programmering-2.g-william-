function setup() {
  createCanvas(400, 400);
  console.log(cirkel23(100, 200, 30, 120, 200, 50));
}
function cirkel23(x1, y1, r1, x2, y2, r2) {
  fill("Yellow");
  circle(x1, y1, r1);
  circle(x2, y2, r2);
  console.log(sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
  console.log(r1 + r2);
  if (sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2) <= (r1 + r2) / 2) {
    return true;
  } else {
    return false;
  }
}
