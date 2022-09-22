function setup() {
  createCanvas(400, 400);
  console.log(2 == 2 && 2 == "2");
  /*1 bliver true, fordi den første del 2==2 er rigtigt og "and" 2=='2' giver også true dermed bliver den
  fulde true*/
  console.log(2 == 2 && 2 == "2" && 2 === "2");
  /*2 bliver false, selvom de første 2 dele giver true sammen er det den sidste del hvor 2==="2" ikke
  giver true, siden de ikke er sammen type mere.*/
  console.log((2 == 2 && 2 == "2") || 2 != 2);
  /*3 bliver true siden at i den første del giver den true samme type og sammen værdi, men så står der
  eller 2!=2, hvilket ikke betyder noget for selve svaret siden den første del er true. dvs. at begge dele
  skal give false før den hele bliver false*/
  console.log("hello" != "Hello" && "hello" !== "Hello");
  /*true pga. begge giver true og dermed bliver den true*/
  console.log(
    "hello" != "Hello" || ("hello" !== "hello" && "hello" !== "heLLo")
  );
  /*true igen siden alle tre giver true*/
  console.log(2 === 2 || 2 != 3);
  /*true fordi begge giver true og dermed bliver den true*/
  console.log(2 === 2 || (2 != "2" && (true || false)));
  /*true selvom den højre del giver false*/
}

function draw() {
  background(220);
}
