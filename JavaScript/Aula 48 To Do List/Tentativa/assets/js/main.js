let btnTarefa = document.querySelector('#adicBtn');
let inputTarefa = document.querySelector('.inputTarefa');
let ul = document.querySelector('.lista');
let tarefa;
document.addEventListener('click',function(e){
    const el = e.target;
    let apagarLi = el.closest('li');// seleciona o li mais proximo

    if(el.classList.contains('adicBtn')){
        tarefa = inputTarefa.value; // seleciona o valor do input
        adicTarefa(tarefa); // adiciona a tarefa
    }
    if (el.classList.contains('apagar')) {
        apagarLi.remove(); // elemina o li
    }
});


function adicTarefa(tarefa) {
        let liT = document.createElement('li'); 
        //liT.innerHTML = `<li class="classLI">${tarefa}</li><button class="apagar">Apagar</button>`;
        liT.innerHTML = tarefa + `<button class="apagar">Apagar</button>`;
        ul.appendChild(liT);
}
