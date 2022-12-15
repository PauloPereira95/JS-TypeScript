// fazer freeze num numero de propriedades do objeto
// defineProperty - apenas 1 propriedade
// defineProperties - duas ou mais
// função construtora
function Produto(nome,preco,stock) {
    // imaginar a propriedade seja stock parada/nao alterada
    this.nome = nome;
    this.preco = preco;
    // stock privado

    Object.defineProperty(this, 'stock',{
        enumerable: true, // é exibido quando der print do objeto
        value: stock, // o valor é o valor da propriedade stock
        writable: false,  // o valor nao pode ser alterado
        configurable: true // a propriedade é configuravel / apagar / editar / reconfigurar
        
    });
}
const p1 = new Produto('Camisa',20,3);
console.log(p1);
// mostrar as chaves do objeto num array
console.log(Object.keys(p1));
//--------------------------------------
for (let key in p1) {
    console.log(key);
}
console.log('---------------------------')
//-------------------------------
function Produto2(nome,preco,stock) {
    Object.defineProperty(this, 'stock',{
        enumerable: true, // é exibido quando der print do objeto
        value: stock, // o valor é o valor da propriedade stock
        writable: false,  // o valor nao pode ser alterado
        configurable: true // a propriedade é configuravel / apagar / editar / reconfigurar
        
    });
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // é exibido quando der print do objeto
            value: nome, // o valor é o valor da propriedade stock
            writable: true,  // o valor nao pode ser alterado
            configurable: true // a propriedade é configuravel / apagar / editar / reconfigurar
        },
        preco : {
            enumerable: true, // é exibido quando der print do objeto
            value: preco, // o valor é o valor da propriedade stock
            writable: true,  // o valor nao pode ser alterado
            configurable: true // a propriedade é configuravel / apagar / editar / reconfigurar
        }
    });
}
let p2 = new Produto2('calcas',20,3);
console.log(p2);
for (const keys in p2) {
    console.log(keys);
}