import {createElement} from '../utils.js'

export default class Card extends HTMLElement {
    constructor() {
        super();
        this.headerContent = null;
        this.footerContent = null;
        this.mainContent   = null;

        this.classList.add("w3-card");
    }

    renderHeader() {
        const header = createElement('header');
        header.classList.add('w3-container')
        header.appendChild(this.headerContent)
        return header;
    }

    renderFooter() {
        const footer = createElement('footer');
        header.classList.add('w3-container');
        footer.appendChild(this.footerContent)
        return footer;
    }

    render() {
        if(this.headerContent) {
            this.appendChild(this.renderHeader())
        }
        if(this.mainContent) {
            this.appendChild(this.mainContent)
        }
        if(this.footerContent) {
            this.appendChild(this.renderFooter())
        }
        return this;
    }


}
customElements.define('wc-card', Card, { extends: 'section' });