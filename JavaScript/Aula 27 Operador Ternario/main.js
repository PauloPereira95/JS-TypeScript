// Operador Ternario ? : // pode subestituir partes do codigo
// (condição) ? 'Valor para verdadeiro' : 'Valor para falso':

let pontuacaoUsuario = 1999;
/*
 if (pontuacaoUsuario >=1000){
    console.log('VIP');
 } else {
    console.log('normal');
 }
 ------------ OU -----------
 */
/*
let nivelUsuario = pontuacaoUsuario>=1000 ? 'Usuario VIP' : 'Normal';
//                /Condição/      (?) /Valor Da varivel/ SENAO (:) /Normal/
console.log(nivelUsuario);
*/
let corUsuario = null;
let corPadrao = corUsuario || 'Preto'; // Se a varivel(Cor Usuario) for null, é usada a cor 'Preto' uma especie de cor Default;
console.log(corPadrao); 