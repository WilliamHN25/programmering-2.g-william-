let listelige = [];
let listeulige = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) {
      fill(200, 0, 0);
      listelige.push(i);
      text(i, 200 + random(200), random(height));
    } else if (i % 2 == 1) {
      fill(0);
      listeulige.push(i);
      text(i, random(180), random(height));
    }
    console.log(listelige);
    console.log(listeulige);
  }
}
