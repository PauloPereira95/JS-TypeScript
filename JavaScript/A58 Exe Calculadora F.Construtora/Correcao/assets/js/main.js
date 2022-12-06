function Calculadora(){
    this.display = document.querySelector('.display');
    this.incia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };
    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode !==13) return;
            this.realizaConta();
        });
    }
    this.capturaCliques = () =>{
        document.addEventListener('click', e => {
            let el = e.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear(el);
            if(el.classList.contains('btn-del')) this.del(el);
            if(el.classList.contains('btn-eq')) this.realizaConta(el);
        });
    };
    this.addNumDisplay = el => {
        this.display.value += el.innerText;// arrow function
        this.display.focus(); // mete o focu no display
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0,-1);
    this.realizaConta = () => {
        try {
            let conta = eval(this.display.value);
            if (!conta){
                alert('conta invalida 1')
                return;
            }
            this.display.value = conta;
        }catch {
            alert('conta invalida 2');
            return;
        }
    };

};
let calculadora = new Calculadora();
calculadora.incia();
