let liste = [
  "william",
  "justin",
  "søren",
  "dejan",
  "tristan",
  "jonson",
  "asger",
  "marius",
  "ibo",
  "emil",
];

function setup() {
  createCanvas(600, 600);
  translate(100, 100);
  for (let i = 0; i < liste.length; i++) {
    liste[i];
    x = textWidth(liste[i]);
    textSize(x / 2);
    text(liste[i], random(300), random(300));
    textSize(0);
  }
}
