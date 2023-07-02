class Pessoa {
    // construtor 
    constructor (nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    // metodos
    falar (){
        console.log(`${this.nome} esta a falar`)
    }
    comer (){
        console.log(`${this.nome} esta a comer`);
    }
}
const p1 = new Pessoa('paulo','pereira');
console.log(p1.falar())