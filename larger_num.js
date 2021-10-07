/* https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
    Write a JavaScript program that accept two integers and display the larger. */

function larger_num(num1, num2) {
        if (num1 > num2) {
            console.log(num1);
        } else if (num2 > num1) {
            console.log(num2);
        } else {
            console.log(`Both numbers are ${num1}.`)
        }
        
    }

    console.log(larger_num(1,3));
    console.log(larger_num(3,1));
    console.log(larger_num(1,1));