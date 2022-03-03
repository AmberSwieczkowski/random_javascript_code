class Fraction {
    constructor(numerator, denominator) {
        this.n = Math.abs(numerator);
        this.d = Math.abs(denominator);
        this.decimal = this.n / this.d
        this.negative = false

            if (this.d === 0) {
                throw new Error('Denominator cannot be zero!')  // This ends the function when there is an error, so the next if statement is never evaluated
            }
            this.simplify() // This doesn't happen if the denominator is 0 because it is an error


        if (numerator < 0 && denominator > 0 || numerator > 0 && denominator < 0) {
            this.negative = true
        }
    }

    printFraction() {
        console.log(`${this.n} / ${this.d}`)
    }

    getNumerator() {
        console.log(`The numerator is ${this.n}.`)
    }

    getDenominator() {
        console.log(`The denominator is ${this.d}.`)
    }

    simplify(n = this.n, d = this.d) {
        let nfactors = []
        let dfactors = []
        let commonFactors = []

        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                nfactors.push(i)
            }
        }
        for (let i = 1; i <= d; i++) {
            if (d % i === 0) {
                dfactors.push(i)
            }
        }
        let longer = nfactors.length > dfactors.length ? nfactors.length : dfactors.length
        for (let i = 0; i < longer; i++) {
            if (nfactors.includes(dfactors[i])) {
                commonFactors.push(dfactors[i])
            }
        }
        let gcf = commonFactors[commonFactors.length - 1]
        console.log(`gcf is ${gcf}`)
        let sTop = n / gcf
        let sBottom = d / gcf
        if (n === d) {
            console.log(`${n} / ${d} simplified is 1!`)
        } else if (d === 1) {
            console.log(`${n} / ${d} simplified is ${sTop}.`)
        } else if (n === sTop && d === sBottom) {
            console.log(`${n} / ${d} is fully simplified!`)
        } else {
            console.log(`${n} / ${d} simplified is ${sTop} / ${sBottom}.`)
        }
        return [sTop, sBottom]
    }

    mulitplyBy(n_multiply, d_multiply) {
        let mTop = this.n * n_multiply;
        let mBottom = this.d * d_multiply;
        this.simplify(mTop, mBottom);
        return [mTop, mBottom]
    }

    divideBy(n_divide, d_divide) {
        let dTop = this.n * d_divide;
        let dBottom = this.d * n_divide;
        this.simplify(dTop, dBottom);
        return [dTop, dBottom]

    }

    commonDenom(n, d) {
        let cdTop = n * this.d;
        let cdBottom = d * this.d;
        this.n = this.n * d;
        this.d = this.d * d;
        return [cdTop, cdBottom]
    }

    add(n2, d2) {
        let [aTop, aBottom] = this.commonDenom(n2, d2);
        aTop = aTop + this.n
        this.simplify(aTop, aBottom)
        return [aTop, aBottom]
    }

    subtract(n2, d2) {
        let [sTop, sBottom] = this.commonDenom(n2, d2);
        sTop = this.n - sTop
        this.simplify(sTop, sBottom)
        return [sTop, sBottom]
    }

    compare(n2, d2) {
        let [compareTop, compareBottom] = this.commonDenom(n2, d2)
        if (compareTop === this.n) {
            console.log(`The fractions are the equal!`)
        } else {
            let [compareTop, compareBottom] = this.simplify(n2, d2)
            let [n, d] = this.simplify()
            if (compareTop > this.n) {
                console.log(`${compareTop} / ${compareBottom} is larger than ${n} / ${d}!`)
            }
            if (compareTop < this.n) {
                console.log(`${n} / ${d} is larger than ${compareTop} / ${compareBottom}!`)
            }
        }
    }

    convertToDecimal() {
        let decimal = this.n / this.d;
        console.log(`${this.n} / ${this.d} is equal to ${decimal}.`)
        return decimal;
    }

    answer() {

    }

}

// let myFraction = new Fraction(8, 10)
// myFraction.printFraction()

let f1 = new Fraction(-1, 0)
// let f2 = new Fraction(3, 6)
// f1.mulitplyBy(3, 2)
console.log(f1)


/* TODO: 
1. Rewrite this class so that you can chain methods
(you'll have to RETURN 'THIS' at the end of each method)
2. Allow for only one input such as
fraction1.add(fraction2)
3. Put Simplify method into the constructor
4. Move console log out of the simplify method
*/


