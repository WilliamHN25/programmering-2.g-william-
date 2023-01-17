let input, button, greeting, input2;
function setup() {
  // create canvas
  createCanvas(710, 400);

  input = createInput();
  input.position(20, 65);

  input2 = createInput();
  input2.position(20, 100);

  button = createButton("submit");
  button.position(input.x + input.width, 65);
  button.mousePressed(greet);

  greeting = createElement("h2", "what is your name?");
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  const name2 = input2.value();
  greeting.html("hello " + name + " " + name2 + "!");
  input.value("");
  input2.value("");
}
