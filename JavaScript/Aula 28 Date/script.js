/*
let tresHoras = 60 * 60 * 3 *1000;
let umDia = 60 * 60 * 24 * 1000;
let data = new Date(0 + tresHoras + umDia); // é formada por milisemios de segundos
//console.log(data.toString());*/
// os meses começão do 0 (Janeiro)
//let data = new Date(1665175717749); // Ano || mes || dia || hora || minutos || segundos
//let data1 = new Date('2019-4-20 15:14:50');
/*
console.log(data.toString());
//console.log(data1.toString());
console.log('Dia', data.getDate()); //  dia
console.log('Mês', data.getMonth()); // Mês
console.log('Ano', data.getFullYear()); // ano
console.log('Horas', data.getHours()); // Horas
console.log('Min', data.getMinutes()); // Minutos
console.log('Seg', data.getSeconds()); // Segundos
console.log('Min', data.getMinutes()); // Minutos
console.log('Mili', data.getMilliseconds()); // Milisegundos
console.log('Dia da Semana', data.getDay()); // Nº do Dia da semana|| 0(DOMINGO) 6(Sabado
console.log(Date.now());
*/
function zeroEsq(num) {
    return num >= 10 ? num : `0${num}`
}

function formataData(data) {
    //console.log(data);
    let dia = zeroEsq(data.getDate());
    let mes = zeroEsq(data.getMonth() + 1); // +1 porque em js o mes começa em 0
    let ano = zeroEsq(data.getFullYear());
    let horas =zeroEsq(data.getHours());
    let min = zeroEsq(data.getMinutes());
    let sec = zeroEsq(data.getSeconds());
    let seg = zeroEsq(data.getMinutes());
    let mili = zeroEsq(data.getMilliseconds());
    let diaSemena = zeroEsq(data.getDay());

    return `${dia}/${mes}/${ano} ${horas}:${min}:${sec}`
}
let data = new Date();
let dataPort = formataData(data);
console.log(dataPort);