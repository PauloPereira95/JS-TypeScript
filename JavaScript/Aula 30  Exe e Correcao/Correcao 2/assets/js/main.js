let h1 = document.querySelector('.container h1');
let data = new Date();
/*const opcoes = {
    dateStyle:'full'
};
const horaCurta = new Intl.DateTimeFormat("pt", {
    timeStyle: "short"
  });
h1.innerHTML = data.toLocaleDateString('pt-PT',opcoes);
h1.innerHTML += ` `+ horaCurta.format(Date.now());
*/

const opcoes = {
    dateStyle:'full'
};
const horaCurta = new Intl.DateTimeFormat("pt", {
    timeStyle: "short"
  });
h1.innerHTML = data.toLocaleDateString('pt-PT',opcoes) + ` ` + horaCurta.format(Date.now());


/*
const shortTime = new Intl.DateTimeFormat("en", {
    timeStyle: "short"
  });
  console.log(shortTime.format(Date.now()));
h1.innerHTML= data.toLocaleDateString('pt-BR',shortTime);
h1.innerHTML += shortTime.format(Date.now());*/