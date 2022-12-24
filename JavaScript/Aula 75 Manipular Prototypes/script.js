// new object -> Objet.prototype
const objA = {
    chaveA: 'A'
};
const objB = {
    chaveB: 'B'
};
const objC = {
    chaveC: 'C'
}
// defenir o objeto B como o prototype de A
Object.setPrototypeOf(objB, objA);

Object.setPrototypeOf(objC, objB); // ao fazer diretamento para o 
//objeto A perco o acesso ao objeto B
// permite reaproveitar codigo
console.log(objB.chaveA);
console.log(objC.chaveA);
console.log('---------------------------');
// Função Construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};
Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};
const p1 = new Produto('camisola', 50);
//p1.desconto(50);
p1.aumento(50);
console.log(p1);
console.log('-------------------');
const p2 = {
    nome: 'caneca',
    preco: 15
};
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(100);
console.log(p2);
console.log('-------------------');
// Criar Objeto e definir o seu prototype
const p3 = Object.create(Produto.prototype, {
    // Opcional
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 50
    },
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
});
//---------------
p3.aumento(10);
console.log(p3)