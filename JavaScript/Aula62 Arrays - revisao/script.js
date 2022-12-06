//Valor por referencia
/*const nomes = ['paulo','maria','joao']; // indexado 0,1,2
nomes[2] = 'eduardo';
delete nomes[2]; // apaga o conteudo sem alterar o indice
console.log(nomes);*/


// --- Criar array com um construtor (new)---------------
const nomes2 = new Array('arroz','tomate','cebola');
// ----- Copiar dados de um array
const nomes = ['paulo','maria','joao','ines','antonio'];
//const novo = [...nomes]; // o que for alterado no array "novo" nao vai afetar o array "nomes2" (rest "...")


console.log('nomes ' + nomes);
//console.log('novo ' + novo);
//-------------tamanho do array
console.log(nomes.length);
//-------------- remover valor do array (fim)

//nomes.pop();

//------ Podemos tamberm remover e guardar o valor removido numa variavel

//let removido = nomes.pop();

//console.log(removido);

// ----remove no inicio mas altera os indices

//nomes.shift();
//console.log(nomes);

//-------Adicionar um elemento no final do array


//nomes.push('marcos');
//console.log(nomes);

//---- Adicionar o inicio do array

//nomes.unshift('wallace','rosana');

// ----- Fatiar o array
/*
const novo = nomes.slice(1,3); // de onde até onde 
                        // Podemos usar numeros negativos
console.log(novo);
*/

//------Comverter string num arrray
const nome3 = 'Paulo Jorge Gomes Pereira';
const nomes3 = nome3.split(' ');
//console.log(nomes3);

//---- Array para string
const nome4 = nomes3.join('---!!----');
console.log(nome4);




