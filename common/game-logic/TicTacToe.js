
export default class TicTacToe {

    constructor(availableSymbols = ['x','o']) {
        this.winner = undefined;
    }

    isADraw(matrix) {
        return matrix["x"].length + matrix["o"].length === 9
    }

    getPossibleWinSpotsSequence() {
        return [
            [1,2,3],
            [1,5,9],
            [1,4,7],
            [2,5,8],
            [3,5,7],
            [7,8,9],
            [4,5,6],
            [3,6,9],
        ]
    }

    isThereAWinner(symbol, matrix) {
        let self = this;
        if( self.winner) { return self.winner }
        let currentFilledSpots = matrix[symbol];
        for(let winSequence of self.getPossibleWinSpotsSequence()) {
            if (self.doesContainsSequence(currentFilledSpots, winSequence)) {
                self.winner = symbol;
                return true;
            }
        }
        return false
    }

    doesContainsSequence(firstList, secondList) {
        return secondList.every((elem) => firstList.includes(elem) )
    }

    resetWinner() {
        this.winner = undefined;
    }

}