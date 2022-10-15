function random(min,max) {
    const r = Math.random() * (max-min) + min;
    return Math.floor(r);
}
/** ---------- WHILE-----------------
 *  const min = 1;
    const max = 50;
    let rand = random(min,max);
    while (rand !==10) { // enquanto for diferente de 10
        rand = random(min,max);
        console.log(rand);
    }
 -------------------------------------------*/

/** ------------DO WHILE -------------------
 */
 const min = 1;
 const max = 50;
 //let rand = 10;
do {
    rand = random(min,max);
    console.log(rand);
} while (rand != 10);