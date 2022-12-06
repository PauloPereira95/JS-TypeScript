let fizzBuzz = function(n) {
    let estado = [];
        for(let i=1;i<=n ;i++){
           if( i % 3 === 0  && i % 5 === 0) {
                estado.push('FizzBuzz');
            }else {
                if( i % 3 === 0) {
                    estado.push('Fizz');
                } else {
                    if(i % 5 === 0) {
                        estado.push('Buzz');
                    } else {
                        estado.push(i.toString());
                    }
                }
            }
            
        }
    return estado;
}

console.log(fizzBuzz(5));