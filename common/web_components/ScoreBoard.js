
export default class ScoreBoard extends HTMLElement {
    constructor(players) {
        super()
        let self = this
        self.playersList = players;
        self.classList.add('score-board')
        self.render();
    }

    buildPlayerScore(player) {
        const playerScore = document.createElement('div');
        const nameTitle = document.createElement('h2');
        const scoreStatus = document.createElement('p');

        nameTitle.textContent = player.name;
        scoreStatus.textContent = player.score;

        playerScore.addClass = 'player-score'
        playerScore.appendChild(nameTitle)
        playerScore.appendChild(scoreStatus)
        return playerScore;
    }

    render(players=[]) {
    let playersList = players.length == 0 ? this.playersList : players;
        
        for (let player of playersList) {
            var newPlayerScore = this.buildPlayerScore(player)
            this.appendChild(newPlayerScore);
        }
    }

    renderScore(playersList) {
        this.innerHTML = ""
        for (let player of this.playersList) {
            var newPlayerScore = this.buildPlayerScore(player)
            this.appendChild(newPlayerScore);
        } 
    }

    
}
customElements.define('score-board', ScoreBoard, { extends: 'section' });