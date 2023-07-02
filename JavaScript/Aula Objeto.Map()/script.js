const pessoas = [
    {id:3,nome:'Luiz'},
    {id:2,nome:'Maria'},
    {id:1,nome:'Helena'},
];
// const novasPessoas = {};
// for (const pessoa of pessoas){
//     const {id} = pessoa; // id comoi identificador
//     novasPessoas[id] = {...pessoa};
// }
const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa; // id comoi identificador
    novasPessoas.set(id,{...pessoa});
}
// for(const [identificador,{id,nome} ] of novasPessoas){
//     console.log(identificador,id,nome)
// }
novasPessoas.delete(2);
console.log(novasPessoas); // obtem informção do id 2
