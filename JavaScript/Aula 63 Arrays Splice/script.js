//                -4     -3       -2        -1       0
//                0       1       2         3        4
const nomes = ['Maria','João','Eduardo','Gabriel','Julia'];

//nomes.splice(indice,quantos elementos quer remover, elemento a adicionar)  // o primeiro indice é o que queremos começar a mexer
// o splice retorna em array
// tamnem funciona com numeros negativos
//const removidos = nomes.splice(-2,Number.MAX_VALUE); // coemca do -2 e apaga ate o infinito
//const removidos = nomes.splice(3,0,'luiz'); // não apaga apenas insere no indice 3
//const removidos = nomes.splice(3,1,'paulo'); // remove o que esta no indice 3 (luiz),e apaga apenas 1 (luiz) e coloca o paulo
const removidos = nomes.splice(3,2,'paulo'); // remove o que esta no indice 3 (luiz),e apaga 2 indices (luiz),Julia coloca apenas 1 indice (paulo)

console.log(nomes,removidos);