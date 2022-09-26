//            012345678910  STRING
const nome = 'Luiz Otavio';
// INDICE       0       1       2    ARRAY
let alunos = ['Luiz','Maria','João'];
//alunos[0] = 'Eduardo'; // Altera o valor da posição 0(Luiz) para Eduardo

//alunos[3] = 'Luiza'; // Adiciona ha posicção 3 , que ainda nao existe o valor 'Luiza'

//console.log(alunos[0]); // Acessa a Luiz que esta na posição 0

//console.log(alunos.length); // Diz o tamanho do array

//---------Adiciona elementos ao array -------------
//alunos[alunos.length] = 'Luiza'; 
//alunos[alunos.length] = 'Fabio';
//alunos[alunos.length] = 'Luana';

//alunos.push('Otavio'); // Adiciona elementos ao array, no final mas com uma função

//alunos.unshift('Luiza'); //  2º  |  Adiciona no inicio
//alunos.unshift('Fabio'); //  1º  |  Adiciona no inicio
                        // Embora o Fabio seja adcionado depois, como é o ultimo
                        // dos dois a usar o unshift ele fica na posição 0

//-------------------------------------------------------

//alunos.pop(); // Elimina o elemento do final
/*let removido = alunos.pop(); // Guarda o valo removido numa variavel
console.log(alunos);
console.log(removido); */

/*const removido = alunos.shift();
console.log(removido);
console.log(alunos);`*/

//delete alunos[1]; // Apaga sem alterar os indices, ou seja a posição fica vazia

/*alunos.push('Luiza');
alunos.push('Eduardo');
console.log(alunos.slice(0,3)); // Seleciona os elemento da posição 0 a 2, o 3 nao conta
console.log(alunos.slice(0,-2)); // Seleciona os elemtnos, menos os ultimos 2
*/

console.log(alunos instanceof Array); // retorna verdadeiro ou falso