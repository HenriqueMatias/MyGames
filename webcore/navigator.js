import { select } from './utils.js';
export default class Navigator {
    constructor(appElement, pages={}, startPageIndex) {
        this.containerElement = appElement;
        this.startPage=startPageIndex;
        this.currentPage = startPageIndex;
        this.pages = pages;
        this.pagesHistory = [];
    }

    goToMainPage(params) {
        const mainPage = new this.pages[this.startPage](params, this);
        this.containerElement.appendChild(mainPage.render());
    }

    goTo(pageIndex, params=[], currentPageElementID) {
        const nextPage = new this.pages[pageIndex](params, this).render();
        const currentPage = this.getCurrentPage(currentPageElementID);
        this.containerElement.replaceChild(nextPage, currentPage);
        this.currentPage = pageIndex;
        this.pagesHistory.push(currentPage);
    }

    getCurrentPage(currentPageElementID) {
        return select('#'+currentPageElementID);
    }

    addPageToHistory(pageIndex, params) {
        this.pagesHistory.push({ 
            pageIndex: pageIndex,
            params: params,
        })
    }
}