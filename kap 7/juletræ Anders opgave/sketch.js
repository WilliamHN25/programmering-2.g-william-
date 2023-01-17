let treeTrunk, træGran1, træGran2, træGran3, træGran4;

function setup() {
  createCanvas(400, 400);

  treeTrunk = new Trunks();
  træGran1 = new Gran();
  træGran1.y3 = 150;
  træGran2 = new Gran();
  træGran2.y3 = 150 - 37.5;
  træGran2.y1 = 330 - 72.5;
  træGran2.y2 = 330 - 72.5;
  træGran2.x1 = width / 2 - 120;
  træGran2.x2 = width / 2 + 120;
  træGran3 = new Gran();
  træGran3.y3 = 150 - 37.5 * 2;
  træGran3.y1 = 330 - 72.5 * 2;
  træGran3.y2 = 330 - 72.5 * 2;
  træGran3.x1 = width / 2 - 90;
  træGran3.x2 = width / 2 + 90;
  træGran4 = new Gran();
  træGran4.y3 = 150 - 37.5 * 3;
  træGran4.y1 = 330 - 69 * 3;
  træGran4.y2 = 330 - 69 * 3;
  træGran4.x1 = width / 2 - 60;
  træGran4.x2 = width / 2 + 60;
}

function draw() {
  background(220);
  treeTrunk.show();
  træGran1.show();
  træGran2.show();
  træGran3.show();
  træGran4.show();
}
class Trunks {
  constructor() {
    this.color1 = "brown";
    this.h = 70;
    this.w = 50;
    this.x = width / 2 - 50 / 2;
    this.y = 330;
  }
  show() {
    fill(this.color1);
    rect(this.x, this.y, this.w, this.h);
  }
  setColor1(c) {
    this.color1 = c;
  }
}
class Gran {
  constructor() {
    this.color2 = "Green";
    this.x1 = width / 2 - 150;
    this.y1 = 330;
    this.x2 = width / 2 + 150;
    this.y2 = 330;
    this.x3 = width / 2;
    this.y3 = 50;
  }
  show() {
    fill(this.color2);
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }
  setColor2(c) {
    this.color2 = c;
  }
}
