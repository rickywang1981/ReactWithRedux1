class Calculator {
    constructor(initVal) {
        this._sum = initVal;
    }

    add = (val)=> { 
        this._sum += val; 
    }

    sub = val => { 
        this._sum -= val; 
    }

    get sum() { 
        return this._sum
    }
}

module.exports = Calculator