export var createElement = Document.prototype.createElement.bind(document)
export var select = Document.prototype.querySelector.bind(document)

export var verifyWinner = (ticTacToeMatrix, selectedPosition) => {
    let matrixBasedNumber = 3
    let baseSymbol = ticTacToeMatrix[selectedPosition]

    return true
    //verify horizontal backward
}