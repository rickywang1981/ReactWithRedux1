export default class LogManager  {
    constructor() {
        this._actionLogItems = [];
    }

    add(item) {
        this._actionLogItems.push(item)
    }

    remove(index) {
        const removeOne = this._actionLogItems.splice(index, 1)[0];
        return removeOne;
    }

    get Logs() {
        return this._actionLogItems;
    }
}