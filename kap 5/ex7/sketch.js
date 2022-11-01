function setup() {
  createCanvas(400, 400);
  let wordcloud = [
    "Javascript",
    "Python",
    "C++",
    "C",
    "C#",
    "Julia",
    "Java",
    "Go",
    "R",
    "Basic",
  ];
  for (let i = 0; i < wordcloud.length; i++) {
    text(wordcloud[i], random(200), random(200));
    i = i + 1;
  }
}
/* Her bliver der dannet en array hvor i der er forskellige begreber fra programmering. derefter er der 
lavet en for-løkke som siger at den skal gøre igennem hele længden, men stige med 2, fordi der er en "i++"
og længere nede "i=i+1", hvilket betyder at den stiger med 2 hver gang. når den har kørt igennem hele
arrayen skrives der stykke tekst med ordet fra listen inde i, og tilfældige steder på canvaset*/
