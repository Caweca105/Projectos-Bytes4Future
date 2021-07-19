function stringSuperReduzida(str) {
    // Escreve aqui o teu código
    let noRepeat = false;
    let array = Array.from(str);

    while(noRepeat === false) {
        noRepeat = true;
        for (let i = 0; i < array.length; i++) {
            if (array[i] === array[i + 1]) {
                array[i] = ""
                array[i + 1] = ""
                noRepeat = false
            }
        }
        array = array.filter(e => e !== "")
    }
    if (array.length === 0) {
        return "String Vazia"
    } else {
        return array.join("")
    }
}