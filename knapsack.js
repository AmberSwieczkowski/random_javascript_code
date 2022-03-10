/* Given a set of items, each with a weight and a value, 
determine the number of each item to include in a collection 
so that the total weight is less than or equal to a given limit 
and the total value is as large as possible. */

// bag = ['a', 'c']  // Solution

items = [
    {id: 'a', w: 10, v: 3},
    {id: 'b', w: 6, v: 8},
    {id: 'c', w: 3, v: 3}
]

maxWeight = 8

let knapsack = (items, maxWeight) => {
    if (maxWeight < 0) throw new Error('Invalid Max Weight')
    if (items.length === 0) throw new Error('No Items To Pick Up')
    let highestValue;
}

knapsack(items, maxWeight)



// The follow is used to test big(O) time

// let start = 0
// let end = 0

// let stopwatch = (n) => {
//     let start = performance.now()
//     let total = 0
//     for (let i=1; i<=n; i++) {total += i}
//     let end = performance.now()
//     let time = end - start
//     return console.log(total, time)

// }
// stopwatch(3)
