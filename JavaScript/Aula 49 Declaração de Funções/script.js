//Declaração Hosting - Eleva  as declarações para o topo da execução
// podemos chamar a funcão e depois cria-la como podemos criar e depois chamar essa função
function falaOi() {
    console.log('oi');
}
falaOi();
// First-Calss Objets(Obejtosde Primeira classe)
// Function expression
let soUmDado = function () {
    console.log('sou um dado');
}
//soUmDado();
// podemos colocaar uma função(Funcao 1) a receber outra função (Funcao 2 ) 
//como parametro e fazer com que a Funcao 1 execute a 2
function exeFuncao(funcao) {
    funcao();
}
exeFuncao(soUmDado);

// Arrow Function
const arrowFunc = () => {
    console.log('sou uma arrow func');
};
arrowFunc();
// Dentro de um objeto
const obj =  {
    falar(){
        console.log('estou a falar');
    }
}
obj.falar();