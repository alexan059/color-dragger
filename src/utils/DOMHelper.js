export default class DOMHelper {

    static select(selector) {
        return document.querySelector(selector);
    }

    static listenEvents(selector, events, callback) {
        if (!Array.isArray(events)) {
            events = [events];
        }

        for (let event of events) {
            selector.addEventListener(event, callback);
        }
    }
}