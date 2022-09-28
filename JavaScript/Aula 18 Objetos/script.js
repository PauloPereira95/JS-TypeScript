//------------ OBJETOS------------------------------

/*let pessoa1 = { // Um objeto é uma variavel que tem varios atributos
    nome : 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
};
let pessoa2 = { // Um objeto é uma variavel que tem varios atributos
    nome : 'Maria',
    sobrenome: 'Oliveira',
    idade: 55
};
console.log(pessoal.nome);*/
//--------------------------------------------------

//--------- Função para criar objetos -------------------
/*function criaPessoa(nome,sobrenome,idade) { // função factory
    return {nome,sobrenome,idade};
}

const pessoa1 = criaPessoa('Paulo','Pereira',27);
const pessoa2 = criaPessoa('Maria','Pereira',27);
const pessoa3 = criaPessoa('João','Pereira',27);
const pessoa4 = criaPessoa('Junior','Pereira',27);
const pessoa5 = criaPessoa('Jean','Pereira',27);

console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);
console.log(pessoa5.nome);*/
//-------------------------------------------------------------

//------------ Objeto Com Função-------------------------------
//  a função vai fazer com que o objeto diga o seu nome
// o this refere-se ao objeto deste contexto (pessoa1)
let pessoa1 = {
    nome : 'Paulo',
    sobrenome : 'Pereira',
    idade: 27,

    fala(){ // metodo
        console.log(`${this.nome} ${this.sobrenome} || idade atual: ${this.idade}`);
    },
    incrementaIdade (){
        this.idade++;
    }

}
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
//-------------------------------------------------------------