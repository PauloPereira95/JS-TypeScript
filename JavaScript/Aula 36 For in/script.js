//const frutas = ['pera','maça','uva'];
// for in -> le os indices ou chaves dos objetos
// COM ARRAY
/**
 for (let i in frutas){
    console.log(frutas[i]);
}
 */

const pessoa = {
    nome:'Paulo',
    sobrenome:'Pereira',
    idade:27
}
for(let keys in pessoa){
    console.log(keys, pessoa[keys]);
}
console.log('-------------------');
// duas formas de aceder a uma propriedade do objeto
console.log(pessoa.nome);
console.log(pessoa['nome']);
/*
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/