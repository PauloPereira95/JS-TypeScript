let umaString = "Um \"texto\""; //como usar "" dentro de ""
let umaString1 = "Um \\texto";
//                01234567 -> indice 
let umaString2 = "Um texto";
console.log(umaString2[4]); // mostra o caracter da posição 4
console.log(umaString2.charAt(6)); // mostra o elemento que esta na posição 6
console.log(umaString2.concat('', ' em ', ' dia ')); // adiciomnar texto ha string
console.log(`${umaString2} em um lindo dia`); // template strings
console.log('Index ' + umaString2.indexOf('o',3)); // ver o indice de uma palavra ou letra
console.log(umaString2.lastIndexOf('m',3)); // ve o indice como o index of mas este comeca pelo final
console.log('minusculas ' + umaString2.match(/[a-z]/g));// encontra todas as minusculas/maiusculas num array
console.log('Indice procurado ' + umaString2.search(/x/)); // diz o indice do que for pedido para encontrar. Neste caso o x que esta no indice 5
console.log(umaString2.replace('Um','Outra')); //substitui uma palavra por outra

let umaString3 ="O rato roeu a roupa do rei de roma.";
console.log(umaString3.replace(/r/g, '#')); //substitui todos os r graças ao g
console.log('Comprimento da String ' + umaString2.length); // diz o comprimento da string
console.log(umaString3.slice(2,6)); // mostra uma parte da string
console.log(umaString3.slice(-5)); //comeca o fim
console.log(umaString3.slice(-5,-1));
console.log(umaString3.split(' ')); //divide/mostra a string apartir de uma letra ou espaço
console.log(umaString3.split(' ',2)); //divide/mostra apenas 2x
console.log(umaString3.toUpperCase());
console.log(umaString3.toLowerCase());
