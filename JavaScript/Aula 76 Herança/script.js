// Produtos -> aumento de preço e desconto
// Camisola tem cor
//Caneca tem material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
// ------------metodos------------
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};
//---------------------------------
function Camisola(nome, preco, cor) {
    Produto.call(this, nome, preco); // linka a função camisola com a produto (existe em todas as funções)
    this.cor = cor;
}
Camisola.prototype = Object.create(Produto.prototype);
Camisola.prototype.constructor = Camisola;

Camisola.prototype.aumento = function (perc) {
    this.preco = this.preco + (this.preco * (perc / 100));
}

function Caneca(nome, preco, material, stock) {
    Produto.call(this, nome, preco);
    this.preco = preco;
    this.material = material;
    Object.defineProperty(this, 'stock', {
        enumerable: true, // faz com que seja exibida
        configurable: false,
        get: function () {
            return stock;
        },
        set: function (valor) {
            if (typeof valor != 'number') return;
            stock = valor;
        }
    });
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('generico', 111);
const camisola = new Camisola('regata', 7.5, 'preta');
const caneca = new Caneca('caneca A', 50, 'BARRO', 50);
camisola.aumento(100);
caneca.stock = 1000; // aqui usa o set 
console.log(caneca.stock); // aqui usa o get
console.log(caneca);
console.log(camisola);
console.log(produto);
