function arrayFromBigInt(arr) {
    let array = []
    let string = arr.toString
    
    for (let i = 0; i < string.length; i++) {
        array.push(parseInt(string[i]))
    }
    return array
}