// Getters e Setters - Protege a propriedade

// fazer freeze num numero de propriedades do objeto
// defineProperty - apenas 1 propriedade
// defineProperties - duas ou mais
// função construtora
function Produto(nome, preco, stock) {
    // imaginar a propriedade seja stock parada/nao alterada
    this.nome = nome;
    this.preco = preco;
    // stock privado

    Object.defineProperty(this, 'stock', {
        enumerable: true, // é exibido quando der print do objeto
        value: stock, // o valor é o valor da propriedade stock
        writable: false,  // o valor nao pode ser alterado
        configurable: true // a propriedade é configuravel / apagar / editar / reconfigurar

    });
}
const p1 = new Produto('Camisa', 20, 3);
console.log(p1);
// mostrar as chaves do objeto num array
console.log(Object.keys(p1));
//--------------------------------------
for (let key in p1) {
    console.log(key);
}
console.log('---------------------------')
//-------------------------------
function Produto2(nome, preco, stock) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'stock', {
        enumerable: true, // é exibido quando der print do objeto
        configurable: true, // a propriedade é configuravel / apagar / editar / reconfigurar
        get: function () {
            return stock;
        },
        set: function (valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Valor Errado');
            }
            stock = valor;
        }
    });
}
// função construtora
function criaProduto(nome) {
    return {
        get nome() {
          return nome;
        },
        set nome(valor) {
          valor = valor.replace('coisa.', ''); // sbustitui o coisa por nada
          nome = valor;
        }
    };
}
let p2 = new Produto2('calcas', 20, 3);
//console.log(p2);
p2.stock = 22;
console.log(p2.stock);
const p3 = criaProduto('camisola');
p3.nome = 'qualquer coisa.'
console.log(p3.nome);
// Get obtem valor e setter configura valor