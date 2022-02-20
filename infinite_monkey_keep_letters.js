let targetSentence = 'thingamabob'
let targetLength = targetSentence.length
let sentence = []
let savedLetters = []
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

let generateLetters = () => {
    if (sentence.length === 0) {
        for (let i = 0; i < targetLength; i++) {
            sentence[i] = undefined
        }
    } else {
        for (let i = 0; i < targetLength; i++) {
                randomCharIndex = Math.round(Math.random() * lowerCase)
                sentence[i] = lowerCaseChar[randomCharIndex]
        }
    }
        return sentence
}

let saveCorrectLetters = () => {
    while (savedLetters.join('') !== targetSentence) {
        attempts++
        generateLetters()
        for (let i = 0; i < targetLength; i++) {
            if (sentence[i] === targetSentence[i]) {
                savedLetters[i] = sentence[i]
                console.log(`Saved letters: ${savedLetters} Target: ${targetSentence} on attempt: ${attempts}`)
            }
        }
    }
    return console.log(`Found ${savedLetters.join('')} with ${attempts} attempts`)
}

// generateLetters()
saveCorrectLetters()
