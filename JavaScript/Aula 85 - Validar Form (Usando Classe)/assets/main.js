class ValidaFormulario {
  constructor() {
    // seleciona o form
    this.form = document.querySelector(".formulario");
    this.events();
  }
  events() {
    // com arrow function podemos utiliar o this
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.isValid();
  }
  isValid() {
    let valid = true;
    for(let errorText of this.form.querySelectorAll('.error-text')){
        errorText.remove();
    }
    for (let field of this.form.querySelectorAll(".validar")) {
      const label = field.previousElementSibling.innerHTML;
      // verifica se o campo tem algum valor
      if (!field.value) {
        this.createError(field, ` ${label} não pode estar em branco.`);
        valid = false;
      }
      if(field.classList.contains('cpf')){
        if (!this.validaCPF(field)) valid = false; 
      }
      if(field.classList.contains('usuario'))
      {
        if(!this.validaUsuario(field)) valid = false;
      }
    }
  }
  validaCPF (field){
    const cpf = new ValidaCPF(field.value);
    if (!cpf.valida()){
        this.createError(field,'CPF INVÁLIDO');
    }
    return true;
  }
  createError(field, msg) {
    const div = document.createElement("div");
    div.innerHTML = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}
const valida = new ValidaFormulario();
