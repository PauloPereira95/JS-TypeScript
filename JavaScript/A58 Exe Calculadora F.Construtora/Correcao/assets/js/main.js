// o objeto da função tem acesso a atudo o que esta na função
function criaCalculadora() {

    return {
        //---ATRIBUTOS----------
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        //---- METODOS----------------
        incia() {
            //alert('ola');
            this.clickBotoes();
            this.pressEnter();
        },
        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                  this.realizaConta();
                }
              });    
        },
        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // apaga apenas um caracter, (tamanho da string, -1)
        },
        realizaConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta); // MUITO CUIDADO COM O EVAL
                // permite que tudo que seja escrito no input 
                //seja executado como se fosse codigo js
                if (!conta) {
                    alert('Conta Invalida!')
                    return;
                }
                this.display.value = String(conta);
            } catch (e) {
                alert('Conta Invalida!');
                return;
            }
        },
        clickBotoes() {
            // this -> Calculadora (objeto)
            document.addEventListener('click', e => { //arrow function AS ARROW FUNTION NAO MUDAM O COMPORTAMENTO DO THIS, vai ser sempre quem criou o objeto
                // Ao utilizar a arrow function no addEventListener
                // o this será sempre o document e fora da função sera a calculadora
                let el = e.target; // o que esta a ser clicado
                if (el.classList.contains('btn-num')) { // se o que for clicado contiver a classe btn-num 
                    // this -> document
                    this.btnParaDisplay(el.innerText);

                }
                if (el.classList.contains('btn-clear')) this.clearDisplay(); // limpa o iunput
                if (el.classList.contains('btn-del')) this.apagaUm(); // limpa o iunput
                if (el.classList.contains('btn-eq')) this.realizaConta();


            }); // altera o comportamento do this. em vez de usar o this da função usa o meu this(calculadora)
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },



    };
}
let calculadora = criaCalculadora();
calculadora.incia();