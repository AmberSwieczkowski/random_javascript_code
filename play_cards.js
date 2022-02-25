let values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
let suits = ['♣️', '♦️', '❤️', '♠️']
let deckOfCards = []
let revealedCards = []
let matches = []
let score = 0
let absoluteId = 1
let color = 'black'
let numberOfCards = 0
let restart = false

// Part of the makeDeck function
class Card {
    constructor({ value, suit, color, absoluteId, id }) {
        this.value = value
        this.suit = suit

        if (suit === '♦️' || suit === '❤️') {
            color = 'red'
        }
        this.color = color
        this.id = id
        this.absoluteId = absoluteId
        this.card = `${value} of ${suit}`
    }
}

// This is what happens when you push the New Game button
let makeDeck = () => {
    if (deckOfCards.length === 0 && restart === false) {
        for (aSuit of suits) {
            for (aValue of values) {
                deckOfCards.push(new Card({ value: aValue, suit: aSuit, color: color, absoluteId: absoluteId, id: absoluteId }))
                absoluteId++
            }
        }
        numberOfCards = deckOfCards.length
        updateDeckCount()
        document.getElementById('flippedCard').innerHTML = 'Click Flip Card to Begin!'
        console.log(deckOfCards)
    } else if (restart) {
        window.location.reload()
    } else {
        document.getElementById('flippedCard').innerHTML = 'Click Flip Card to Begin!'
    }
}

// This is what happens when you push the Flip Card Button
let flipCard = () => {
    if (numberOfCards === 0) {
        document.getElementById('flippedCard').innerHTML = 'Click New Game to Play!'
    } else {
        let revealedCard = getNextCard()
        if (revealedCard) {
            restart = true
            document.getElementById('deckBtn').innerHTML = 'Restart Game'
            listFlippedCard(revealedCard)
            checkMatch(revealedCard)
        } else {
            flipCard()
        }
    }
}

// Update values in HTML
let updateDeckCount = () => {
    document.getElementById('deckCounter').innerHTML = numberOfCards
}

let updateFlippedCount = () => {
    document.getElementById('flippedCounter').innerHTML = revealedCards.length
}

let updateMatchCount = (matchFound) => {
    matches.push(matchFound)
    score = matches.length
    document.getElementById('matchCounter').innerHTML = score
    if (score === 26) {
        document.getElementById('deckBtn').innerHTML = 'New Game'
    }
}

// Part of the getNextCard function
let assignIds = () => {
    id = 1
    for (eachCard of deckOfCards) {
        eachCard.id = id
        id++
    }
}

// Part of the getNextCard function
let randomId = () => {
    let randomId = Math.round(Math.random() * numberOfCards) + 1;
    return randomId
}

// Part of the flipCard function
let getNextCard = () => {
    let flippedCardId = randomId()
    let revealedCard = deckOfCards.find(card => card.id === flippedCardId)
    if (revealedCard) {
        revealedCards.push(revealedCard);
        deckOfCards = deckOfCards.filter(card => card !== revealedCard)
        numberOfCards--
        assignIds()
        updateDeckCount()
        document.getElementById('flippedCard').innerHTML = revealedCard.card
        console.log(`Revealed Card: ${revealedCard.card}`)
        return revealedCard
    } else {
        console.log(`There was an error with id# ${flippedCardId}`)
    }
}

// Shows flipped card in middle column of HTML
let listFlippedCard = revealedCard => {
    let listCard = document.createElement('ul')
    listCard.classList.add(`${revealedCard.color}`)
    listCard.classList.add(`${revealedCard.color}${revealedCard.value}`)
    listCard.innerHTML = revealedCard.card
    document.getElementById(`unmatched-${revealedCard.color}`).appendChild(listCard)
    updateFlippedCount()
}

// Removes matching card from middle column of HTML
let removeMatchedCards = matchingCard => {
    let allFlippedCards = document.getElementById(`unmatched-${matchingCard.color}`)
    let matchedCardElement = document.getElementsByClassName(`${matchingCard.color}${matchingCard.value}`)[0]
    allFlippedCards.removeChild(matchedCardElement)
}

// Shows matching card in right column of HTML
let listMatchedCards = (matchingCard) => {
    let matchedElement = document.createElement('ul')
    matchedElement.innerHTML = matchingCard.card
    matchedElement.classList.add(`${matchingCard.color}`)
    document.getElementById(`matched-${matchingCard.color}`).appendChild(matchedElement)
}

//Checks if most recent flipped card has a match with any of the other cards already flipped
let checkMatch = (revealedCard) => {
    let matchFound = revealedCards.find(match =>
        match.value === revealedCard.value &&
        match.color === revealedCard.color &&
        match.absoluteId !== revealedCard.absoluteId
    )
    if (matchFound) {
        updateMatchCount(matchFound)
        listMatchedCards(revealedCard)
        listMatchedCards(matchFound)
        removeMatchedCards(revealedCard)
        removeMatchedCards(matchFound)
        return matchFound
    }
}
