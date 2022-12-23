// É a base para trabalhar com objetos
// Função construtora -> molde (classe)
/**
    O JavaScript é baseado em protótipos para passar propriedades e métodos
    de um objeto pata o outro.

    Definição de Prototipo
    É o termo usado para se referir ao que foi criado pela primeira vez,
    servindo de modelo ou molde para futuras produções.

    Todos os objetos tem uma referencia interna para um prototipo(_proto_)
    que vem da propriedade prototype da função construtora que foi 
    usada para cria-lo.
    Quando tentamos aceder a um menbro de um objeto, primeiro o motor do JS
    vai tentar encontrar este menbro no proprio objeto e depois a cadeia de 
    prototipos é usda até ao topo (null) ate encontrar (ou não) tal membro.
 */
// função construtora
function Pessoa (nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => 'original' + this.nome + '' + this.sobrenome;
}
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + '' + this.sobrenome;
};
// instancia Gerar Novos Objetos
const pessoa1 = new Pessoa('Paulo', 'P.');
const data = new Date(); // <--- Date = Função construtora
console.dir(pessoa1);
//console.dir(data);
