let relogio = document.querySelector('.relogio');
function timerFunc(params) {
    let sec = 0;
    let timer;
    document.addEventListener('click', function (e) { // capturar evento click
        //console.log(e.target); // diz o que etsa a ser clicado
        const el = e.target; // el = elementos
        if (el.classList.contains('reset')) { // se exite a classe reset
            relogio.classList.remove('pausa');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            sec = 0;
        }
        if (el.classList.contains('iniciar')) { // se exite a classe reset
            relogio.classList.remove('pausa');
            clearInterval(timer);
            startTimer();
        }
        if (el.classList.contains('pausar')) { // se exite a classe reset
            relogio.classList.add('pausa');
            clearInterval(timer);
        }
    })

    function getTimeFromSec(sec) { // formata a data
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
}
timerFunc();