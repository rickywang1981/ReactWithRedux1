import { 
    ADD, 
    SUBSTRACT,
    REVERT,
    INPUTCHANGE,
    FETCHDATASUCCESS 
} from './actionType';

import Calculator from './Math/Calculator' ;
import LogManager from './Log/LogManager';
import LogItem from './Log/LogItem';

const cal = new Calculator(0);
const logger = new LogManager();

const initState = {
    sum: cal.sum,
    inputVal:1,
    actionLogItems:[...logger.Logs], // store add, sub actionLogItems as arrays of [functionName, function, parameter]. E.g., [['add', sub(), 5], ['sub',add(), 3]...]
    data: '初始資料'
}

const Reducer = (preState = initState, action) => {
    switch (action.type) {        
        case ADD:
            cal.add(action.val);
            logger.add(new LogItem(ADD, cal.sub, action.val));

            return {
                ...preState,
                sum: cal.sum,
                actionLogItems: [...logger.Logs]
            };
        case SUBSTRACT:
            cal.sub(action.val);
            logger.add(new LogItem(SUBSTRACT, cal.add, action.val));

            return {
                ...preState,
                sum: cal.sum,
                actionLogItems: [...logger.Logs]
            };
        case REVERT:
            // the nth log item to revert
            const logItem = logger.remove(action.index);
            // calling the revert function
            logItem.revert();

            return {
                ...preState,
                sum: cal.sum,
                actionLogItems: [...logger.Logs]
            }
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