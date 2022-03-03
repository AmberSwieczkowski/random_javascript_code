let boxes = []
let givenValuesByRows = []
let givenValuesByColumn = []
let givenValuesBySquare = []
let possibleValuesByRows = []
let possibleValuesByColumn = []
let possibleValuesBySquare = []
let possibleValuesByBox = []
let solution = {} // solution for a single box
let solutions = [] // solutions for all boxes
let allPossibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let boxId = 1
let boxValue = 0
let row = 1
let column = 1
let squareNumber = 0
let gridRowIndex = 0
let gridColumnIndex = 0

const grid = [
    ['7', '3', ' ', '8', '6', '1', ' ', ' ', ' '],
    [' ', '9', ' ', ' ', '4', '2', '3', '7', ' '],
    ['6', '4', ' ', ' ', ' ', ' ', '5', '1', '8'],

    ['9', ' ', '1', '4', ' ', '8', ' ', '6', ' '],
    ['3', ' ', '6', ' ', ' ', '5', '4', '9', '1'],
    [' ', ' ', '7', ' ', '1', '6', '8', ' ', ' '],

    [' ', '7', '4', '1', ' ', ' ', ' ', ' ', '3'],
    [' ', '1', ' ', '6', '8', ' ', '7', '2', '4'],
    ['8', ' ', '3', '7', '2', ' ', ' ', ' ', '9'],
]


let createGrid = () => {
    let gridContainer = document.getElementById('sudokuGrid')
    if (boxId < 82) {
        for (let rowIndex = 1; rowIndex < 10; rowIndex++) {
            for (let columnIndex = 1; columnIndex < 10; columnIndex++) {
                let gridBox = document.createElement('div')
                let box = new Box({ boxId, boxValue, row: rowIndex, column: columnIndex, squareNumber })
                box.squareNumber = getSquareNumber(box)
                boxes.push(box)
                gridBox.classList.add(`square${squareNumber}`)
                gridBox.classList.add(`box`)
                gridBox.innerHTML = boxValue
                boxId++
                column++
                row++
                gridContainer.appendChild(gridBox)
            }
        }
        console.log(boxes)
    }
    getPossibleValuesByColumn()
    getPossibleValuesByRow()
    getPossibleValuesBySquare()
    getPossibleValuesByBox()
}

class Box {
    constructor({ boxId, boxValue, row, column, squareNumber, possibleValuesRow, possibleValuesColumn, possibleValuesSquare, possibleValuesBox }) {
        this.boxId = boxId
        this.boxValue = getBoxValue()
        this.row = row
        this.column = column
        this.squareNumber = squareNumber
        this.possibleValuesRow = possibleValuesByRows
        this.possibleValuesColumn = possibleValuesByColumn
        this.possibleValuesSquare = possibleValuesBySquare
        this.possibleValuesBox = 1
    }

}

// Assigns proper value to each box
let getBoxValue = () => {
    boxValue = grid[gridRowIndex][gridColumnIndex]
    if (gridColumnIndex < 8) {
        gridColumnIndex++
    } else {
        gridColumnIndex = 0
        gridRowIndex++
    }
    return boxValue
}

// Assigns proper square number to each box
let getSquareNumber = (box) => {
    if (box.column < 4 && box.row < 4) {
        squareNumber = 1
    } else if (box.column > 3 && box.column < 7 && box.row < 4) {
        squareNumber = 2
    } else if (box.column > 6 && box.column < 10 && box.row < 4) {
        squareNumber = 3
    } else if (box.column < 4 && box.row < 7) {
        squareNumber = 4
    } else if (box.column > 3 && box.column < 7 && box.row < 7) {
        squareNumber = 5
    } else if (box.column > 6 && box.column < 10 && box.row < 7) {
        squareNumber = 6
    } else if (box.column < 4 && box.row < 10) {
        squareNumber = 7
    } else if (box.column > 3 && box.column < 7 && box.row < 10) {
        squareNumber = 8
    } else if (box.column > 6 && box.column < 10 && box.row < 10) {
        squareNumber = 9
    } else {
        squareNumber = 'Error with getSquareNumber()'
    }
    return squareNumber
}

// Generates an array of values listed in each row
let getGivenValuesByRow = () => {
    if (givenValuesByRows.length < 9) {
        for (let gridRow = 0; gridRow < grid.length; gridRow++) {
            let thisRow = grid[gridRow]
            let valuesInThisRow = []
            for (value of thisRow) {
                if (value !== ' ') {
                    valuesInThisRow.push(value)
                }
                valuesInThisRow.sort()
            }
            givenValuesByRows.push(valuesInThisRow)
        }
        return givenValuesByRows
    }
}

// Generates an array of values NOT listed in each row
let getPossibleValuesByRow = () => {
    if (possibleValuesByRows.length < 9) {
        getGivenValuesByRow()
        for (let row = 0; row < givenValuesByRows.length; row++) {
            let thisRow = givenValuesByRows[row]
            let possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            for (let valueIndex = 0; valueIndex < thisRow.length; valueIndex++) {
                let eachValue = parseInt(thisRow[valueIndex])
                let getIndex = possibleValues.indexOf(eachValue)
                if (getIndex > -1) {
                    possibleValues.splice(getIndex, 1)
                }
            }
            possibleValuesByRows.push(possibleValues)
        }
        return possibleValuesByRows
    }
}

// Generates an array of values listed in each column
let getGivenValuesByColumn = () => {
    if (givenValuesByColumn.length < 9) {
        let gridRow = 0
        while (gridRow < 9) {
            let valuesInThisColumn = []
            for (let gridColumn = 0; gridColumn < grid.length; gridColumn++) {
                let thisColumnValue = grid[gridColumn][gridRow]
                if (thisColumnValue !== ' ') {
                    valuesInThisColumn.push(thisColumnValue)
                }
                valuesInThisColumn.sort()
            }
            givenValuesByColumn.push(valuesInThisColumn)
            gridRow++
        }
    }
    return givenValuesByColumn
}

// Generates an array of values NOT listed in each column
let getPossibleValuesByColumn = () => {
    if (possibleValuesByColumn.length < 9) {
        getGivenValuesByColumn()
        for (let column = 0; column < givenValuesByColumn.length; column++) {
            let thisColumn = givenValuesByColumn[column]
            let possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            for (let valueIndex = 0; valueIndex < thisColumn.length; valueIndex++) {
                let eachValue = parseInt(thisColumn[valueIndex])
                let getIndex = possibleValues.indexOf(eachValue)
                if (getIndex > -1) {
                    possibleValues.splice(getIndex, 1)
                }
            }
            possibleValuesByColumn.push(possibleValues)
        }
        return possibleValuesByColumn
    }
}

// Generates an array of values listed in each square
let getGivenValuesBySquare = () => {
    if (givenValuesBySquare.length < 9) {
        for (let squareIndex = 1; squareIndex < 10; squareIndex++) {
            let valuesInThisSquare = []
            for (eachBox of boxes) {
                if (eachBox.squareNumber === squareIndex && eachBox.boxValue !== ' ') {
                    valuesInThisSquare.push(eachBox.boxValue)
                }
            }
            valuesInThisSquare.sort()
            givenValuesBySquare.push(valuesInThisSquare)
        }
        return givenValuesBySquare
    }
}

// Generates an array of values NOT listed in each square
let getPossibleValuesBySquare = () => {
    if (possibleValuesBySquare.length < 9) {
        getGivenValuesBySquare()
        for (let square = 0; square < givenValuesBySquare.length; square++) {
            let thisSquare = givenValuesBySquare[square]
            let possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9]
            for (let valueIndex = 0; valueIndex < thisSquare.length; valueIndex++) {
                let eachValue = parseInt(thisSquare[valueIndex])
                let getIndex = possibleValues.indexOf(eachValue)
                if (getIndex > -1) {
                    possibleValues.splice(getIndex, 1)
                }
            }
            possibleValuesBySquare.push(possibleValues)
        }
        return possibleValuesBySquare
    }
}

class PossibleSolution {
    constructor({ thisBoxId, possibleValuesForThisColumn, possibleValuesForThisRow, possibleValuesForThisSquare, possibleValuesForThisBox }) {
        this.thisBoxId = thisBoxId
        this.possibleValuesForThisColumn = possibleValuesForThisColumn
        this.possibleValuesForThisRow = possibleValuesForThisRow
        this.possibleValuesForThisSquare = possibleValuesForThisSquare
        this.possibleValuesForThisBox = possibleValuesForThisBox
    }
}

let getPossibleValuesByBox = () => {
    if (possibleValuesByBox.length < 9) {
        let numberOfEmptyBoxes = 0
        let numberOfSolvedBoxes = 0
        for (eachBox of boxes) {
            possibleValuesForThisBox = []
            let possibleSolution;
            if (eachBox.boxValue !== ' ') {
                numberOfSolvedBoxes++
            } else {
                solution = {}
                let possibleValuesForThisColumn = eachBox.possibleValuesColumn[eachBox.column - 1] // possible column values per box
                let possibleValuesForThisRow = eachBox.possibleValuesRow[eachBox.row - 1] // possible row values per box
                let possibleValuesForThisSquare = eachBox.possibleValuesSquare[eachBox.squareNumber - 1] // possible square values per box
                for (eachColumnValue of possibleValuesForThisColumn) {
                    for (eachRowValue of possibleValuesForThisRow) {
                        for (eachSquareValue of possibleValuesForThisSquare) {
                            if (eachColumnValue === eachRowValue && eachColumnValue === eachSquareValue)
                                possibleValuesForThisBox.push(eachColumnValue) // array of possible values for this one box
                        }
                    }
                }
                possibleSolution = new PossibleSolution({ thisBoxId: eachBox.boxId, possibleValuesForThisColumn, possibleValuesForThisRow, possibleValuesForThisSquare, possibleValuesForThisBox })
                solutions.push(possibleSolution)
                possibleValuesByBox.push(possibleValuesForThisBox) // possible values for all boxes
                numberOfEmptyBoxes++
            }
        }
        console.log(`solutions: ${solutions}`)
        console.log(`numberOfSolvedBoxes: ${numberOfSolvedBoxes}, numberOfEmptyBoxes: ${numberOfEmptyBoxes}`)
    }
}
