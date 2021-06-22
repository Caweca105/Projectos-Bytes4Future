function computeMostFrequent(numbers) {
    const contadores = new Map();
    for (const elem of numbers) {
        if (!contadores.has(elem)) {
            contadores.set(elem, 0)
        }
    contadores.set(elem, contadores.get(elem) + 1);
    }

    let menosRepetido = numbers[0]
    let contagemMenosRepetido = contadores.get(menosRepetido)
    for (const par of contadores.entries()) {
        const numero = par[0]
        const contagem = par[1]

        if (contagem < contagemMenosRepetido || (contagem === contagemMenosRepetido && numero > menosRepetido)) {
            menosRepetido = numero;
            contagemMenosRepetido = contagem;
        }
    }
    return menosRepetido
}