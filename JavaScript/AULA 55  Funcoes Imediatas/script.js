// Funções Imediatas envocadas automaticamente nao tocam no escopo global
// A função ou funções é/são cirada(s) executada(s) imeditamente
// sempre entrar em conflito com o que etsa no escopo global
(function(idade,peso,altura){ // reecbe os parametros
    let sobrenome = 'Pereira';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }
    function falaNome() {
        console.log(criaNome('Paulo'));
    }
    falaNome();
    console.log(idade,peso,altura);
})(30,80,1.80); // envia-mos os parametros aqu
let nome = 'asassa';