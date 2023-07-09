class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }
    // Método de instancia
    aumentarVolume (){
        this.volume += 2;
    }
    diminuirVolume (){
        this.volume -= 2;
    }
    // metodo estatico
    // O método static nao tem acesso as 
    // propriedades da classes e os metodos que nao sejam satic
    static trocaPilha (){
        console.log('OK VOU TROCAR');
    }
    static Soma (x,y){
        return console.log(`O Resultado da soma é ${x +y}`);
    }
    
}
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
ControleRemoto.Soma(2,4);

console.log(controle1);