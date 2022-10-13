const pessoa ={
    nome: 'Paulo',
    sobrenome:'Pereira',
    idade: 30, endereco : {
        rua: 'Rua de Cavaleiros',
        numero: 259
    }
}
//Atribuição via desastruturação
/*
const { nome="",sobrenome} = pessoa; //Neste caso colocamos um valor padrão no nome caso ele mão exista ou esteja vazio
console.log(nome,sobrenome);
*/

/*
//Atribuição via desastruturação
const { nome:teste="",sobrenome} = pessoa; // Neste caso alteramos o nome da chave de nome para teste
console.log(teste,sobrenome);
*/
/*
const {endereco: {rua: r = 12345,numero}} = pessoa; // atribuição de um objeto dentro de outro obj
console.log(r,numero);
*/
//usar o ...rest
const {nome,...resto} = pessoa; // atribuição de um objeto dentro de outro obj
console.log(nome,resto);

