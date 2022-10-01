// A função é opcional, apens está por opção minha
// Pode ter varios elseif mas apenas pode ter um else


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
let tenhoGuita = true;
if(tenhoGuita){
    console.log('vou ao quicas');
}else {
    console.log('Afinal nao vou ');
}