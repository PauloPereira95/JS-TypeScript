// Map - Altera valores do array mas nao altera o seu tamanho
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Dobrar os numeros
const arrayDobro = numeros.map(valor => valor * 2);
console.log(arrayDobro);
console.log('----------------------------------');

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticica', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// Retornar apenas uma string com o nome da pessoa
let arrTString = pessoas.map(obj => obj.nome);
console.log(arrTString);
console.log('----------------------------------');
//Remover apenas a chave "nome" do objeto
let removeNome = pessoas.map(obj => ({idade : obj.idade}));
console.log(removeNome);
console.log('----------------------------------');
//Adicionar uma chave id em cada objeto
/* A alterar o Original
let adicChave = pessoas.map(function(obj,indice){
    obj.id = indice + 1;
    return obj;
});
*/

// --- Sem Alterar o Original ------
let adicChave = pessoas.map(function(obj,indice){
    let newObj = {...obj};
    newObj.id = indice +1;
    return newObj;
});
console.log(adicChave);
console.log(`Original`, pessoas);