class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      // protege a propriedade
      writable: false, // nao deixa escrever
      enumerable: true, // nao aparecer
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ""), // remove tudo o que nao seja numero
    });
  }
  valida() {
    if (!this.cpfLimpo) return false; // caso nao exista o cpf limpo retorna falso
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    this.geraNovoCPF();
    return this.novoCPF === this.cpfLimpo;
  };
  isSequencia() {
    // repete o 1º em todo o comprimento do objeto
    return  this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo
  };
  geraNovoCPF(){
    const cpfSemDigitos = this.cpfLimpo.slice(0,-2);
    const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
    const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);

    this.novoCPF = cpfSemDigitos + digito1 + digito2;
  };
  static geraDigito(cpfSemDigitos){
    // como nao precisa nada da classe pode ser um metodo estatico
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;
    for (const stringNum of cpfSemDigitos) {
        total += reverso * Number(stringNum) // garante que é um numero
        reverso --;
    }
    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0';
    console.log(total);
  };
}
// 070.987.720-03
let validaCPF = new ValidaCPF('070.987.720-03');
if (validaCPF.valida()){
    console.log('cpf valido !');
} else {
    console.log();
}
