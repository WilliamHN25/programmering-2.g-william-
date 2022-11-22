let talListe = [7, 4, 5, 6, 9, 1, 2, 8, 3, 10];
let i = 0;
let min = talListe[0];
while (i < talListe.length) {
  if (talListe[i] < min) {
    min = talListe[i];
    i++;
  }
}
console.log(min); // hvad mon der printes?
