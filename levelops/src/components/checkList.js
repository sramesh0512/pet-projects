import React from "react";

const CheckList = (props) => {
    const listItems = (props.context).map((item) => {
        const uniqueId = item.toLowerCase().replace(/ /g,"-");

        return (
            <li key={uniqueId} className="filter-item">
                <input type="checkbox" id={uniqueId} value={item} name={props.group} onClick={(e) => props.clickFn(e)}/>
                <label htmlFor={uniqueId}>{item}</label>
            </li>
        );
    });

    return (
        <ul className="customCheckList">{listItems}</ul>
    );
}

export default CheckList;