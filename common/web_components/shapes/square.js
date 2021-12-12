
class Square extends HTMLElement {
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
        this.onSymbolChanged && this.onSymbolChanged()
    }

    createLetterElement(letter) {
        let p = document.createElement('p')
        p.classList.add('symbol')
        p.textContent = letter
        return p
    }
}
customElements.define('square-shape', Square, { extends: 'section' });
export default Square;