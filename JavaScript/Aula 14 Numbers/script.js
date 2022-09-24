// IEEE 754-2008 Padrão que o JS segue para a precisao dos numero
let num1 = 0.7; //number
let num2 = 0.1; //number
/*
console.log(num1.toString() + num2);
console.log(typeof num1); */

// num1 = num1.toString();  Passa de Number a String

// console.log(num1.toString(2));  Mostra o valor da variavel em binario

// console.log(num1.toFixed(2));  Arredonda o valor para 2 casas decimais

// console.log(Number.isInteger(num1)); Verifica se o numero é inteiro (V/F)

/*
let temp = num1 * 'ola';
console.log(Number.isNaN(temp)); Verifica se a conta é invalida*/
/*------------------------------------
num1  +=num2;  // 0.8 // num1 = num1 + num2;
num1  +=num2; //0.9
num1  +=num2; //1.0
num1  +=num2; // 1.1
num1  +=num2; // 1.2
num1  +=num2; // 1.3
num1  +=num2; // 1.4
num1  +=num2; // 1.5
num1  +=num2; // 1.6
num1  +=num2; // 1.7
num1  +=num2; // 1.8
num1  +=num2; // 1.9
num1  +=num2; // 2
num1 = Number(num1.toFixed(2)); // coloca o numero com 2 casas decimais
console.log(num1);
console.log(Number.isInteger(num1));
 ---------------------------------------------------*/
 /*--------Faz o mesmo que em cima mas com contas---*/
 num1 = ((num1*100) + (num2*100))/100;
 num1 = ((num1*100) + (num2*100))/100;
 num1 = ((num1*100) + (num2*100))/100;

 console.log(num1);
 console.log(Number.isInteger(num1));
