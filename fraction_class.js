class Fraction {
    nfactors = []
    dfactors = []
    commonFactors = []
    constructor(numerator, denominator) {
        this.n = numerator;
        this.d = denominator;

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
        n = n / gcf
        d = d / gcf
        if (n === d) {
            console.log(`The answer is 1!`)
        } else if (d === 1) {
            console.log(`The answer is ${n}!`)
        } else {
            console.log(`The answer is ${n} / ${d}!`)
        }
    }

    mulitplyBy(n2, d2) {
        let mTop = this.n * n2;
        let mBottom = this.d * d2;
        this.simplify(mTop, mBottom);
    }

    divideBy(n2, d2) {
        let dTop = this.n * d2;
        let dBottom = this.d * n2;
        this.simplify(dTop, dBottom);
    }

}

let myFraction = new Fraction(4, 8)
myFraction.divideBy(3,4)




