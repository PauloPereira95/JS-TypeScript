function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-PT',{
    });
}
//setInterval(mostrarHora()); // vai configurar um intervalo de tempo para que alguma funão seja executada~

/**
 * 
function funcaoInterval() {
    console.log(mostrarHora());
}

setInterval(funcaoInterval, 1000);

----------- OU -------------------
 */
// vai configurar um intervalo de tempo para que alguma funão seja executada, neste caso 1 segundo
const timer = setInterval(function(){
    console.log(mostrarHora())
},1000);
// esta função para o timer, neste caso ao fim de 5 segundos
setTimeout(function(){
    clearInterval(timer);
}, 3000);

setTimeout(function(){
    console.log('acabou');
},5000)