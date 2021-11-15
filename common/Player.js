

class Player {
    constructor(name, symbol) {
        this.playerName = name;
        this.playerScore = 0;
        this.symbol = symbol
    }

    increaseScore() {
        this.playerScore += 1
    }
}

export default Player;