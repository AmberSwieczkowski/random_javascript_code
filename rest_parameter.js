function max(first=-Infinity, ...rest) {
    let maxValue = first; 
    /* Start by assuming the first arg is largest, 
    then loop through the rest of the args
    looking for a larger value */
    for(let n of rest) {
        if (n > maxValue) {
            maxValue = n;
            console.log(maxValue);
        }
    }
    // Return the largest value
    return maxValue;
}
console.log(max(1,10,100,2,3,1000,4,5,6)) // => 1000