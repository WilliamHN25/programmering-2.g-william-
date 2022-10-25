let i = 1;

function setup() {
  createCanvas(400, 400);
  fill(255, 0, 0);
  for (let i = 0; i < 101; i += 2) {
    let x = random(400);
    let y = random(400);
    text(i, x, y);
  }
}
