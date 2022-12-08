//Filter -> Sempre retorna um array, com a mesma quantidade de elementos ou menos
// Retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
 
// com ciclo sem função filter

/*const maiores = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]>10){
        maiores.push(numeros[i]);
        maiores.splice(0,0,numeros[i])
    }
}
console.log(maiores);
*/
// --------- Com função filter -------


const numerosFiltrados = numeros.filter( valor => valor > 10); // requer um T/F. True ele insere F nao insere
    // desta forma foi utilizada a funcão anonima,callback,arrow function e da forma mais curta possivel

    console.log('MAIORES QUE 10 ', numerosFiltrados);



// ---------------------------------------------------------------
// mostrar cada iteração do laço
/*const numerosFiltrados = numeros.filter((valor,indice,array) => {
    console.log(valor,indice,array); // mostra o "for"
    return valor > 10;

}); // requer um T/F. True ele insere F nao insere
    // desta forma foi utilizada a funcão anonima,callback,arrow function e da forma mais curta possivel

    console.log(numerosFiltrados);
---------------------------------------------------------------------*/
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticica', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
//Retrone as pessoas que tem o nome com 5 letras ou mais
const pessoasNomeG = pessoas.filter(obj => obj.nome.length >= 5);
console.log('COM O NOME COM 5 OU MAIS LETRAS ' , pessoasNomeG);
//Rteorne as pessoas com mais de 50 anos
const pessoasIdade = pessoas.filter(obj => obj.idade > 50);
console.log('+ de 50 ANOS: ' , pessoasIdade)
//Retorne as pessoas cujo nome termina com a letra a
const pessoasLetraFinalA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));
console.log('Nome com Letra final A: ', pessoasLetraFinalA);

