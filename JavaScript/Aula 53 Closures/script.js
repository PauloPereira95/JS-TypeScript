function retornaFunc() {
    let nome = 'Paulo';
    return function () {
        return nome;
    };
}
let funcao = retornaFunc();
console.dir(funcao);