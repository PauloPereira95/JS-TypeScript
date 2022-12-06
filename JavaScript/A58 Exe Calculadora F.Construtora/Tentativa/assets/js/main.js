function Calculadora() {
    let display = document.querySelector('.display');
    let clear = document.querySelector('.btn-clear');
    this.display = display;
    this.clear = clear;

    this.incia = () => {
        this.clickBotoes();
        this.pressEnter();
    };
    this.pressEnter = () => {
        document.display.addEventListener('keypress', e => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    }
    this.clearDisplay = () => {
        this.display.value = '';
    };
    this.apagaUm = () => {
        this.display.value = this.display.value.slice(0, -1);
    };
    this.realizaConta = () => {
        let conta = this.display.value;
        try {
            conta = eval(conta);

            if (!conta && conta != 0) {
                alert('conta invalida! 1')
                return;
            }
            this.display.value = String(conta);
        } catch (e) {
            alert('conta invalida ! 2');
            return;

        }
    };
    this.clickBotoes = () => {
        document.addEventListener('click', e => {
            let el = e.target;
            if (this.display.value === '0') {
                this.clearDisplay();
            }
            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')) this.clearDisplay();

            //if (el.classList.contains('btn-clear')) this.clearDisplay(); // limpa o iunput


            if (el.classList.contains('btn-eq')) this.realizaConta();
            if (el.classList.contains('btn-del')) this.apagaUm();
        });
    };
    this.btnParaDisplay = (valor) => {

        this.display.value += valor;
    }


}

let calc = new Calculadora();
calc.incia();