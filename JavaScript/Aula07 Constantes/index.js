const nome = "João";
//-------------------
// Dentro de '' String fora number
const primeiroNumero = 5; // number
const numString = '5'; // number

const segundoNumero = 10;
const conta = primeiroNumero * segundoNumero;
const resultadoDuplicado = conta * 2;
let resultadoTriplicado = conta * 3;
resultadoTriplicado = resultadoTriplicado + 5;
console.log('Primeiro Numero:',primeiroNumero);
console.log('Segundo Numero:',segundoNumero);
console.log('Resultado Duplicado:',resultadoDuplicado);
console.log('Resultado Triplicado + 5 :',resultadoTriplicado);
console.log(typeof(primeiroNumero));
console.log(typeof(nome));
console.log(primeiroNumero + numString); //neste caso est a concatenar(Juntar) e não juntar
console.log( typeof (primeiroNumero + segundoNumero)); //saber o tipo de resultado

