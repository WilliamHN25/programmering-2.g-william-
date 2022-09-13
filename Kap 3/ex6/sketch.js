/*Her bliver x og y erklæret og tillagt koordinatværdier på 200*/
var x = 200;
var y = 200;
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(220);
  fill(230,0,0);/*Her bliver RGB farven valgt*/
  ellipse(x,y,50,50); /*her bliver figuren som bliver lavet valgt, og den har fået tildelt
  koordinaterne x og y, hvilket svarer til at den starter i midten siden de begge er 200 og canvas
  er 400*/  
  if (x >= 400){
   x = 0; 
   /*dette betyder at når cirklen bevæger sig udover 400 på x-aksen vil den rykke tilbage til 0*/
  }
  /*her bliver tasterne sat til at bevæge firguren ved at sige f.eks. y=y-1, og pga. alt er under draw
  vil minus 1 hele tiden og dermed rykke sig*/
  if (keyCode === UP_ARROW) {
    y = y - 1;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 1;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 1;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 1;
  }
}