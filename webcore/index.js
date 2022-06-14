import Presentation from './web_components/index.js';
import StoreModel from "./models/StoreModel.js"
import PageModel from "./models/PageModel.js"
import App from "./app.js";
import {select, createElement} from './utils.js'
export class WebCore {
    constructor() {
        this.Presentation = Presentation
        this.DOMHelper = {
            createElement,
            select,
        }
        this.App = App,
        this.models = {
            PageModel : PageModel,
            StoreModel: StoreModel,
        }
        
    }
}

export default new WebCore();