
export default class Board extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add('board');
        this.init();
    }

    init() {

    }
}
customElements.define('board-game', Board, { extends: 'div' });