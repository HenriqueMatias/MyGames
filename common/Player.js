

class Player {
    constructor(name, symbol) {
        this.name = name;
        this.score = 0;
        this.symbol = symbol
    }

    increaseScore() {
        this.score += 1
    }
}

export default Player;