/*let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A
// Atribuição via desatrusturação
// <- do lado esquerdo desastruturação|| do lado direito reatribui o valor delas ->
//const numeros = [1,2,3];~
-------------------
[a,b,c] = [b,c,a];
console.log(a,b,c);
-------------------
*/
//               0  1  2  3  4  5  6  7  8
/*const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 700, 80, 90];
//const [um, dois, tres,...resto] = numeros; // seleciona o 1º e 2º elemento e colocas nas variaveis
// os ... faz com que a variavel resto receba o resto do array
const [um, , tres , , cinco , , sete ] = numeros;
console.log(um,tres , cinco);
*/
// ... -> operador rest (seleciona o resto)
// ... -> espalha spread
// INDEX            0           1         2                           
// INDEX           0  1  2   0  1  2   0  1  2
const numeros = [[1, 2 ,3],[4, 5, 6],[7, 8, 9]];
/*
 ------ Acedert ao 6 --------
console.log(numeros[1][2]);
------------- OU --------------
const [,[,, seis]] = numeros; 
------------ OU-------------
*/

const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);