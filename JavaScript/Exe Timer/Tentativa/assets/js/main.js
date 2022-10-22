let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let reset = document.querySelector('.reset');
let totalSec = 0;
let timer;
iniciar.addEventListener('click', function (event) {
    clearInterval(timer);

    relogio.classList.remove('pausa');
    relogio.classList.add('relogio');
    relogio.style.color = 'black'; // coloca o texto em branco
    inicTimer();
});
pausar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.style.color = 'rgb(235, 180, 31)'; // coloca o texto em brancoa
    relogio.classList.remove('relogio');
    relogio.classList.add('pausa');

});
reset.addEventListener('click', function () {
    relogio.classList.remove('pausa');
    relogio.classList.add('relogio');
    clearInterval(timer);
    relogio.style.color = 'red'; // coloca o texto em branco
    relogio.innerHTML = '00:00:00';
    totalSec = 0;

});
function inicTimer() {


    timer = setInterval(() => {


        totalSec++;
        let sec = parseInt(totalSec % 60);
        let min = Math.floor(totalSec / 60 % 60);
        let horas = Math.floor(totalSec / 3600);
        // adiciona os zeros caso o valor seja apenas de 1 digito
        /**
         * Para que isso aconteça tem que se tranformar as variaveis em string
         * para vereficar se o comprimento é de apenas de 1 caso seja um adiciona
         * o 0 caso seja de 2 nao adiciona o 0
         */
        if ((sec + "").length === 1) {
            sec = '0' + sec;
        }
        if ((min + "").length === 1) {
            min = '0' + min;
        }
        if ((horas + "").length === 1) {
            horas = '0' + horas;
        }

        relogio.innerHTML = `${horas}:${min}:${sec}`;


    }, 1000);

    //return timer

}

/*
function inicTimer() {
    let sec = 0;
    let min = 0;
    let horas = 0;

    timer = setInterval(() => {
        

        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            horas++;
        }
        if (horas === 24) {
            horas = 0;
        }
        
        if ((sec + "").length === 1) {
            sec = '0' + sec;
        }
        if ((min + "").length === 1) {
            min = '0' + min;
        }
        if ((horas + "").length === 1) {
            horas = '0' + horas;
        }

        relogio.innerHTML = `${horas}:${min}:${sec}`;


    }, 1000);

    //return timer

}*/
