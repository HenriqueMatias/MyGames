import Square from './common/web_components/shapes/square.js';
import Board from './common/web_components/board.js';
import ScoreBoard from './common/web_components/ScoreBoard.js';
import { select, createElement } from './common/utils.js';
import gameSessionStore from './stores/game-session-store/index.js';
import TYPES from './stores/game-session-store/types.js';

import TicTacToe from './common/game-logic/TicTacToe.js';
import ModalPage from './common/web_components/ModalPage/ModalPage.js'
import Form from './common/web_components/Form.js'
import Player from './common/Player.js'

const playersList = gameSessionStore.getPlayers();
const board = new Board();
const scoreBoard = new ScoreBoard(playersList);
const ticTacToe = new TicTacToe();
const modal = new ModalPage()
const modalGameOptions = new ModalPage()
modal.addChild(createForm())

const startNewGameButton = createElement('button') 
const keepPlayingButton = createElement('button')
startNewGameButton.innerHTML = "Start New Game"
keepPlayingButton.innerHTML = "Keep Playing"

startNewGameButton.classList.add('button')
keepPlayingButton.classList.add('button')
keepPlayingButton.addEventListener('click', (e) => {
    e.preventDefault();
    gameSessionStore.dispatch("resetMatrix");
    ticTacToe.resetWinner();
    handleNewMatch();
    modalGameOptions.close();
})
modalGameOptions.addChild(keepPlayingButton)
modalGameOptions.addChild(startNewGameButton)

gameSessionStore.events.subscribe("stateChange", (data) => {

})

const activateModalOptionsAfterMatch = (title) => {
    modalGameOptions.setTitle(title)
    modalGameOptions.open();
}

const handleNewMatch = () => {
    [...board.children].map( (square) => square.reset())
}

function createForm() {
    let form = new Form()
    const name1Input = createInput({name:"playerOneName", classList:["w3-input"]})
    const name1Label = createElement('label')
    const name2Label = createElement('label')
    const name2Input = createInput({name:"playerTwoName", classList:["w3-input"]})
    const button = createElement('button');
    button.type = "submit"
    button.innerHTML = "Start Game";
    

    name1Label.textContent = "Name Player One"
    name2Label.textContent = "Name Player Two"
    form.appendChild(name1Input)
    form.appendChild(name1Label)
    form.appendChild(name2Input)
    form.appendChild(name2Label)
    form.appendChild(button)
    form.classList.add('custom-form', 'w2-container')

    form.onSubmit = (values) => {
        const newPlayers = [new Player(values["playerOneName"], "x"), new Player(values["playerTwoName"], "o") ];
        gameSessionStore.dispatch("addPlayers",{players: newPlayers})
        scoreBoard.render(newPlayers)
        modal.close()
    }
    return form;
}

function createInput({name = "", classList = [], type ="text"}) {
    let input = createElement('input');
    input.name = name;
    input.type = "text";
    classList && input.classList.add(...classList);
    return input;
}

function onSquareClick(square, squareId) {
    return () => {
        let currentTurnPlayer = gameSessionStore.getCurrentTurnPlayer();
        let currentSymbol = currentTurnPlayer.symbol;
        const matrix = gameSessionStore.getMatrix();

        if (square.symbol !== null || ticTacToe.winner !== undefined) {
            return;
        }
        
        square.addSymbol(currentSymbol);
        gameSessionStore.dispatch('changeTurn', { spotID: squareId, symbol:currentSymbol });
        
        if(ticTacToe.isThereAWinner(currentSymbol, matrix)) {
            gameSessionStore.dispatch('increaseScore', currentTurnPlayer)
            scoreBoard.render(gameSessionStore.getPlayers())
            const title = `Player:${currentTurnPlayer.name} is the winner!`
            activateModalOptionsAfterMatch(title)
        }else if(ticTacToe.isADraw(matrix)) {
            activateModalOptionsAfterMatch()
        }
        //gameSessionStore.dispatch('changeTurn', { spotID: squareId, symbol:currentSymbol });
    }
}

var Game = function(elId) {
    let squareList = createSquareList()

    for(let square of squareList) {
        board.appendChild(square)
    }
    let app = select(elId)
    app.appendChild(board)
    app.appendChild(scoreBoard)
    app.appendChild(modal)
    app.appendChild(modalGameOptions)
    modal.open()
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
