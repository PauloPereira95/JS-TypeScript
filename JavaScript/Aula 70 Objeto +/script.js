// literal da string é ''

const pessoa = {
    nome: 'Paulo', // nome é a chave
    sobreNome: 'Pereira' // sobrenome é a chave
};
console.log(pessoa.nome, pessoa.sobreNome);
// ---------------------OU------------------
// anotação de parentises retos
console.log(pessoa['nome'], pessoa['sobreNome']);
// --------------- OU ---------------------
// aceder de forma dinamica
const chave = 'nome';
console.log(pessoa[chave]); 
//-------------------------------------------
// criar objeto com construtor

let pessoa1 = new Object();
pessoa1.nome = 'luiz';
pessoa1.sobreNome = 'perez';
pessoa1.idade = 2;
//console.log(pessoa1.nome, pessoa1.sobreNome);

// Apagar a chave nome
delete pessoa1.nome;
console.log(pessoa1)

// Metodos-----------------------------------------
// Métodos são funcoes que estão dentro do objeto que executam acoes
// UMa das vantagens é ter acesso as coisas do objeto dentro da função
pessoa1.falarNome = function () {
   return console.log(`${this.sobreNome} esta a dizer o seu sobrenome`);
};
pessoa1.getDataNasc = function(){
    let dataAtual = new Date(); // construtor
    return dataAtual.getFullYear() - this.idade;
}
pessoa1.falarNome();
console.log('ano de nasc: ',pessoa1.getDataNasc()); 

// for in
for (let key in pessoa1) {
    console.log(pessoa1[key]); // ver oo valor da chave
} 
// "Molde para cirar objetos"
// factory function ,Construtor function, Classes
// Factory
function criaPessoa(nome,sobrenome) {
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `nome completo :${this.nome} ${this.sobrenome}`;
        }
    }
}
const p1=criaPessoa('paulo', 'pereira');
console.log(p1.nomeCompleto());

// Construtor
// A palavra new cria um objeto vazio, vai pegar na palavra this e vai atribui ao objeto
// e faz returnar o this
function Pessoa(nome,sobreNome) {
    this.nome = nome;
    this.sobreNome = sobreNome;
    this.nomeCompleto2 = function(){
        console.log(`nome completo 2 : ${this.nome} ${this.sobreNome}`)
    };
}

const p2 = new Pessoa('luiz','otavio');
console.log(p2);
p2.nomeCompleto2();
// parar o objeto nao deixar alterar
Object.freeze(this);
