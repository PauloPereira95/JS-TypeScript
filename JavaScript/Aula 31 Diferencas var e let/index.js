/** Let
 *  nao podemos redaclarar
 *  Tem escopo de bloco {...isto é um bloco}
 */

/** VAR
 * podemos redaclarar 
 * Só tem escopo de função
 */
// Escopo global
/*
let verdadeira = true;
let nome = 'Paulo'; // criando
var nome2 = 'Paulo';
if (verdadeira) { // BLOCO ANINHADO
    let nome = 'Otavio'; // criando , tem o mesmo nome mas nao é a mesma variavel
    var nome2 ="rogerio";
    if(verdadeira){
        var nome2 = 'Ronaldo'; // redeclarada
        let nome= 'outra coisa'; // criando // sao 3 variaveis diferentes
    }
}
console.log(nome,nome2);
*/
// Escopo de função
/*
var sobreNome = 'Miranda';
function falaOi() { // a função consegue acerder a variaveis fora da propria função
    //var nome = 'Luiz';
    console.log(sobreNome);
}
falaOi();
*/

console.log(sobreNome);
var sobreNome ='Miranda';