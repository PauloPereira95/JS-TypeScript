/*
Object.values -> retorna os valores
Object.entries -> retorna e valores em arrays
Object.getOwnPropertyDescriptor(o, 'prop') -> retorna o descritor daquela propriedade ()
Object.assign(des, any) -> copia o objeto
... (spread) -> copia/espalha o objeto dentro de outro objeto
// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// ------ COPIAR OBJETO ------------------------------
let produto = { nome: 'caneca', preco: 1.8 };

// o outraCoisa desta forma apenas tem os valores copiados e nao linkados
//let outraCoisa = { ...produto };

// tambem podemos adicionar enquanto "espalhamos os valores"
let outraCoisa = {...produto,material:'porcelana'};

let caneca = Object.assign({},produto,{material:'barro'}); // copia o que esta no produto para o objeto vazio

caneca.preco = 2.5;
console.log(produto);
console.log(caneca);
console.log('------------------------------------');
//-------------------------------------------------------------
//-------------Copiar apenas propriedades especificas--------
// descreve as propriedades da propriedade do objeto
console.log(Object.getOwnPropertyDescriptors(produto, 'nome'));
//------------
Object.defineProperty(produto,'nome',{
    writable:false,
    configurable:false,
});
produto.nome='outra ciou';
console.log(produto);
//----------------------
// È parecido com o keys a diferenca é que pega nos valores das chaves
console.log('--------------------')
console.log(Object.values(produto));
// Para ver os valores e as respetivas chaves
console.log(Object.entries(produto)); // retorna em array
for (let [chave, valor] of Object.entries(produto)) { // entries com desestruturação
    console.log(chave,valor)
}

