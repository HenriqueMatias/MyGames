import Square from './common/web_components/shapes/square.js';
import Board from './common/web_components/board.js';
import ScoreBoard from './common/web_components/ScoreBoard.js';
import Player from './common/Player.js';
import GameSession from './common/GameSession.js';
import { select } from './common/utils.js';
import gameSessionStore from './stores/game-session-store/index.js';
import TicTacToe from './common/game-logic/TicTacToe.js';

const playersList = gameSessionStore.getPlayers();
const board = new Board();
const scoreBoard = new ScoreBoard(playersList);
const ticTacToe = new TicTacToe();

function onSquareClick(square, squareId) {
    return () => {
        let currentTurnPlayer = gameSessionStore.getCurrentTurnPlayer();
        let currentSymbol = currentTurnPlayer.symbol;
        if (square.symbol !== null || ticTacToe.winner ==! undefined) {
            return;
        }
        
        square.addSymbol(currentSymbol);
        ticTacToe.addSpot(squareId, currentSymbol)
        if(ticTacToe.isThereAWinner(currentSymbol)) {
            alert(`Player:${currentTurnPlayer.name} is the winner!` )
            return;
        }
        gameSessionStore.dispatch('changeTurn');
    }
}

function isThereAWinner(currentTurnPlayer,) {
    
    if(false) {
        gameSessionStore.events.dispatch('increaseScore', currentTurnPlayer)
    }
}

var Game = function(elId) {
    let squareList = createSquareList()

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
        topSquare.addEventListener('click', onSquareClick(topSquare, i))
        squareList.push(topSquare)
    }
    
    return squareList
}

var MyGame = new Game('#app');
