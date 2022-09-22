let x = 100;
let y = 100;

function setup() {
  createCanvas(512, 512);
  fill(255, 0, 0);
}

function draw() {
  /*"if (keyIsDown)" betyder at det er når man trykker og holder en knap nede vil der ske der under koden
  " */
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  /*her bruges der "+= eller -=" til at rykke på den røde cirkel siden den har "circle(x,y,50)" */
  clear();
  circle(x, y, 50);
}
