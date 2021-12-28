export default class Button extends HTMLButtonElement{

    constructor(){
        super()
    }
}

customElements.define('custom-button', Button, {extends:'button'})