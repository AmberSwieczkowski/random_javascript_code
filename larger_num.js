/* https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
    Write a JavaScript program that accept two integers and display the larger. */

function larger_num(num1, num2) {
    var larger;
        if (num1 > num2) {
            larger = num1;
        } else {
            larger = num2;
        }
    return console.log(larger)
        
    }

    larger_num(1,2);
    larger_num(3,1);
    larger_num(4,4);