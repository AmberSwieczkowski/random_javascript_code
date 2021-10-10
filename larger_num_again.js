/* https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
    Write a JavaScript program that accept two integers and display the larger. */

num1 = window.Number(prompt('First number: ', '0'),10);
num2 = window.Number(prompt('Second number: ', '0'),10);



function larger_num(num1 = 0, num2 = 0) {
    var larger;
        if (num1 > num2) {
            larger = num1;
        } else {
            larger = num2;
        }
    return alert(`${larger} is the largest number.`)
        
    }

    larger_num(num1,num2);
