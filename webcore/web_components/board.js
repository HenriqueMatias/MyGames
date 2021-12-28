
export default class Board extends HTMLDivElement {
    constructor() {
        super();
        this.classList.add('board');
    }
}
customElements.define('board-game', Board, { extends: 'div' });