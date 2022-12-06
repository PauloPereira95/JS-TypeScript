var numberOfSteps = function(num) {
    let numPassos = 0;
    for(let i =0; num > 0; i++){
        if(num % 2 != 0) {
            num = num -1;
            console.log('passei 1')
        }
        num = num / 2;
        console.log('passei 2')
        numPassos ++;
    }
    return numPassos;
};
console.log(numberOfSteps(8));