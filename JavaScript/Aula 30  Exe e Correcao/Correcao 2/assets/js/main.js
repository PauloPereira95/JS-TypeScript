let h1 = document.querySelector('.container h1');
let data = new Date();
const opcoes = {
    dateStyle:'full'
};
const horaCurta = new Intl.DateTimeFormat("pt", {
    timeStyle: "short"
  });
h1.innerHTML = data.toLocaleDateString('pt-PT',opcoes) + ` ` + horaCurta.format(Date.now());