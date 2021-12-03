import React, { useState, useEffect, useContext } from "react";
import { JiraContext } from '../App';

const CheckList = (props) => {
    const jiraContext = useContext(JiraContext);

    const [criteria, updateSelection] = useState([]);

    const addToSelection = (e) => {
        updateSelection(
            e.target.checked
            ? criteria => [...criteria, e.target.value]
            : criteria.filter(item => item !== e.target.value)
        );
    };

    useEffect(() => {
        jiraContext.filterDispatch(criteria);
    }, [criteria]);

    const listItems = (props.context).map((item) => {
        const uniqueId = item.value.toLowerCase().replace(/ /g,"-");
        return (
            <li key={uniqueId}>
                <input  type="checkbox"
                        id={uniqueId}
                        value={item.label}
                        name={props.group}
                        onClick={addToSelection}
                />
                <label htmlFor={uniqueId}>{item.label}</label>
            </li>
        );
    });

    return (
        <ul className="customCheckList">{listItems}</ul>
    );
}

export default CheckList;