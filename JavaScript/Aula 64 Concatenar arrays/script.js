const a1 = [1,2,3];
const a2 = [4,5,6];
//const a3 = a1.concat(a2); // junta os 2 ou mais arrays arrays (a1+a2);
//const a3 = a1.concat(a2,[7,8,9,'luiz']);
//------------
// operador rest ... (spread)
const a3 = [...a1,...a2];
//

console.log(a3);