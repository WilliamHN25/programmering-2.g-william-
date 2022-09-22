function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  fill(255, 0, 0);
  noStroke();
  if (mouseX < width / 3) {
    rect(0, 0, width / 3, height);
  } else if (mouseX <= (width * 2) / 3) {
    rect(width / 3, 0, width / 3, height);
  } else {
    rect((width * 2) / 3, 0, width / 3, height);
  }
}
/* i denne code bliver der dannet et rektangel som har 1/3 width altså bredde. sådan coden virker er at
ift. hvor lange henne ad x-aksen musen er så vil der blive dannet et rektangel i denne tredjedel med fuld
højde. ("width" er altså canvas bredde (600) og "height" er alså canvas højde(400)). alle rektanglerne
bliver farvet røde pga. fill i starten.*/
