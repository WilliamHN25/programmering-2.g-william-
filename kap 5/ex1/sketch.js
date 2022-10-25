let i = 1;
function setup() {
  createCanvas(400, 400);
  while (i < 100) {
    let x = random(400);
    let y = random(400);
    let r = random(100);
    circle(x, y, r);
    text(i, x, y);
    i = i + 1;
  }
  /*den har while-løkke som tjekker om i er mindre end 100. hver gang i er under 100 vil der så blive
  dannet et random værdi til x,y og r, hvilket bliver brugt til en cirkel samt tekst inde i cirklen, hvor
  der står hvad i værdien er. til sidst bliver 1 lagt til i, hvilket betyder at den vil stige den vil 
  køre 99 gange. */
}
