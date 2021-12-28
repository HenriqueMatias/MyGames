export default class Form extends HTMLFormElement {
    constructor() {
        super();
        this.classList.add('form');
        this.onSubmit =  undefined;
        this.setEventsHandlers()
        this.render();
    }

    setEventsHandlers() {
        this.addEventListener('submit', this.onSubmitHanlder )
    }

    onSubmitHanlder(e) {
        const values = {} 
        const elements = [...this.elements]
        elements.reduce( (previousItem, currentItem) => values[currentItem.name] = currentItem.value , values) 
        this.onSubmit && this.onSubmit(values)
        e.preventDefault()
    }

    render() {

    }
}
customElements.define('form-game', Form, { extends: 'form' });