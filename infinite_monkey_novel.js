// Change the string in targetSentence to see how long it takes for the computer to generate it using randomized characters

let targetSentence = 'amberr' // Only change this string. Limit the length to 5 characters if you want results in under 8 minutes.
let targetLength = targetSentence.length
let str = []
let sentence = ''
let currentScore = 0
let highScore = 0
let bestMatch = ''
let attempts = 0
let lowerCaseChar = [
    'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p',
    'q', 'r', 's', 't',
    'u', 'v', 'w', 'x',
    'y', 'z', ' '
]
let lowerCase = lowerCaseChar.length - 1

let allChar = [
    'A', 'a', 'B', 'b', 'C', 'c',
    'D', 'd', 'E', 'e', 'F', 'f',
    'G', 'g', 'H', 'h', 'I', 'i',
    'J', 'j', 'K', 'k', 'L', 'l',
    'M', 'm', 'N', 'n', 'O', 'o',
    'P', 'p', 'Q', 'q', 'R', 'r',
    'S', 's', 'T', 't', 'U', 'u',
    'V', 'v', 'W', 'w', 'X', 'x',
    'Y', 'y', 'Z', 'z', '.', '?',
    '!', '"', ' ', '0', '1', '2',
    '3', '4', '5', '6', '7', '8',
    '9',
]
let all = allChar.length - 1

let randomLetters = () => {
    for (let i = 0; i < targetLength; i++) {
        let randomNum = Math.round(Math.random() * lowerCase)
        str.push(lowerCaseChar[randomNum])
    }
    return str.join('')
}

let findTargetSentence = () => {
    while (sentence !== targetSentence) {
        str = []
        attempts++
        sentence = randomLetters()
        keepScore(sentence)
    }
    console.log(sentence)
}

let keepScore = (sentence) => {
    currentScore = 0
    for (let i = 0; i < targetLength; i++) {
        if (sentence[i] === targetSentence[i]) {
            currentScore++
        }
    }
    if (currentScore > highScore) {
        highScore = currentScore
        bestMatch = sentence
        console.log(bestMatch, highScore, `Attempts = ${attempts}`)
    }
}

findTargetSentence()
