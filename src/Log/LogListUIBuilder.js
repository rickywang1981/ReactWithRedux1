import React, {Component} from 'react';

const LogListUIBuilder = ({actionLogItems, logItemClicked}) => {
    const buildLogList = (actionLog) => {
        const itemList = actionLog.map((action, index) => {
            return <li key={index} onClick={() => logItemClicked(index)}>{action.funcName}({action.param})</li>
        });

        return (
            <ul>{itemList}</ul>
        );
    }

    return (               
            <div>
                <div>Action Log:</div>
                {buildLogList(actionLogItems)}
                <div>Click an action item to revert it</div>
            </div>
    )
};

export default LogListUIBuilder