let inputTarefa = document.querySelector('.inputTarefa');
let btnTarefa = document.querySelector('.btnTarefa');
let tarefas = document.querySelector('.tarefa');

btnTarefa.addEventListener('click', function(e){ // captura o eveneto de click
    if (!inputTarefa.value) return;  // se estiver vazio nao vai fazer nada vai sair da função
    criarTarefa(inputTarefa.value);
});
inputTarefa.addEventListener('keypress',function(e){ // o evento de quando a tecla foi pressionada
    if(e.keyCode === 13){ // verefica se foi o enter a ser pressionado  
        if (!inputTarefa.value) return;  // se estiver vazio nao vai fazer nada vai sair da função
        criarTarefa(inputTarefa.value);
    }
}); 
// apartir do elemento que for clicado ele verifica se tem a classse apoagar
// se tiver ele apagar o pai do elemento que por consequencia tambem apaga o elemtno btn
document.addEventListener('click',function(e){
    const el = e.target;
    console.log(el);
    if (el.classList.contains('apagar')) {
        el.parentElement.remove(); // mostra quem é o pai do elemento, quem esta por cima na hierarquia
        salvarTarefas(); // "atualiza" o LocalStorage com o salvaer tarefas que faz com que atualize quando apagamos no btn

    }
})


//-----------------FUNÇÕES-----------------------
function criaBtnApagar(li) {
    li.innerText += ' ';
    const btnApagar = document.createElement('button'); // cria o botao
    btnApagar.innerText = 'Apagar'; // coloca o texto no botao
    btnApagar.setAttribute('class','apagar'); // define os atributos
    li.appendChild(btnApagar);
}
function limpaInput() {
    inputTarefa.value = ''; // limpa o input
    inputTarefa.focus(); // faz com que o cursor fique no input depois de criar a tarefa
}
function criarTarefa(textoInput) {
    const li = criarLi(); // cada li é da função designada , tem escopos diferentes
    li.innerText = textoInput; // cria 
    tarefas.appendChild(li);
    limpaInput();
    criaBtnApagar(li); // o li que esta como parametro é o foi criado anteriormente
    salvarTarefas();
}
function criarLi() {
    const li = document.createElement('li');
     return li;
 }
 function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = []; // cria um array
    for(let tarefa of liTarefas){ // percore o liTarefas para selecionar os textos dos li
        let tarefaTexto = tarefa.innerText; // guarda o texto neste variavel
        tarefaTexto = tarefaTexto.replace('Apagar' , '').trim(); // subestituir o pagar do botao por um espaço em branco || o TRIM tira esses espaços em branco
        //console.log(tarefaTexto);
        listaTarefas.push(tarefaTexto);
        //console.log(listaTarefas);
    }    
    //---- guarda os valores numa string JSON -------
    const tarefasJSON = JSON.stringify(listaTarefas); // string JSON , PERMITE GURDAR NUM SITIO
    localStorage.setItem('tarefas',tarefasJSON); // o 'tarefas' é o nome pelo o qual
    //chamar a string quando quizer voltar a manipular
}
function carregarTarefas() {
    const tarefas = localStorage.getItem('tarefas'); // carrega as tarefas guardaras no LocalStorage
    const listTarefas = JSON.parse(tarefas); // convert novamente para um array
    console.log(tarefas);
    for (let tarefa of listTarefas) { //carrega as tarefas
        criarTarefa(tarefa);
    }
}
carregarTarefas();
