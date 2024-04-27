function findLargestElement(arr) {
    // if (arr.length ===0) {
    //     return undefined
    // }
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest
}

const arr= [10,2,56,3,20,5]

console.log(findLargestElement(arr));