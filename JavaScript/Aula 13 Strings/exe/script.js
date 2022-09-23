let nome = prompt('Digite o seu nome');
console.log(nome);
//document.write('kikas bar'); -> escreve no documento
// tambem recebe texto html
//document.body.innerHTML += 'qualquer outra coisa <br>'; // acrescenta sem apagar o que esta anteriormente escritowindow.document.body.innerHTML += 'qualquer outra coisa'; // acrescenta sem apagar o que esta anteriormente escrito
document.body.innerHTML = (`O seu nome é: <strong>${nome}</strong> <br/>`);
document.body.innerHTML +=(`O Seu nome tem <strong>${nome.length}</strong> letras <br/>`);
document.body.innerHTML += (`A 2º letra do seu nome é: <strong>${nome[1]}</strong> <br/>`);
document.body.innerHTML += (`Qual o primeiro indice da letra do A seu nome? <strong>${nome.indexOf('a')}</strong> <br/>`);
document.body.innerHTML += (`Qual o ultimo indice da letra E do seu nome? <strong>${nome.lastIndexOf('e')}</strong> <br/>`);
document.body.innerHTML += (`AS ultimas 3 letras do nome são: <strong>${nome.slice(-3)}</strong> <br/>`);
document.body.innerHTML += (`As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br/>`);
document.body.innerHTML += (`O seu nome em letras maiusculas: <strong>${nome.toUpperCase()}</strong> <br/>`);
document.body.innerHTML += (`O seu nome em letras minusculas: <strong>${nome.toLowerCase()}</strong> <br/>`);