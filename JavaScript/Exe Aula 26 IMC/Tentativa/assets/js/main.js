let form = document.querySelector('#form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    let inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    let resImc = document.querySelector('#div-resultado');
    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);
    let imc = calcImc(peso,altura);
    let nivelImc = getNivelImc(imc);

    //console.log(imc);
    let msg = `O seu imc é ${imc} ${nivelImc}`;

    resImc.style.cssText =
    'color: black;' +
    'background: rgb(18, 222, 236);' +
    'height: 40px;'+
    'width: 100%;'+
    'border-radius: 5px;'+
    'margin-bottom: 10px;'+
    'margin-top: 20px;'+
    'padding-left: 5px;'+
    'padding-top: auto;';

    resImc.innerHTML = msg;

    function getNivelImc(imc) {
        let nivelImc;
        if (imc < 18.5) {
            nivelImc = '(Abaixo do peso)';
        } else if (imc >= 18.5 && imc <= 24.9) {
            nivelImc = '(Peso Normal)';
        } else if (imc >= 25 && imc <= 29.9 ) {
            nivelImc = '(SobrePeso)';
        } else if (imc >= 30 && imc <= 34.9 ) {
            nivelImc = '(Obsidade Grau 1)';
        } else if (imc >= 35 && imc <= 39.9 ) {
            nivelImc = '(Obsidade Grau 2)';
        } else if (imc>=40) {
            nivelImc = '(Obsidade Grau 3)';
        }
        return nivelImc;
    }
    function calcImc(peso,altura) {
        let imc = peso / altura **2;
        return imc.toFixed(2);
    }
});