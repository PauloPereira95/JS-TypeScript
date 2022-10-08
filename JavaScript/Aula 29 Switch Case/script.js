
//diaSemana = 7;
/*if (diaSemana===0) {
    diaSemanaTexto = 'Domingo';
} else if (diaSemana===1) {
    diaSemanaTexto = 'Segunda';
} else if (diaSemana===2) {
    diaSemanaTexto = 'Terça';
}else if (diaSemana===3) {
    diaSemanaTexto = 'Quarta';
}else if (diaSemana===4) {
    diaSemanaTexto = 'Quinta';
}else if (diaSemana===5) {
    diaSemanaTexto = 'Sexta';
}else if (diaSemana===6) {
    diaSemanaTexto = 'Sabado';
} else {
    diaSemana = 'Dia Inválido';
}*/
// Neste tipo de situações em que comparar varias valores na mesma variavel
function getDiaSemana(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto // break;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto // break;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto // break;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto // break;
        case 4: 
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto // break;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto // break;
        case 6:
            diaSemanaTexto = 'Sabado';
            return diaSemanaTexto // break;
        default: // valor default, caso nenhuma das comprações de verdadeiro
            diaSemanaTexto = '';
            return diaSemanaTexto

    }
}
let data = new Date('1987-04-20 00:00:00');
let diaSemana = data.getDay();
let diaSemanaTexto = getDiaSemana(diaSemana);
console.log('Nr. '+ diaSemana + ' || Dia ' + diaSemanaTexto);