/* Write a program that prints the numbers from 1 to 100 
    and for multiples of ‘3’ print “Fizz” instead of the number 
    and for the multiples of ‘5’ print “Buzz”.  */


    for (let i = 1; i < 101; i++) {
        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if ( i % 5 == 0) {
            console.log("Buzz");
        } else if ( i % 3 == 0) {
            console.log("Fizz");
        } else console.log(i);
    
    }