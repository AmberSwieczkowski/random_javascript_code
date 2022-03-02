
let sqrt = (x) => {
    try {
        if (x >= 0) {
            let sqrt = Math.sqrt(x);
            console.log(`The square root of ${x} is ${sqrt}.`);
        }
        if (x < 0) throw Math.abs(x);
    }
    catch(abs) {
        let sqrt = Math.sqrt(abs);
        console.log(`The square root of the absolute value of ${x} is ${sqrt}.`);
    }
} 

sqrt(-100)
