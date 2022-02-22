class Fraction {
    nfactors = []
    dfactors = []
    commonFactors = []
    constructor(numerator, denominator) {
        this.n = numerator;
        this.d = denominator;

        if (this.d === 0) {
            console.log(`Fractions cannot have 0 in their denominator.`)
            return undefined
        }
    }

    print() {
        console.log(this.n, this.d)
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
        let sTop = n / gcf
        let sBottom = d / gcf
        if (n === d) {
            console.log(`${n} / ${d} simplified is 1!`)
        } else if (d === 1) {
            console.log(`${n} / ${d} simplified is ${sTop}.`)
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

}

let myFraction = new Fraction(8, 10)
myFraction.compare(15, 20)




