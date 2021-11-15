import PubSub from "../lib/pubSub";

export default class Store {
    constructor(options) {
        let self = this;
        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'resting';
        self.events = new PubSub();

        self = this.replaceParametersIfTheyExistIn(options, self)
    }

    replaceParametersIfTheyExistIn(options, self) {
        for (option in options) {
            if(self[option]) {
                self[option] = options[option]
            }
        }
    }
}