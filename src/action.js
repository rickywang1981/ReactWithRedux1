import 'whatwg-fetch';
import { 
    ADD, 
    SUBSTRACT,
    INPUTCHANGE,
    REVERT,
    FETCHDATASUCCESS,    
} from './actionType';

const action = {
    add: (val) => ({type: ADD, val: val}),
    substract: (val) => ({ type: SUBSTRACT, val: val}),
    inputChange: (val) => ({type: INPUTCHANGE, val: val}),
    revert: (index) => ({type: REVERT, index: index}),
    fetchData() {
        return (dispatch) => {
            fetch('/data/data.json')
            .then((response) => response.json())
            .then((data) => dispatch({
                type: FETCHDATASUCCESS,
                value: data.value
            }));
        }
    },
    fetchDataSuccess: (value) => ({ type: FETCHDATASUCCESS, value })
}

module.exports = action;