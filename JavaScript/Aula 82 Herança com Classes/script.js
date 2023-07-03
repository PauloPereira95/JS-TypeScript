class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;

    }
    ligar(){
        if (this.ligado) { //se estiver ligado
            console.log(` já Ligado : ${this.nome}`); 
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if (!this.ligado) { // se estiver diferente de ligado ou seja desligado
            console.log(`DEsligado : ${this.nome}`);
            return;
        }
        this.ligado = false;
    }

}
class Smartphone extends DispositivoEletronico {
    constructor (nome,cor,modelo){
        super(nome); // chama o construtor da classe pai e os atributos que quero dessa mesma classe
        this.cor = cor;
        this.modelo = modelo;
    }
}
s1 = new Smartphone('Samsung','preto','galaxy');
console.log(s1);