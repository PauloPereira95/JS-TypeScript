const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p'); //Seleciona varios elementos, neste caso varios p

const estilosBody= getComputedStyle(document.body); //esta função seleciona de um elemento html todos os seus estilos css
const backColorBody = estilosBody.backgroundColor;
console.log(backColorBody);
//rgb(17, 86, 102)
for(let p of ps){
    p.style.cssText=
    `background-color: ${backColorBody};` + 
    'color: #fff'
}/*
el.style.cssText =
    'color: blue;' +
    'background-color: yellow;' +
    'border: 1px solid magenta';
    */