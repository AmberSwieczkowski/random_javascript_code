/* https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
    Write a JavaScript program that accept two integers and display the larger. */

num1 = parseInt(prompt('First number: ', '0'),10);
num2 = parseInt(prompt('Second number: ', '0'),10);

function larger_num(num1, num2) {
    var larger;
        if (num1 > num2) {
            larger = num1;
        } else {
            larger = num2;
        }
    return console.log(larger)
        
    }

    larger_num(num1,num2);