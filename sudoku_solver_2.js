/* keys in the grid represent [row number][column number][2-digit box number][square number]
For example: 63484 is in row 6 (out of 9), column 3 (out of 9), is box number 48 (out of 81), and is in square number 4 (out of 9) */


const originalGrid = {
    11011: '7', 12021: '3', 13031: ' ', 14042: '8', 15052: '6', 16062: '1', 17073: ' ', 18083: ' ', 19093: ' ',
    21101: ' ', 22111: '9', 23121: ' ', 24132: ' ', 25142: '4', 26152: '2', 27163: '3', 28173: '7', 29183: ' ',
    31191: '6', 32201: '4', 33211: ' ', 34222: ' ', 35232: ' ', 36242: ' ', 37253: '5', 38263: '1', 39273: '8',
    41284: '9', 42294: ' ', 43304: '1', 44315: '4', 45325: ' ', 46335: '8', 47346: ' ', 48356: '6', 49366: ' ',
    51374: '3', 52384: ' ', 53394: '6', 54405: ' ', 55415: ' ', 56425: '5', 57436: '4', 58446: '9', 59456: '1',
    61464: ' ', 62474: ' ', 63484: '7', 64495: ' ', 65505: '1', 66515: '6', 67526: '8', 68536: ' ', 69546: ' ',
    71557: ' ', 72567: '7', 73577: '4', 74588: '1', 75598: ' ', 76608: ' ', 77619: ' ', 78629: ' ', 79639: '3',
    81647: ' ', 82657: '1', 83667: ' ', 84678: '6', 85688: '8', 86698: ' ', 87709: '7', 88719: '2', 89729: '4',
    91737: '8', 92747: ' ', 93757: '3', 94768: '7', 95778: '2', 96788: ' ', 97799: ' ', 98809: ' ', 99819: '9'
}

class SudokuGrid {
    constructor(grid) {
        this.grid = grid
        let newBoxes = Object.entries(this.grid) // an array of arrays
        this.allBoxes = {}
        for (let eachBox of newBoxes) {
            let thisBoxKey = eachBox[0]
            let thisBoxValue = eachBox[1]
            let thisBoxId = thisBoxKey.slice(2, 4) // Third and fourth numbers in key for box id
            let box = new Box({ square: thisBoxKey[4], row: thisBoxKey[0], column: thisBoxKey[1], boxValue: thisBoxValue, boxId: thisBoxId })
            this.allBoxes[thisBoxId] = box
        }
        console.log(this.allBoxes)
        let [solvedBoxes, numberOfSolvedBoxes, unsolvedBoxes, numberOfUnsolvedBoxes] = getSolvedAndUnsolvedBoxes(this.allBoxes)
        this.createGrid(this.grid)
        // return allBoxes
        this.updateGrid()
    }

    createGrid(grid) {
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

    deleteGrid() {
        let gameboard = document.getElementById('sudokuGameboard')
        while (gameboard.firstChild) {
            gameboard.removeChild(gameboard.firstChild)
        }
    }

    updateGrid() {
        this.deleteGrid()
        originalGrid[13031] = '5'
        this.createGrid(this.grid)
        // console.log(this.grid)
    }

}

let getNewBoxes = (grid) => {
    let newBoxes = Object.entries(grid)
    let allBoxes = {}
    for (eachBox of newBoxes) {
        thisBoxKey = eachBox[0]
        thisBoxValue = eachBox[1]
        thisBoxId = thisBoxKey.slice(-2) // Last two numbers from key
        let box = new Box({ square: thisBoxKey[4], row: thisBoxKey[1], column: thisBoxKey[2], boxValue: thisBoxValue, boxId: thisBoxId })
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

let newGame = () => {
    document.getElementById('createNewGame').disabled = true
    let solutionButton = document.getElementById('getSudokuSolutionButton')
    solutionButton.removeAttribute('disabled')
    new SudokuGrid(originalGrid)
    // getNewBoxes(originalGrid)

}

// newGame()
