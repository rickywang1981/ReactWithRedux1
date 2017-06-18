import { 
    ADD, 
    SUBSTRACT,
    INPUTCHANGE,
    FETCHDATASUCCESS 
} from './actionType';

class Calculator {
    constructor(initVal) {
        this._sum = initVal;
    }

    add(val) { 
        this._sum += val; 
    }

    sub = val => { 
        this._sum -= val; 
    }

    get sum() { 
        return this._sum
    }
}

const cal = new Calculator(0);

const initState = {
    sum: cal.sum,
    inputVal:1,
    data: '初始資料'
}

const Reducer = (preState = initState, action) => {
    switch (action.type) {        
        case ADD:
            cal.add(action.val);

            return {
                ...preState,
                sum: cal.sum
            };
        case SUBSTRACT:
            cal.sub(action.val);

            return {
                ...preState,
                sum: cal.sum
            };
        case INPUTCHANGE:
            return {
                ...preState,
                inputVal: Number(action.val)
            }
        case FETCHDATASUCCESS:
            return {
                ...preState,
                data: action.value
            };
        default:
            return preState;
    }
}

module.exports = Reducer;