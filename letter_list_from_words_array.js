
let word_list = ['cat', 'dog', 'rabbit'] // Change this
let letter_list = []

let getLetters = () => {

    for (a_word of word_list) {
        for (a_letter of a_word) {
            letter_list.push(a_letter)
        }
    }
    console.log(`The word list is "${word_list.join(' ')}". The letter list is: "${letter_list.join(' ')}".`)
    return [word_list, letter_list]
}

getLetters(word_list)
