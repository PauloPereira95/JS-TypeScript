function saudação(nome) {
    console.log(`Bom dia ${nome} !`); // Faz alguma coisa mas nao retorna nenhnum valor
}
function saudaçãoReturn(nome) {
    //console.log(`Bom dia ${nome} !`); // Faz alguma coisa e retorna um valor
    return  `Bom dia ${nome} !`
}

const variavel = saudaçãoReturn('Paulo');
//onsole.log(variavel);
/*------DECLARAÇÃO CLÁSSICA DA FUNÇÃO---------------------
let divRes = document.getElementById('div-resultado')
let num1 = Number(prompt('Numero 1'));
let num2 = Number(prompt('Numero 2'));
function soma(x = 1,y = 1) {
    let resultado = x + y;
    return resultado;
}

divRes.innerHTML = `<h1> RESULTADO: ${soma(4,2)} </h1>`
--------------------------------------------------*/
//-----Função Anonima(Função dentro de uma variavel)------
// Neste caso é preciso terminar com ; porque a variavel recebe o valor da função
const raiz = function(n){
    return n**0.5
};
//console.log(raiz(9));
//--------------------------------------------------------~
//-------Maneira mais moderna de Declarar uma Função-------
// => significa função
const raiz1 = (n)=> {
    return n**0.5
};
//console.log(raiz1(9));

// visto que só tem uma linha de codigo e um parametro é possivel
// encontar ainda mais a função (Arrow Function)
const raiz2 = n => n**0.5

console.log(raiz2(10));
console.log(saudaçãoReturn('Pablo'));
//---------------------------------------------------------
