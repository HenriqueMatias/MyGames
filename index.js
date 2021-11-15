import Square from './common/web_components/shapes/square.js'
import Board from './common/web_components/board.js'
import ScoreBoard from './common/web_components/ScoreBoard.js'
import Player from './common/Player.js'
import GameSession from './common/GameSession.js'
import { select } from './common/utils.js'

function onSquareClick(square) {
    return () => {
        let currentSymbol = window.gameSession.getCurrentTurnPlayer().symbol
        square.addSymbol(currentSymbol)
        window.gameSession.changeTurn()
    }
}

var Game = function(elId) {
    let playersList = [new Player("Luiz", "x"), new Player("Henrique", "o")]
    let board = new Board();
    let scoreBoard = new ScoreBoard(playersList)
    let gameSession = new GameSession(playersList); //make global ? find alternatives?
    let squareList = createSquareList()
    window.gameSession = gameSession;

    for(let square of squareList) {

        board.appendChild(square)
    }

    select(elId).appendChild(board)
    select(elId).appendChild(scoreBoard)
}

function getClassBasedOnPosition(position) {
    
    if(position > 6) {
        return "bottom"
    }
    if(position < 4) {
        return "top"
    }
    return false
}

function createSquareList() {
    let squareList = []

    for(let i=1; i <= 9; i++){
        let topSquare = new Square()
        let positionClass = getClassBasedOnPosition(i)
        if(positionClass) {
            topSquare.classList.add(positionClass)
        }
        if ([2,5,8].includes(i)) {
            topSquare.classList.add('middle')
        }
        topSquare.addEventListener('click', onSquareClick(topSquare))
        squareList.push(topSquare)
    }
    return squareList
}

var MyGame = new Game('#app');
