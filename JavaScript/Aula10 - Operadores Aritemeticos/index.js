/*Operadores aritemeticos
    + - Adição e Concatenação( junta texto + numeros)
    - - Subtração
    / - Divisão
    * - Multiplicação
    ** - Potenciação
    % - resto da divisão inteira
*/
/*Precendencia - ordem
    1º ()
    2º **
    3º * / %
    4º + -
*/
//Incrementar(++) e decremento(--)
let contador = 1;
contador ++; // 2 Primiro faz a ação depois incrementa
//----- OU ------ 
++contador ; // 3 Primeiro incrementa e depois faz a ação
console.log(contador++); // mostra 3
console.log(contador); // mostra 4
// Incrementar mais de 1 valor
const passo = 2;
let cont = 0;
/*cont = cont + passo;
console.log('RESULTADO: ',cont);
cont = cont + passo;
console.log('RESULTADO: ',cont);
cont = cont + passo;
console.log('RESULTADO: ',cont);
------- OU ------------------
*/
cont += passo;
console.log('RES: ',cont);
cont += passo;
console.log('RES: ',cont);

// Operadores de atribuição ( = ) 
const num1 = 10;
const num2 = parseInt('5'); // converte para inteiro
const num3 = parseFloat('5.2'); // converte para numero flotoante com decimais
const num4 = Number('5.65') // Decide automaticamente se passa para numero inteiro ou decimal
const res = num1 * num2;
console.log('RES    ',  res,res,num3, typeof num4 );