/*
Primitivos (Imotaveis)(Não os podemos modificar) - string,number,boolean,
undefined,null,bigin,symbol

Exemplo do que não podemos fazer:
let nome = 'Luiz';
nome[0] = 'R';          Trocar o que esta no index 0(L) pelo R
---------------------------------------------

let a = 'A';
let b = a;   // Cópia
console.log(a,b);

a= 'Outra coisa'; // ao alterar o valor de A o valor e B nao foi alterado
                    porqure foi feita apenas uma copia do valor de A para B.
                    Porque são dados primitivos
console.log(a,b);
*/
/*
------------Valores por Referencia------------------------------
Referencia (Mutavel) - array,objet,function
*/
/*
let a = [1,2,3]; // --ARRRAY-- 

-----------------------------------
let b = ;  // Em vez de copiar o valor de A para B. Nos dados por referencia
            // neste caso o B aponta para o mesmo Valor na memoria que o A.
            // ao alterar o valor de A, o B tambem muda automaticamente e vice-versa
------------------------------------

let b = [...a]; // srpead de A para B // Neste caso o valor de A, foi copiado/puxado para o valor B.
                // O valor de B deixa de ser dependente de A e torna-se independente
let c = b; 
console.log(a,b);
a.push(4);
console.log(a,b);
b.pop();
console.log(a,b);
a.push('Paulo');
console.log(a,c);
*/
/*------------------ OBJETOS---------------------
const a = {
    nome: 'Paulo',
    sobrenome: 'Pereira'
};
const b = {...a}; // Spread
                // Da mesa forma que os arrays, o valor do Objeto A foi
                // copiado para B
a.nome = 'Joao';
console.log(a,b);
*/