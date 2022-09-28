function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.divResultado');
    let arrPessoas = []; // cria-se um array vazio porque vai ser preenchido pelo envio do form
    /*form.onsubmit = function (evento){ 
        evento.preventDefault(); // Previne o que acontece por padrão, nao deixa atualizar
        alert(1);
        console.log('Foi enviado');
    };
    --------------- ou ----------*/
    function recebeEventoForm(evento) {
        evento.preventDefault(); // Previne o que acontece por padrão, nao deixa atualizar
        
        let nome = form.querySelector('.nome');
        let sobrenome = form.querySelector('.sobreNome');
        let peso = form.querySelector('.peso');
        let altura = form.querySelector('.altura');

        /*--------------------------------------
        let objPessoa = {
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value
            
        }
        arrPessoas.push(objPessoa);
        console.log(arrPessoas);
        ---------- OU ----------------
        */
       // Em vez de criar o objeto e depois adicionar ao array
       // desta forma faz-se tudo de uma vez
        arrPessoas.push({
            nome : nome.value,
            sobrenome : sobrenome.value,
            peso : peso.value,
            altura : altura.value
        })
        console.log(arrPessoas);
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value} </p>`;
        nome.value = '';
        sobrenome.value = '';
        peso.value = '';
        altura.value = '';
    }
    form.addEventListener('submit', recebeEventoForm); // adciona um escutador de eventos no form
    //----------------------------------------------

}
meuEscopo();
