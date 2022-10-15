const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let numero of numeros) { // com for of

    if (numero === 2) {
        console.log('pulei o 2');
        continue; // continua para a proxima iteração do laço, vai ate ao final
    }
    if (numero === 7) {
        console.log('7 encontrado , saiu do laço');
        break;// pára o laço, quando neste caso encontra o 7 ele deixa de executar este laço de codigo

    }
    console.log(numero);
}
console.log('------------FOR IN--------------');
for (let i in numeros) {
    numero = numeros[i]
    if (numero === 2) {
        console.log('pulei o 2');
        continue; // continua para a proxima iteração do laço, vai ate ao final
    }
    if (numero === 7) {
        console.log('7 encontrado , saiu do laço');
        break;// pára o laço, quando neste caso encontra o 7 ele deixa de executar este laço de codigo

    }
    console.log(numero);
}
console.log('------------FOR CLÁSSICO--------------');
for (let i = 0; i < numeros.length; i++) {
    numero = numeros[i]
    if (numero === 2) {
        console.log('pulei o 2');
        continue; // continua para a proxima iteração do laço, vai ate ao final
    }
    if (numero === 7) {
        console.log('7 encontrado , saiu do laço');
        break;// pára o laço, quando neste caso encontra o 7 ele deixa de executar este laço de codigo

    }
    console.log(numero);
}
console.log('------------WHILE--------------');
let i = 0;
while (i < numeros.length) {
    let numero = numeros[i];

    if (numero === 2) {
        console.log('pulei o 2');
        i++;
        continue; // continua para a proxima iteração do laço, vai ate ao final
    }
    console.log(numero);
    if (numero === 7) {
        console.log('7 encontrado , saiu do laço');
        i++;

        break;// pára o laço, quando neste caso encontra o 7 ele deixa de executar este laço de codigo
    }
    i++;
}

console.log('------------ DO WHILE--------------');
let index = 0;
do {
    let numero = numeros[index];

    if (numero === 2) {
        console.log('pulei o 2');
        index++;
        continue; // continua para a proxima iteração do laço, vai ate ao final
    }
    console.log(numero);
    if (numero === 7) {
        console.log('7 encontrado , saiu do laço');
        index++;

        break;// pára o laço, quando neste caso encontra o 7 ele deixa de executar este laço de codigo
    }
    index++;
} while (index < numeros.length);
