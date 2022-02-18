// Change the string in targetSentence to see how long it takes for the computer to generate it using randomized characters

let targetSentence = 'test' // Only change this string
let targetLength = targetSentence.length
let str = []
let sentence = ''
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
    '!', '"', ' '
]
let char = allChar.length - 1

let randomLetters = () => {
    for (let i = 0; i < targetLength; i++) {
        let randomNum = Math.round(Math.random() * char)
        str.push(allChar[randomNum])
    }
    return str.join('')
}

let findTargetSentence = () => {
    while (sentence !== targetSentence) {
        str = []
        sentence = randomLetters()
    }
    return console.log(sentence)
}

findTargetSentence()
