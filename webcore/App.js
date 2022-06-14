import Navigator from "./navigator.js";

const configInterface = {
pages: []
}

export default class App {
    constructor(appElement, config) {
        this.appElement = appElement;
        this.config = config;
    }

    start() {
        const nav = new Navigator( this.appElement, this.config.pages, 'START_PAGE');
        nav.goToMainPage();
    }
} 