// funcoes para simular uma ordem aleatoria das funcoes
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}
//---------------------------
/**
 * Metodos Promise
 * Promisse.all 
 * Promise.race
 * Promise.resolve
 * Promise.reject
 */


/* const promises = [
    // 'Primiero Valor',
    esperaAi(222, rand(1, 5)),
    esperaAi('Promise 1', rand(1,5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
    // 'Outro Valor'
]; */
// Promise.all (Resolve todas)
/* console.log('Promisse All');
Promise.all(promises)
    .then(function (valor) {
        console.log(valor);
    }).catch(function (e) {
        console.log(e);
    });
console.log('--------------------------'); */

// Promise.race (A primeira que resolver entrega o valor ou a mensagem de erro)
// console.log('Promisse Race');
/* Promise.race(promises)
    .then(function (valor) {
        console.log(valor);
    })
    .catch(function (e) {
        console.log(e);
    }); */
// console.log('--------------------------');
// ------------------------------------------

// Promisse.resolve (entrega uma promessa resolvida)
/* function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
} */

/* baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e)); */
// -------------------------------------------

// Pomisse.reject (Entrega uma Promessa Rejeitada)
function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}
baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));