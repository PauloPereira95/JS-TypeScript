function ValidaCPF(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable:true,
        get: function(){
            return cpfEnviado.replace(/\D+/g,'');
        }
    });
}
ValidaCPF.prototype.valida = function (){
    // o this mostra que é p cpf Limpo do objeto acima
    if(typeof this.cpfLimpo === 'undefined') return false; 
    if(this.cpfLimpo.length != 11)return false;    
    if(this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    return true;
}
ValidaCPF.prototype.criaDigito = function (cpfParcial){
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length +1; // +1 porque precisamos de 10 e o array só tem 9 casas
    const total = cpfArray.reduce((ac,valor) =>  {
        console.log(regressivo,valor,regressivo* valor);
        ac += (regressivo * Number(valor));
        regressivo--;
        return ac;
    },0); // garante que começa do 0
    const digito = 11 - (total % 11);
    return digito > 9 ?  '0' : String(digito);

}
ValidaCPF.prototype.isSequencia = function(){
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
};

const cpf = new ValidaCPF('705.484.450-52');
if(cpf.valida()){
    console.log('cpf Valido');
} else {
    console.log('cpf Invalido');
}
console.log(cpf.valida());//cpf.valida();