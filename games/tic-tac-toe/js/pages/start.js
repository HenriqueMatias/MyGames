import WebCore from '../../../../webcore/index.js';
const {Form, Board, ScoreBoard, Square, ModalPage} = WebCore.Presentation.components;
const {createElement} = WebCore.DOMHelper;
const PageModel = WebCore.models.PageModel;

export class StartPage extends PageModel {
    constructor(params, navigator) {
        super(params, navigator);
        this.setStyle();
    }

    setStyle() {
        this.elem.classList.add('start-page');
    }

    renderStartButton () {
        const startButton = createElement('button');
        startButton.classList.add('button');
        startButton.textContent = "Start Game"
        startButton.onclick = () => {
            this.goTo('SELECT_LOCAL_PLAYER')
        }
        return startButton;
    }

    renderTitle() {
        const gameTitle = createElement('h1');
        gameTitle.textContent = "Tic Tac Toe!";
        return gameTitle;
    }

    render() {
        this.elem.appendChild(this.renderTitle());
        this.elem.appendChild(this.renderStartButton());
        return this.elem;
    }

}