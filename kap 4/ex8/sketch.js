function setup() {
  createCanvas(120, 120);
}
function draw() {
  background(204);
  if (keyIsPressed) {
    //hvad er denne variable mon for en type?
    /*dette er boolsk variable, som bliver brugt ift. at trykke en knap */
    if (key == "h" || key == "H") {
      line(30, 60, 90, 60);
    }
    if (key == "n" || key == "N") {
      line(30, 20, 90, 100);
    }
  }
  line(30, 20, 30, 100);
  line(90, 20, 90, 100);
  /*her bliver der dannet to paralle linjer, hvor der bliver skabt en ny linhe imellem dem på forskellige
  måde ift. om man trykker h eller n både stort og småt. */
}
