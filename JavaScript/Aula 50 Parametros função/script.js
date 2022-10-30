
function f(a,b=2,c=4) { 
    // caso nao seja enviado valores para B e C eles assumem os valores 2 e 4 respetivamente
    console.log(arguments);
    console.log(a+b+c);
}
//f(2,10);
// CASO QUEIRA SALTAR VALORES NESTE CASO O BE A UNICA MANEIRA É MANDAR COMO UNDEFINED
// EXEMPLO :  f(2,undefined,10);
//f(2,undefined,10);
//---------------------------
// podemos fazer a atribuição via destruturação de um objeto nos prametros

// Objeto

function fObj({nome,sobre,idade}) {
    console.log(nome,sobre,idade);
}
let objeto = {nome:'paulo',sobre:'pereira',idade:24};
fObj(objeto);

// Array

function fArray([v1,v2,v3]) {
    console.log(v1,v2,v3);
}
let arr = ['paulo1','paulo2',30];
fArray(arr);

//--------------------------
function conta(operador,acumulador,...numeros) { // os ... é o rest operator
    // faz com que receba o resto dos parametros 
    //console.log(operador,acumulador,numeros);
    for (let numero of numeros) {
        //console.log(numero);
        if(operador === '+') acumulador += numero
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador / numero;
    }
    console.log(acumulador);
}
conta('-',0,20,30);