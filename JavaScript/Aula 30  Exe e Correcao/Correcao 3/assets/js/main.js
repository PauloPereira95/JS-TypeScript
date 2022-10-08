let h1 = document.querySelector('.container h1');
let data = new Date();
h1.innerHTML = criaData(data);

function getDiaSemanaTexto(diaSemana) {
    const numSemana = ['Domingo','Segunda-Feira','Terça-Feira','Quarta-Feira','Quinta-Feira','Sexta-Feira','Sabado']
    return numSemana[diaSemana];
}
function getMesTexto(numMes) {
    const meses= ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
    return meses[numMes]
}
function criaData(data) {
    let diaSemana = data.getDay();
    let numeroMes = data.getMonth();
    let nomeDia = getDiaSemanaTexto(diaSemana);
    let nomeMes = getMesTexto(numeroMes);
    return (`${nomeDia}, ${zeroEsq(data.getDate())} de ${nomeMes} ` + 
            `de ${data.getFullYear()} ` +
            `${zeroEsq(data.getHours())}:${zeroEsq(data.getMinutes())}`
    );
}
function zeroEsq(num) {
    return num >= 10 ? num : `0${num}`
}
