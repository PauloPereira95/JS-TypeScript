// especifico para objetos iteraveis exemplo string ou array
const nome = 'Paulo Pereira'; //string
const nomes = ['Luiz','Otavio','hhenriue','Paulo',]
const pessoa = {
    nome: 'Paulo',
    sobrenome:'Pereira'
}
for (let i = 0; i < nomes.length; i++) { // for clássico
    console.log(nomes[i]);
    
}
console.log('------------');
for (let i in nomes) { // for in (index)
    console.log(nomes[i]);
}
console.log('------------');
for (let valor of nomes) { // for of (valor)
    console.log(valor);
}
console.log('------------');
nomes.forEach(function(valor, indice){ // for each
    console.log(valor , indice);
});
console.log('------PARA OBJETOS------');
for (let i in pessoa){
    console.log(i, pessoa[i]);
}
