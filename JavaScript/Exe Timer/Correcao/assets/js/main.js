
let relogio = document.querySelector('.relogio');
let iniciar = document.querySelector('.iniciar');
let pausar = document.querySelector('.pausar');
let reset = document.querySelector('.reset');
let sec = 0;
let timer;
iniciar.addEventListener('click', function (event) {
    relogio.classList.remove('pausa');
    clearInterval(timer);
    startTimer();
});
pausar.addEventListener('click', function (event) {
    relogio.classList.add('pausa');

    clearInterval(timer);
});
reset.addEventListener('click', function () {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    sec = 0;
});

function getTimeFromSec(sec) {
    let data = new Date(sec * 1000); // converte segundos a milesimos de segundo
    return data.toLocaleTimeString('pt-PT', { // formata  as horas minutos e segundos de forma automatica
        timeZone: 'UTC'
    });
}

function startTimer() {
    timer = setInterval(() => {
        sec++;
        relogio.innerHTML = getTimeFromSec(sec);
    }, 1000);
}