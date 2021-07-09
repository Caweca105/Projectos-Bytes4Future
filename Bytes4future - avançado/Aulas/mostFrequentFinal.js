function computeMostFrequent(array) {
    let ordered = false;

    while(!ordered) {
        ordered = true;
        for(let i = 0; i < array.length - 1; i++) {
            if(array[i] > array[i + 1]) {
                let temp = array[i]
                array[i] = array[i + 1]
                array[i + 1] = temp
                ordered = false
            }
        }
    }


let highestFrequency = 1
let mostFrequent = array[0]
let frequency = highestFrequency
let current = mostFrequent

for (let i = 0; i < array.length; i++) {
    if (array[i - 1] !== array[i]) {
        if (frequency > highestFrequency) {
            highestFrequency = frequency
            mostFrequent = current
        }
        frequency = 0
        current = array[i]
    }
    frequency++
}

mostFrequent = frequency > highestFrequency ? current : mostFrequent;
highestFrequency = frequency > highestFrequency ? frequency : highestFrequency;

return {
    value: mostFrequent,
    frequency: highestFrequency
}
}