function rand(min = 1000, max = 3000) {
    let num = Math.random() * (max - min) + min;
    return Math.floor(num);
}
//console.log(rand());

function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback();

    }, rand());
}

function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback();
    }, rand());
}
/**
 * caso contrario o console iria ser executado primeiro e as restantes 
 * funções iriam
 *  ser executadas de forma alietoria visto que elas(f1,f2,f3) tem um timer
 */
/*
f1(function(){ // callbach "hell"; obriga o js a executar as funções pela ordem que eu defini
    f2( function(){
        f3(function(){
            console.log('ola mundo');
        });
    });
});
*/
//console.log('ola mundo');
// --------------forma mais otimizada--------------------------------------------
f1(f1Callback);
function f1Callback() {
    f2(f2CallBack);
}
function f2CallBack(){
    f3(f3CallBack);
}
function f3CallBack(){
    console.log('ola mundo');
}