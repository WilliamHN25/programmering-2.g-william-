function setup() {
  /* Her bliver der dannet cirkler uden outlines, som er forskudt med "Pi/4", og fordi det hele er sat 
  i setup bliver den kun kørt igennem 1 gang og dermed bliver der dannet en form for blomst da width kun
  er 20, men height er 80 i ellipsen, så den bliver meget aflang. 
  
  Hvis man justere på ting som hvor langt i værdien vil der kun være forskel hvis hvor mget man delte pi
  med også. Som sagt kan man ogsø ændre på værdierne inde i elipsen så den bliver bredere eller længere.
  */
  createCanvas(720, 400);
  background(200);
  translate(100, 100);
  noStroke();
  for (let i = 0; i < 10; i++) {
    ellipse(0, 30, 20, 80);
    rotate(PI / 4);
  }
}
