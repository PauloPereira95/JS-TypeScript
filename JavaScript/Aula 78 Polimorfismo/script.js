// Super Classe
function Conta (agencia, nConta,saldo){
    this.agencia = agencia;
    this.nConta = nConta;
    this.saldo = saldo;

}
Conta.prototype.levantar = function(valor){
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo} €`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function (){
    console.log(`A/C: ${this.agencia}/${this.nConta} ` + 
    `Saldo: ${this.saldo.toFixed(2)} €`
    );
};
//const conta = new Conta(11,22,10);
function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this, agencia,conta,saldo); // herda os atributos do metodo conta
    this.limite = limite;
};
// --- Subescreve o metodo levantar
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.levantar = function(valor){
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente: ${this.saldo} €`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
/*const CC = new ContaCorrente(11,22,0,100);
CC.depositar(10);
CC.levantar(111);
*/

function CP(agencia,conta,saldo){
    Conta.call(this, agencia,conta,saldo); // herda os atributos do metodo conta
};
// --- Subescreve o metodo levantar
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cc = new ContaCorrente(11,22,0,100);
cc.depositar(10);
cc.levantar(110);
cc.levantar(1);

console.log();

const cp = new CP(12,33,0);
cp.depositar(10);
cp.levantar(10);
cp.levantar(1);
