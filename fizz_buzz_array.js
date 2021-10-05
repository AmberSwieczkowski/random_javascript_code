/* Write a program that prints the numbers from 1 to 100 
    and for multiples of ‘3’ print “Fizz” instead of the number 
    and for the multiples of ‘5’ print “Buzz”.  */

    var arr = []
    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            arr.push("FizzBuzz");
        } else if ( i % 5 == 0) {
            arr.push("Buzz");
        } else if ( i % 3 == 0) {
            arr.push("Fizz");
        } else arr.push(i);
    
    } return console.log(arr);