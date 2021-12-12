
export default class TicTacToe {

    constructor(availableSymbols = ['x','o']) {
        this.matrix = {'x': [], 'o': []};
        this.winner = undefined;
    }

    addSpot(spot, symbol) {
        this.matrix[symbol].push(spot);
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

    isThereAWinner(symbol) {
        let self = this;
        if( self.winner) { return self.winner }
        let currentFilledSpots = self.matrix[symbol];
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

}