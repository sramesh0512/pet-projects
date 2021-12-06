import React, { useContext } from 'react';
import { JiraContext } from '../App' 

const GridView = () => {
    const jiraContext = useContext(JiraContext);

    const dataGridRow = jiraContext.JiraState.map((item) => {
        let color = 'gray';
        switch (item.priority) {
            case('HIGHEST'):
                color = 'red';
                break;

            case('HIGH'):
                color = 'yellow';
                break;

            case('MEDIUM'):
                color = 'green';
                break;

            default:
                break;
        }
        return (
            <li className="data-grid-row flex w-full justify-between items-center">
                <span className="d-initials">{item.assignee.charAt(0)}</span>
                <span className="d-key">{item.key}</span>
                <span className="d-summary">{item.summary}</span>
                <span className="d-type">{item.issue_type}</span>
                <span className={`d-priority ${color}`}>{item.priority}</span>
                <span className="d-status font-bold">{item.status}</span>
            </li>
        );
    });

    return (
        <div className={`item lean-t flex w-full flex-col`}>
            <h4 className="filter-title font-bold">List View</h4>
            <ul className="data-grid">
                {dataGridRow}
            </ul>
        </div>
    );
}

export default GridView;