
class Square extends HTMLDivElement {
    constructor() {
        super()
        this.symbol = null;
        this.classList.add('square')
    }

    addSymbol(letter) {
        if (this.symbol !== null) {
            return;
        }
        let symbolLetter = this.createLetterElement(letter)
        this.appendChild(symbolLetter)
        this.symbol = letter
    }

    createLetterElement(letter) {
        let p = document.createElement('p')
        p.classList.add('symbol')
        p.textContent = letter
        return p
    }
}
customElements.define('square-shape', Square, { extends: 'div' });
export default Square;