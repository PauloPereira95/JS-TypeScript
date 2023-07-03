const _velocidade = Symbol();
class Carro {
    constructor (nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }
    set velocidade (valor){ // configura
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;

    }
    get velocidade (){ // obtem / acessa
        return this[_velocidade];
    }
    acelerar (){
        if (this[_velocidade] >= 100)return;
        this[_velocidade]++;
    }
    freio (){
        if (this[_velocidade] <= 0)return;
        this[_velocidade]--;
    }
    
}
    // const c1 = new Carro('Fusca');
    // // for (let i = 0; i < 200; i++) {
    // //     c1.acelerar();
    // // }
    // c1.velocidade = 65;
    // console.log(c1.velocidade);
class Pessoas {
    constructor(nome,sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get nomeCompleto (){
        return this.nome + ' ' + this.sobrenome;
    }
    set nomeCompleto (valor){
        valor = valor.split(' ');
        this.nome = valor.shift(' ');
        this.sobrenome = valor.join(' ');
    }
}
const p1 = new Pessoas('paulo', 'Miranda' );
p1.nomeCompleto = 'Paulo Pereira jorge';
console.log(p1.nome);
console.log(p1.sobrenome);