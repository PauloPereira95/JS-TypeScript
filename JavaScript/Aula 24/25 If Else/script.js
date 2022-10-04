// A função é opcional, apens está por opção minha
// Pode ter varios elseif mas apenas pode ter um else

// --------------- Parte 1 ------------------------------

let hora = 163;
function Sudacao(hora) {
    if (hora >= 0 && hora <= 11) {
        //Entre 0 - 11
        console.log('Bom dia');   
    }else if (hora >= 12 && hora <= 17) {
        // Entre 12 - 17
        console.log('Boa Tarde');
        // Entre 18 - 23
    } else if(hora >= 18 && hora <= 23){
        console.log ('Boa Noite');
    } else {
        console.log('Digite uma hora entre 0 e 23');
;    }
}
//Sudacao(hora);
/* let tenhoGuita = true;
if(tenhoGuita){
    console.log('vou ao quicas');
}else {
    console.log('Afinal nao vou ');
}*/
/*
-------------- Parte 2 --------------------

*/

let numero = 10;

if (numero >= 0 && numero <= 5) {
    console.log('entre 0 e 5');
} else if (numero >= 6 && numero <=8) {
    
    console.log('entre 6 e 8');
} else if (numero >= 9 && numero <= 11) {
    console.log('entre 9 e 11');
}else {
    console.log ('nao esta entre 0 e 11');
}