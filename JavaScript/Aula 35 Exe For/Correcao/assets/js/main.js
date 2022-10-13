let container = document.querySelector('.container');
const div = document.createElement('div');
const elementos = [
    {tag:'p', texto: 'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'footer', texto: 'Frase 3'},
    {tag:'section', texto: 'Frase 4'},
]
for (let i = 0; i < elementos.length; i++) {
    const {tag,texto} = elementos[i];
    let tagHtml = document.createElement(`${tag}`);
    //----Podemos adicionar o texto desta forma -------------
    let textoCriado = document.createTextNode(texto);
    //---------------OU DESTA -----------------------
    //tagHtml.innerText =texto; // neste caso é mais seguro , porque só  tem texto
    //--------------------------------------------------
    tagHtml.appendChild(textoCriado);
    div.appendChild(tagHtml);// insre no final do elemento html
}
container.appendChild(div);