// FACTORY FUNCTIONS
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome, sobrenome,
        //GETTER apenas obtem um valor
        get nomeCompelto() {
            return `${this.nome}  ${this.sobrenome}`;
        },
        fala(asssunto = 'sobre nada') {         // metodo - funcão dentro de um objeto
            return `${this.nome} esta a falar ${asssunto}`;
        },
        //setter define um valor
        set nomeCompelto(valor){
            valor = valor.split(' '); //divide a string pelos espaços e retorna um array
            this.nome = valor.shift(); // remove/seleciona o primeiro elemento do array
            this.sobrenome = valor.join(' '); // junta os nomes e separa por espaço
            console.log('Nome Completo ' + this.nome + ' ' + this.sobrenome);
            
        },
        altura: altura,
        peso: peso,
        //GETTER
        get imc() { // com o get a função imc finge ser um atributo 
            // obtemos o valor de imc com a notação de atributo
            // usamos quando apenas queremos obter o valor
            let indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        

    };
}
const p1 = criaPessoa('Paulo', 'Pereira', 1.8, 80);
p1.nomeCompelto = 'João Filipe Gonçalves';
//console.log('imc P1 ' + p1.imc)
//const p2 = criaPessoa('Paulo2', 'Pereira2', 1.6, 40);
//console.log('imc P2 ' + p2.imc)
console.log(p1.nome); // mostra o nome
console.log(p1.sobrenome); // mostra o ou os sobrenomes
console.log(p1.fala())
//console.log(p1.fala('a falar de js'));