let num = Number(prompt('Digite um numero')); // passa de string a number
let numTitulo = document.getElementById('numero-titulo');
let texto = document.getElementById('texto');

numTitulo.innerHTML = num;
texto.innerHTML = `<p>Raiz quadrada: ${num ** 0.5}</p>`;
texto.innerHTML += `<p>${num} é inteiro: ${Number.isInteger(num)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(num)}</p>`
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(num)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(num)}</p>`;
texto.innerHTML += `<p>Com 2 casas decimais: ${num.toFixed(2)}</p>`;
