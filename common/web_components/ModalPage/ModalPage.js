import Button from "../Button.js";
import {createDiv, createElement} from '../../utils.js'

export default class ModalPage extends HTMLDivElement {
    
    constructor() {
        super()
        let self = this;
        self.classList.add('modal')
        self.container = createDiv("modal-container");
        self.modalTitle = createElement("p")
        this.render()
    }

    close() {
        this.classList.remove('open')
    }

    open() {
        this.classList.add('open')
    }

    renderCloseButton() {
        let customButton = new Button();
        customButton.classList.add('modal-close' , 'modal-exit')
        customButton.addEventListener('click', () => this.close())
        customButton.innerHTML = "X"
        return customButton
    }

    addChild(child) {
        this.container.appendChild(child)
    }

    setTitle(title) {
        this.modalTitle.innerHTML = title
    }

    render() {
        
        this.container.appendChild(this.renderCloseButton());
        this.container.appendChild(this.modalTitle);

        this.appendChild(createDiv("modal-bg", "modal-exit"));
        this.appendChild(this.container);
        
    }

}
customElements.define('modal-page', ModalPage, { extends: 'div' });
