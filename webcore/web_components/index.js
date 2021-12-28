import Form from './Form.js';
import Board from './board.js';
import ScoreBoard from './ScoreBoard.js';
import Square from './square.js';
import Button from './Button.js';
import ModalPage from './ModalPage/ModalPage.js'

class Presentation {
    constructor() {
        this.components = {
            Form: Form,
            ScoreBoard: ScoreBoard,
            Button: Button,
            Square: Square,
            Board: Board,
            ModalPage: ModalPage
        }
    }
}

export default new Presentation();

