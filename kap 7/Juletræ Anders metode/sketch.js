let treeTrunk, treeTrunk2;
function setup() {
  createCanvas(400, 400);
  treeTrunk = new Trunks();
  treeTrunk2 = new Trunks();
  treeTrunk2.x = 100;
  treeTrunk2.setColor("Yellow");
}

function draw() {
  background(220);
  treeTrunk.show();
  treeTrunk2.show();
}

class Trunks {
  constructor() {
    this.color = "Brown";
    this.h = 300;
    this.w = 50;
    this.x = 200;
    this.y = 200;
  }

  show() {
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
  }

  setColor(c) {
    this.color = c;
  }
}
