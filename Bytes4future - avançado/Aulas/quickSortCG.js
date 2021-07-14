function quickSort(arr) {
    return quickSortAlg(arr, 0, arr.length - 1)
}

function quickSortAlg(arr, first, last) {
    if (first < last) {
        const pivot = partition(arr, first, last)
        quickSortAlg(arr, first, pivot - 1)
        quickSortAlg(arr, pivot + 1, last)
    }
    return arr
}

function partition(arr, first, last) {
    const pivotIndex = Math.floor(Math.random() * (last - first)) + first

    const tempPivot = arr[last]
    arr[last] = arr[pivotIndex]
    arr[pivotIndex] = tempPivot

    const x = arr[last]
    let i = first

    for (let j = first; j < last; j++) {
        if (arr[j] < x) {
            const temp = arr[j]
            arr[j] = arr[i]
            arr[i] = temp
            i++
        }
    }

    const tempLast = arr[last]
    arr[last] = arr[i]
    arr[i] = tempLast

    return i
}