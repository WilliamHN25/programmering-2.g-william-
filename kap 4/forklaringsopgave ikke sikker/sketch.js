function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(220);
  fill(255,0,0);
  noStroke();
  /*I koden under dette står der tre forskellige if 
  komandoer. hver af dem handler om x koordinatet
  hvor at hver gang stiger den med en tredjedel af canvas*fuld højde
  . man kan også se det er et rødt rektangel, som vil flytte sig fra hver 
  tredjedel man rykker musen hen over x-aksen.*/
  if (mouseX < width/3) {
    rect(0, 0, width/3, height);
  }
  else if (mouseX <= width*2/3) {
    rect(width/3, 0, width/3, height);
  }
  else {
    rect(width*2/3, 0, width/3, height);
  }
}