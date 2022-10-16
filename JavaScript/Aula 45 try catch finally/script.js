try {
     // é executada quando nao ha erros
} catch (e){
    // é executada quando ha erros
} finally {
    // é sempre executado
}

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
       throw new TypeError('Esperava uma data')
    }
    if (!data){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-PT',{
        // coloca horas minutos e segundos com 2 digitos
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}
try {
        const data = new Date('01-01-1970 12:58:12');
        const hora = retornaHora(data);
        console.log(hora);
} catch (error) {
    console.log('Não é uma data');
} finally {
    console.log('Tenha um bom dia!');
}
