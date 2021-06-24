function computeMostFrequent(numbers) {
    let map = new Map();

    for(let i = 0; i < numbers.length; i++) {
        if (!map.has(numbers[i])) {
            map.set(numbers[i], 1)
        }
        else if (map.has(numbers[i])) {
            map.set(numbers[i], map.get(numbers[i]) + 1)
        }
    }

    let chaves = Array.from(map.keys())
    let valor = Math.max(...map.values())
    let maisFrequentes = []

    for (let i = 0; i < chaves.length; i++) {
        if (map.get(chaves[i]) === valor) {
            maisFrequentes.push(chaves[i])
        }
    }
    return {value: Math.min(...maisFrequentes), frequency: valor}
}