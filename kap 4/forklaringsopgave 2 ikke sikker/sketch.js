let x;
let justHitRightWall;
let xspeed = 3;

function setup() { 
  createCanvas(400, 400);
  x = width / 2;
  /*Her x tildelt en værdi på halvdelen af width*/
} 

function draw() { 
  background(220);
  if (x > width - 25 || x < 0 + 25) {
    xspeed *= -1;
  }
  /*ovenovre kan man se, hvordan at hvis x er støre eller mindre 
  end with altså max og minimum skal xspeed blive -1*/
  //Move
  x += xspeed;
  ellipse(x, height/2, 50, 50);
}