export default class LogItem {
    constructor(funcName, revertFunc, param) {
        this.funcName = funcName;
        this.revertFunc = revertFunc;
        this.param = param;
    }

    revert() {
        this.revertFunc(this.param);
    }
}