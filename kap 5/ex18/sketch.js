let liste1 = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
let max1 = 0;
let j = 0;
function draw() {
  createCanvas(400, 400);
  if (liste1.length > 0) {
    for (let i = 0; i < liste1.length; i++) {
      if (liste1[i] > max1) {
        max1 = liste1[i];
        fjern = i;
      }
    }
    /*Denne for-løkke er god til at fjerne et tal, som ikke er i starten eller slutningen af et array.
    Der bliver brugt "continue" til at skippe et led i løkken hvor 1 bliver lagt til j, og dermed
    stiger i stadig, men j er 1 bagud og har derfor sprunget det tal i arrayet men ikke gad at have med
    over. "liste[j]=liste[i]" er en form for ghost liste, siden den kopier det helt samme bare uden
    den værdi man skippede. Tilsidst resetter man j og max1 for at den kan*/
    for (let i = 0; i < liste1.length; i++) {
      if (i == fjern) {
        console.log(max1);
        continue;
      }
      liste1[j] = liste1[i];
      j++;
    }
    j = 0;
    liste1.pop();
    console.log(liste1);
    max1 = 0;
  }
}
