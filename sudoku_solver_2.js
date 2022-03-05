/* keys in the grid represent [square number][row number][column number][2-digit box number]
For example: 46348 is in square 4 (out of 9), row 6 (out of 9), column 3 (out of 9), and is box number 48 (out of 81) */

const originalGrid = {
    11101: '7', 11202: '3', 11303: ' ', 21404: '8', 21505: '6', 21606: '1', 31707: ' ', 31808: ' ', 31909: ' ',
    12110: ' ', 12211: '9', 12312: ' ', 22413: ' ', 22514: '4', 22615: '2', 32716: '3', 32817: '7', 32918: ' ',
    13119: '6', 13220: '4', 13321: ' ', 23422: ' ', 23523: ' ', 23624: ' ', 33725: '5', 33826: '1', 33927: '8',
    44128: '9', 44229: ' ', 44330: '1', 54431: '4', 54532: ' ', 54633: '8', 64734: ' ', 64835: '6', 64936: ' ',
    45137: '3', 45238: ' ', 45339: '6', 55440: ' ', 55541: ' ', 55642: '5', 65743: '4', 65844: '9', 65945: '1',
    46146: ' ', 46247: ' ', 46348: '7', 56449: ' ', 56550: '1', 56651: '6', 66752: '8', 66853: ' ', 66954: ' ',
    77155: ' ', 77256: '7', 77357: '4', 87458: '1', 87559: ' ', 87660: ' ', 97761: ' ', 97862: ' ', 97963: '3',
    78164: ' ', 78265: '1', 78366: ' ', 88467: '6', 88568: '8', 88669: ' ', 98770: '7', 98871: '2', 98972: '4',
    79173: '8', 79274: ' ', 79375: '3', 89476: '7', 89577: '2', 89678: ' ', 99779: ' ', 99880: ' ', 99981: '9'
}

let getNewBoxes = (grid) => {
    let newBoxes = Object.entries(grid)
    let allBoxes = {}
    for (eachBox of newBoxes) {
        thisBoxKey = eachBox[0]
        thisBoxValue = eachBox[1]
        thisBoxId = thisBoxKey.slice(-2) // Last two numbers from key
        let box = new Box({square: thisBoxKey[0], row: thisBoxKey[1], column: thisBoxKey[2], boxValue: thisBoxValue, boxId: thisBoxId})
        allBoxes[thisBoxId] = box
    }
    console.log(allBoxes)
    let [solvedBoxes, numberOfSolvedBoxes, unsolvedBoxes, numberOfUnsolvedBoxes] = getSolvedAndUnsolvedBoxes(allBoxes)
    createGrid(grid)
    return allBoxes
}

let getSolvedAndUnsolvedBoxes = (boxes) => {
    let numberOfUnsolvedBoxes = 0
    let numberOfSolvedBoxes = 0
    let unsolvedBoxes = {}
    let solvedBoxes = {}
    let boxProperties = Object.values(boxes)
    for (eachBox of boxProperties) {
        let thisBoxId = eachBox.boxId
        let thisBoxValue = eachBox.boxValue
        let thisBoxSolved = eachBox.solved
        if (!thisBoxSolved) {
            unsolvedBoxes[thisBoxId] = thisBoxValue
            numberOfUnsolvedBoxes++
        } else {
            solvedBoxes[thisBoxId] = thisBoxValue
            numberOfSolvedBoxes++
        }
    }
    console.log(`Unsolved Boxes: ${numberOfUnsolvedBoxes}, Solved Boxes: ${numberOfSolvedBoxes}.`)
    // console.log(solvedBoxes)
    // console.log(unsolvedBoxes)
    return [solvedBoxes, numberOfSolvedBoxes, unsolvedBoxes, numberOfUnsolvedBoxes]
}

class Box {
    constructor({ boxId, boxValue, row, column, square }) {
        this.boxId = boxId;
        this.boxValue = boxValue;
        this.row = row;
        this.column = column;
        this.square = square;
        this.solved = boxValue === ' ' ? false : true
    }
}

let createGrid = (grid) => {
    let gameboard = document.getElementById('sudokuGameboard')
    let boxes = Object.entries(grid)
    for (eachBox of boxes) {
        let thisBoxValue = eachBox[1]
        let sudokuBox = document.createElement('div')
        sudokuBox.classList.add('box')
        sudokuBox.innerHTML = thisBoxValue
        gameboard.appendChild(sudokuBox)
    }
    // console.log(boxes)
}

let updateGame = (grid) => {
    let allBoxes = getNewBoxes(grid)
    // console.log(allBoxes)

}

let newGame = () => {
    document.getElementById('createNewGame').disabled = true
    updateGame(originalGrid)
}

newGame()


