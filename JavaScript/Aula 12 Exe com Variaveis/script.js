let varA = 'A'; //b
let varB = 'B'; //c
let varC= 'C'; //a

/*-------------------
varA1 = varA
varA = varB;
varB = varC;
varC = varA1;
--------OU-------
*/
[varA,varB,varC] = [varB, varC, varA]
//----------------------------
// tEMPLATE STRING
console.log(`VAR A -> ${varA}, VAR B -> ${varB}, VAR C -> ${varC}`);
