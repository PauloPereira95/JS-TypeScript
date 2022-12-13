const pessoa = {
    nome: 'Paulo',
    sobreNome: 'Pereira'
};
console.log(pessoa.nome, pessoa.sobreNome);
// ---------------------OU------------------
console.log(pessoa['nome'], pessoa['sobreNome']);
// --------------- OU ---------------------
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
pessoa1.falarNome = function () {
   return console.log(`${this.sobreNome} esta a dizer o seu sobrenome`);
};
pessoa1.getDataNasc = function(){
    let dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}
pessoa1.falarNome();
console.log(pessoa1.getDataNasc());
// for in
for (let key in pessoa1) {
    console.log(pessoa1[key]);
} 
// "Molde para cirar objetos"
// factory function ,Construtor function, Classes
// Factory
function criaPessoa(nome,sobrenome) {
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
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
}
const p2 = new Pessoa('luiz','otavio');
console.log(p2);
// parar o objeto nao deixar alterar
Object.freeze(this);
