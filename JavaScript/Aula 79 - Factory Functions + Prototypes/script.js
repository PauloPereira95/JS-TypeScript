const falar = {
    falar() {
        console.log(`${this.nome} esta a falar`)
    },
};
const comer = {
    comer() {
        console.log(`${this.nome} esta a falar`)
    },
};
const beber = {
    beber() {
        console.log(`${this.nome} esta a beber`)
    }
};
const pessoaProto = {...falar,...comer,...beber} // copia com spread operator (...) os metodos para oeste objeto;
//------ ou com Object.Assign -----------------------
const pessoaPrototyope = Object.assign({},falar,comer,beber);
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototyope, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Paulo', 'Pereira');
console.log(p1);