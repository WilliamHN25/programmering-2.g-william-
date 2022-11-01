let angle = 0;
let x = 50;
let y = 50;

function setup() {
  /*Her bliver der ændret på nogle vigtige værdier, som bliver brugt senere. Der bliver valgt at det er
  grader der bliver brugt istedet for radianer. Efter bliver der valgt at alle slags figure der bliver
  lavet bliver farvet "pink". Tilsidst vælges der at der ikke skal være nogen outlinepå figurende. */
  createCanvas(600, 600);
  angleMode(DEGREES);
  fill("pink");
  noStroke();
}

function draw() {
  /*Her bliver baggrunden valgt til "yellow" og så bliver der brugt translate, hvor "x,y" bestemmer hvor
  meget ting skal rykkes med i disse retninger. Så bliver der brugt rotate til den angle man har som 
  global variable, hvilket betyder at udover de rykker sig snurre de også rundt om sig selv med den
  vinkel "angle" svarer til. Til sidst bliver elipsemode brugt, som gør hvor ellipser bliver placeret 
  ud fra parametrene, men den er også standart sat til "CENTER", så denne ting gør ikke noget.*/
  background("yellow");
  translate(x, y);
  rotate(angle);
  ellipseMode(CENTER);
  /*Her sker det vigtige, hvor x stiger og dermed rykker hen af x-aksen pga. "translate". Efter bliver
"angle" også ændret på så nu snurre den også rundt pga. "rotate".*/
  x = x + 2;
  angle = angle + 4;

  /*Her bliver der lavede en løkke inde i en løkke, hvor den ydre for-løkke ærklere end ny værdi "row",
og den anden løkke ærklere en "col". De har værdier stiger begge med 50, og bliver sat ind i en 
ellipse som x og y værdien. Dermed bliver der dannet 12 cirkler hen x og ned i rækker i y. Alle disse
cirkler bliver så påvirket af de forrige funktioner, så de rotere sig om den første lavet cirkle imens
de rykker sig til højre. */
  for (var row = 3; row <= width; row = row + 50) {
    for (var col = 3; col <= height; col = col + 50) {
      ellipse(row, col, 20, 20);
    }
  }
}
