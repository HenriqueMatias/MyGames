export default class PubSub  {
    constructor() {
        this.events = {};
    }

    subscribe(event, callback) {
        let self = this;
        if (!self.events.hasOwnProperty(event)) {
            self.events[event] = [];
        }
        self.events[event].push(callback);
    }

    publish(event, data = []) {
        if (!self.events.hasOwnProperty(event)) {
            console.warn("event does not exist", event);
            return
        }
        self.events[event].map(callBack => callBack(data));

    }

}