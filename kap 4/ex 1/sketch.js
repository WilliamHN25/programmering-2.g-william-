// =
console.log(2 == 2); 
console.log(2 == '2'); 
/*her bliver begge true*/
// !=
console.log(3 != 2); 
console.log('hello' != 'Hello'); 
/*her bliver begger true igen, fordi 3 ikker giver 2 og hello med lille ikke er lig Hello med stort*/
//===
console.log(2 === 2); 
console.log(2 === '2'); 
/*der bliver den første true og den anden false, fordi den første er samem type og tal, hvorimod den anden ikke er
sammen type*/
// !==
console.log(2 !== '2'); 
console.log(2 !== 2);
/*her bliver den første true og den anden false, fordi de skal ikke være sammen type for at være true*/
