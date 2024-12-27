// funcoes para simular uma ordem aleatoria das funcoes
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => { // promessa
        
        
        if (typeof msg !== ' string') reject(new Error('BAD VALUE'));
        // OU
        // if (typeof msg !== ' string') reject('BAD VALUE');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });

}
//---------------------------
/* 
    Sempre que executar o resolve o then e executado se o reject for executado o catch e executado
    
*/
esperaAi('frase 1 ', rand(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi('frase 2', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        // return esperaAi('frase 3', rand(1, 3));
        return esperaAi(222, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(e => {
        console.log('Erro: ' , e);
    });
/* esperaAi('frase 2 ', rand(1, 3));
esperaAi('frase 3 ', rand(1, 3)); */