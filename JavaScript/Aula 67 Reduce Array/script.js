// Reduz o array
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// Retornar o total
let total = numeros.reduce(function (acumulador, valor) {
    acumulador += valor;
    return acumulador;
}, 0); // valor incial do acumulador
console.log(total);

// Retornar um array com os pares (filter)
let pares = numeros.reduce(function (acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []); // define o acumulador como um array
console.log(pares);

// Retornar o array com o dobro dos valores (MAP)
let dobro = numeros.reduce(function (acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
},[]);
console.log(dobro);

// somar so os pares
let somarPares = numeros.reduce(function(acumulador,valor){
    if (valor % 2 === 0 ) acumulador += valor;
return acumulador
},0);
console.log(somarPares);
//------------------------------------------------
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticica', idade: 19 },
    { nome: 'Rosana', idade: 99 },
    { nome: 'Wallace', idade: 100 },
];
//Retornar a pessoa mais velha
let maisVelha = pessoas.reduce(function(valor,inc){
    if(inc.idade > valor.idade) return inc;
    return valor;
});
console.log(maisVelha);