let x = 0;
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 101; i++) {
    console.log(x);
    x += i;
  }
}
