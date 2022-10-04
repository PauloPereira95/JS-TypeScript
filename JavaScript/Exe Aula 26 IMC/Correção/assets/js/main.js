// Capturar evento de submit do formulario e parar
let form = document.querySelector('#form');

form.addEventListener('submit', function (e) { // parar o refresh, adiciona um escutador
    // tanto pode ser e como event ou evento
    e.preventDefault();
    //console.log('Parou');
    /*Recolhe do elemento form os dados do input peso e altura */
    let inputPeso = e.target.querySelector('#peso');
    let inputAtura = e.target.querySelector('#altura');
    //-------------------------------------------------------------
    //------- Seleciona o valor do input Peso Altura e Converte para NUMBER--------------
    let peso = Number(inputPeso.value); 
    let altura = Number(inputAtura.value);
    console.log(peso, altura);
    //------------------------------------------------------------
    //------------------Verifica se os dados dos input são Numbers
    if (!peso) { // se o peso for falso, ou seja for avalidado como falso, nao sendo um numero
        setResultado('Peso Invalido', false); // o false é para determinar o estilo  e conteudo da mensagem
        return; // O return é da função de cima de parar o Refresh
    }
    if (!altura) {
        setResultado('Altura Invalida', false);
        return; // O return é da função de cima de parar o Refresh
    }
    let imc = getImc(peso, altura);
    let nivelImc= getNivelImc(imc);
    let msg = `O seu imc é ${imc} (${nivelImc}).`;
    setResultado(msg,true);

    //console.log(imc,nivelImc);
    //console.log('Cheguei aqui...');
    ;
});
function getNivelImc(imc) {
    // array de valores, de strings
    let nivel = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade Grau 1','Obesidade Grau 2','Obesidade Grau 3'];
    /*Neste caso nao precisa de else if porque como esta numa function
    o return faz com que saia da função*/
    // Como o IF tem apenas uma linha pode ficar desta forma
    if(imc >= 39.9) return nivel[5];
    if(imc >= 34.9) return nivel[4];
    if(imc >= 29.9) return nivel[3];
    if(imc >= 24.9) return nivel[2];
    if(imc >= 18.5) return nivel[1];
    if(imc < 18.5) return nivel[0];
}

function criarP() { // Função para Criar o P
    const p = document.createElement('p'); // Cria um P
    return p;
}

function setResultado(msg, isValid /*Se for valido*/) { // Função para mostrar o Resultado
    let resultado = document.querySelector('#divResultado');
    //resultado.innerHTML = `<p> ${msg}</p>`;

    resultado.innerHTML = ''; // Limpa o Html antes de adiconar a mensagem
    const p = criarP();
    if (isValid) { // Adiciona uma classe css ao p
        p.classList.add('paragrafo-resultado')
    } else{
        p.classList.add('error')
    }

    p.innerHTML = msg; // Adicona a mensagem no p
    resultado.appendChild(p); // adciona um elemnto filho na divResultado, neste caso o p

}
function getImc(peso, altura) {
    let imc = peso / altura **2;
    return imc.toFixed(2); // coloca em 2 casas decimais
}