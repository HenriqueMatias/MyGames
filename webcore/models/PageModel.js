import { select, createElement } from '../utils.js';
export default class PageModel {
    constructor(params, navigator) {
        this.nav = navigator;
        this.elem = createElement('div');
        this.elem.setAttribute('id', this.constructor.name);
    }

    goTo(indexPage, params=[]) {
        const idPageName = this.constructor.name;
        this.nav.goTo(indexPage, params, idPageName);
    }
}