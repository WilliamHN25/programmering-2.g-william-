function setup() {
  createCanvas(120, 120);
  strokeWeight(30);
}
function draw() {
  background(204);
  stroke(102);
  line(40, 0, 70, height);
  if (mouseIsPressed) {
    //hvor kommer denne variable fra?
    /*det er en boolsk variable som bliver true hvis musen bliver presset og false hvis ikke*/
    if (mouseButton == LEFT) {
      // og hvad med den?
      /*dette er et systems variable, som enten kan være left, right eller center, og den bliver brugt
      under den boolske vairable, hvilket betyder at nu leder den efter om venstre museklick venstre 
      eller ej. hvis den er laves der en ny linje med farven hvid, hvis ikke bliver den nye linje sort.*/
      stroke(255);
    } else {
      stroke(0);
    }
    line(0, 70, width, 50);
  }
}
