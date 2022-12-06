// funcoes geradoras - Permite que entregue os valores de forma parcelada, 
//nao entrega tudo de uma vez vai entregando conforme a funcao for chamada
function* geradora1(){
    // coddigo  qualquer
    yield 'valor 1:';
    // coddigo  qualquer
    yield 'valor 2:';
    // coddigo  qualquer
    yield 'valor 3:';
    
}
const g1 = geradora1();
/*console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());*/
//for(let valor of g1) console.log(valor);
function* geradora2(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
/*console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);*/


//--------- funcao geradora que passa tarefas para outra funcao----------------------
function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    yield* geradora3(); // transferi a tarefa do g3 para continuar na g4
    yield 3;
    yield 4;
    yield 5;
}
const g4 = geradora4();
//------------nao precisa de ser numeros ou srtings podem ser qualquer coisa--------------
function* geradora5(){
    yield function(){
        console.log('vim de y1');
    }
    // linhas de codigo....
    yield function(){
        console.log('vim de y2');
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();