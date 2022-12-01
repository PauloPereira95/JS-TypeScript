/* construora Regras:
    - Comecar com maiusculas (exemplo Pessoa)
    - Utilizar a Palavra new ( exemplo Pessoa (new))
 */
function Pessoa(nome,sobrenome){
    //------- apenas é possivel acerder de forma interna, 
    //-------dentro da função ao contrario do nome e sobrenome
    //------- São atribuos e metodos privados
    const ID = 123456;

    const metodoInterno = () => {

    };
    //---------------------------------
    // aributos ou metodos publicos (this)
    this.nome = nome;
    
    this.sobrenome = sobrenome;
    this.metodo = () =>{ // arrow function
        console.log(this.nome + ' : sou um metodo');
    };

}
let p1 = new Pessoa('Paulo' , 'Pereira');
p1.metodo();