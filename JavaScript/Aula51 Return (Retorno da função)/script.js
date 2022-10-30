// return
// retorna um valor
// termina a função
let soma = function (a, b) {
    return a + b;
}
//console.log(soma(2, 5));
//---------
// a função faz o mesmo que as linhas em baixo,cria o objeto
function criaPessoa(nome, sobre) {
    return { nome, sobre };
}
let p1 = criaPessoa('paulo', 'pereira');
let p2 = { nome: 'teste', sobre: 'asas' };
//console.log(p1);
//console.log(p2);
//-------------------------------
// funcções em camadas
function falaFrase(comeco) {

    function falaResto(resto) {
        return comeco + ' ' + resto;

    }
    return falaResto;
}
const fala = falaFrase('ola');
const resto = fala('mundo!');
console.log(resto);
// utilidade

function criaMultiplicador(multi) {
    // multiplicador
    return function (n) {
        return n * multi;
    }
}
const duplica = criaMultiplicador(2); // mandamos o multiplicador
const triplica = criaMultiplicador(3); // mandamos o multiplicador
const quadriplica = criaMultiplicador(4); // mandamos o multiplicador
console.log(duplica(2)); // mandamos o numero
console.log(triplica(2)); // mandamos o numero
console.log(quadriplica(2)); // mandamos o numero
