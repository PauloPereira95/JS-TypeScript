var middleNode = function(head) {
    let contador = 0;
    let pos = head;
    /*for (let i = 0; i < head.length; i++) {
        tam = i;
    }*/
    while (pos != null) {
        contador ++;
        pos = pos.next;
    }
    let meio = Math.round(contador / 2)-1;
    let contador2 = 1;
    let temp = head;
    /*for (let index = pos; index < head.length; index++) {
        res.push(head[index]);
        
    }*/
    while (contador2 != meio) {
        temp = temp.next;
        contador2++
    }
    return temp;
}
console.log(middleNode([1,2,3,4,5,6]));