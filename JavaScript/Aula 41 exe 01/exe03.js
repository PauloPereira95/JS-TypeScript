/** ----- A Minha Resolução ---------------
 function random(min,max) {
    let r = Math.random() * (max-min) + min;
    return Math.floor(r);
}
let min = 0;
let max = 100;
let rand = random(min,max);
console.log(rand)
console.log(fizzBuzz(rand));

function fizzBuzz(num) {
    
    if (!Number(num)) {
        return num;
    }
    if ((resultado = num % 3) === 0 && (resultado = num % 5) === 0) {
        return resultado = 'FizzBuzz';
    } else if ((resultado = num % 5) === 0) {
        return resultado = 'Buzz';
    } else if ((resultado = num % 3) === 0) {
        return resultado = 'Fizz';
    }
        return num;
}
 */
// ------ Correção--------------------
function fizzBuzz(num) {
    if (typeof num !== 'number') return num;
    if ( num % 3 === 0 && num % 5 === 0) return 'FizzBuzz' ;
    if ( num % 3 === 0) return 'Fizz';
    if ( num % 5 === 0) return 'Buzz';
    return num
}
console.log('a', fizzBuzz());
for(let i = 0; i <= 100; i++){
    console.log(i,fizzBuzz(i))
}

