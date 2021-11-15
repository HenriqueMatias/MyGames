
export default class ScoreBoard extends HTMLElement {
    constructor(playersList) {
        super()
        this.playersList = playersList;
        this.classList.add('score-board')
        this.buildScoreBoard()
    }

    buildPlayerScore(player) {
        let playerScore = document.createElement('div');
        let nameTitle = document.createElement('h2');
        let scoreStatus = document.createElement('p');

        nameTitle.textContent = player.playerName;
        scoreStatus.textContent = player.playerScore;

        playerScore.addClass = 'player-score'
        playerScore.appendChild(nameTitle)
        playerScore.appendChild(scoreStatus)
        return playerScore;
    }

    buildScoreBoard() {
        for (let player of this.playersList) {
            var newPlayerScore = this.buildPlayerScore(player)
            this.appendChild(newPlayerScore);
        }
    }

    
}
customElements.define('score-board', ScoreBoard, { extends: 'section' });