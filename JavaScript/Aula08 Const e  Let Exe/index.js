const nome = 'Paulo Pereira';
const sobreNome ='Gomes';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
//peso / (alt * alt)
// calcular imc e ano nascimento
let imc = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2022 - idade;
 
console.log(nome,sobreNome,'tem ', idade,' anos',', pesa', peso,'KG tem ',alturaEmM,'de altura e o seu IMC é de ', imc);
//console.log(nome,'nasceu em ', anoNascimento);

//template strings
console.log(`${nome} nasceu em ${anoNascimento}`);
