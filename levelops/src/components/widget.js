import React, { useContext }from 'react';
import { JiraContext } from '../App'

const Widget = (props) => {
    const jiraContext = useContext(JiraContext);

    const kpiName = props.value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()});
    const kpiVal = (jiraContext.JiraState.filter(item => item[props.param] === props.value)).length;

    return (
        <div className={`status-item item flex w-full lg:w-4/12 justify-between items-center ${props.color}`}>
            Total tasks in {kpiName} <span className="status-indicator flex justify-center items-center">{kpiVal}</span>
        </div>
    );
}

export default Widget;