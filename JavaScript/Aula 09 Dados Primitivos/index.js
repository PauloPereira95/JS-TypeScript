//String, number, undefined, null, boolean,symbol
const nome1 = 'Paulo'; //string
const nome2 = 'Jorge'; //string
const nome3 = `Gomes`; //string
const num1 = 10; //nunber
const num2 = 10.52; //number
let nomeAluno; // undefined = nao aponta para local nenhum na memoria
let sobreNomeAluno = null; // undefined = nao aponta para local nenhum na memoria
const aprovado = true //TRUE OU FALSE //Tipo de dado booleanoAula 09 Dados Primitivos
const a = [1,2]; // variaveis com valor passado por  referencia
const b = a;        //ver melhor !!!
console.log(a,b);
b.push(3);
console.log(a,b);