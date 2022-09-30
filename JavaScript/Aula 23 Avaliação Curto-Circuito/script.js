/*
&& -> F && V -> False apartir do momento que encontr a um valor
falso ele deixe de verificar o resto das condições
|| ->
*/


/*
Valores Falsy(Valores avaliados como Falsos)
0
'' " " ``
null / undefined
NaN
*/
/*
function falaOi() {
    return 'oi';
}
let vaiExecutar = 'asd'; // O JS avalia como verdadeiro porque nao
                        //    é uma string vazia

console.log(vaiExecutar && falaOi());
*/
/*
let corUsuario = 'vermelho';
let conPadrao = corUsuario || 'preto';
console.log(conPadrao);
*/
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e );


