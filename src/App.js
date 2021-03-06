import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './action';
import LogListUIBuilder from './Log/LogListUIBuilder';

const App = ({
    state: {
        sum,
        inputVal,
        data,
        actionLogItems
    },
    addClicked,
    subClicked,
    logItemClicked,
    handleInputChange,
    fetchData
}) => {
    return (
        <div>
            <div>
                <input type="text" value={inputVal} onChange={(event) => handleInputChange(event.target.value)}></input>
                <button onClick={() => addClicked(inputVal)}>+</button>
                <button onClick={() => subClicked(inputVal)}>-</button>
                <span> = {sum}</span>
            </div>
            
            <LogListUIBuilder actionLogItems={actionLogItems} logItemClicked={logItemClicked} />
            
            <div>
                <button onClick={fetchData}>Fetch data with async action.</button>
                <h3>fetch result: {data}</h3>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return { state };
}
const mapDispatchToProps = (dispatch) => ({
    addClicked: (val) => dispatch(action.add(val)),
    subClicked: (val) => dispatch(action.substract(val)),
    logItemClicked: (index) => dispatch(action.revert(index)),
    handleInputChange: (val) => dispatch(action.inputChange(val)),
    fetchData: () => dispatch(action.fetchData())
});

module.exports = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);