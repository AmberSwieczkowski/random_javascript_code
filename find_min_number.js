// Write two functions to find the minimum number in a list. The first function should compare each number to every other number on the list. 𝑂(𝑛^2). The second function should be linear 𝑂(𝑛).

let list = [3, 2, 1, 4, 0] // Change these values

let findMinimum = (list) => {
    let min = list[0]
    for (num of list) {
        if (num < min) {
            min = num
        }
    }
    console.log(`The minimum from findMinimum is ${min}!`)
}

findMinimum(list) // O(n)

let findMin = (list) => {
    let min = list[0]
    for (let i = 0; i < list.length; i++) {
        for (let j = 0; j < list.length; j++) {
            if (list[j] <= min) {
                min = list[j]
            }
        }
    }
    console.log(`The minimum from findMin is ${min}!`)
}

findMin(list) // O(n^2)
