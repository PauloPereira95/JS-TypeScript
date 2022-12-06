function recursiva (max){ // funcoes recursiva
    // executa o codigo e chama-se de volta
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(-10);