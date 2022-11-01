let listelige = [];
let listeulige = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
      listelige.push(i);
      text(i, random(200), random(height));
    } /*else if (i % 2 == 1) {
      translate(200, 0);
      listeulige.push(i);
      text(i, random(200), random(height));
    }*/
  }
}
