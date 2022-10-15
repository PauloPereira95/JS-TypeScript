/* ------------ MINHA TENTATIVA-----------------------
function compNumeros(num1,num2) {
    
    if (num1 > num2) {
       return num1; 
    }else{
        return num2;
    }
}
let num1 = 10;
let num2 = 122;
console.log(compNumeros(num1,num2));
*/
//--------------- CORREÇÃO-------------------
/*function max(x,y) {
    /*if (x > y) {
        return x;
    }
    return y;
    // ou if ternario
    return x > y ? x : y;
}
*/
// arrow function
const max = (x,y) => x > y ? x : y;
console.log(max(143,23));