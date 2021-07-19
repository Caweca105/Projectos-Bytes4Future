function combineArrays(arr1, arr2) {
    let arr11 = arr1.length
    let arr22 = arr2.length
    let arr = []

    for (let i = 0; i < Math.max(arr11, arr22); i++) {
        if(arr1[i]) {
            arr.push(arr1[i])
        }
        if(arr2[i]) {
            arr.push(arr2[i])
        }
    }
    return arr
}