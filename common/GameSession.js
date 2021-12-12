
class GameSession {
    constructor(players){
        this.participants = players;
        this.currentTurn = 0;
        this.rounds = 0;
    }

    changeTurn() {
        let nextTurn = this.currentTurn +1;
        if( nextTurn < this.participants.length ) {
            this.currentTurn = nextTurn
            return
        }
        this.currentTurn = 0
    }

    getCurrentTurnPlayer() {
        return this.participants[this.currentTurn]
    }

}

export default GameSession;