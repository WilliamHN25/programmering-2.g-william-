let x = 20;
let i = 10;
function setup() {
  createCanvas(800, 800);
  strokeWeight(1);
  line(0, 200, width, 200);
  for (let i = 10; i < 110; i += 10) {
    rect((x * i) / 3, 200 - 40, 0 + i / 2, 40);
  }
}
