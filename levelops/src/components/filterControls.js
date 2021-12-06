import React, { useState, useEffect, useContext }from 'react';
import { JiraContext } from '../App'
import CheckList from './checkList'
import data from '../data/tickets.json'

const FilterControls = (props) => {
    const jiraContext = useContext(JiraContext);

    const [criteria, updateSelection] = useState([]);

    const addCriteria = (e) => {
        updateSelection(
            e.target.checked
                ? criteria => [...criteria, { param: e.target.name, value: e.target.value }]
                : criteria.filter(item => item.value !== e.target.value)
        );
    };

    useEffect(() => {
        jiraContext.filterDispatch(criteria);
    }, [criteria]);

    const records = data.records;
    const assignees = [...new Set(records.map(item => item.assignee))];
    const priority = [...new Set(records.map(item => item.priority))]
    const status = [...new Set(records.map(item => item.status))]

    return (
        <div className="flex w-full flex-wrap">
            <div className="filters-wrap item lean lean-t bg-white flex w-full flex-col">
                <h4 className="filter-title font-bold">Filter by:</h4>
                <div className="filter-group item legend lean w-full">
                    <h4 className="font-bold">Assignees</h4>
                    <CheckList context={assignees} group="assignee" clickFn={addCriteria}></CheckList>
                </div>
                <div className="filter-group item legend lean w-full">
                    <h4 className="font-bold">Priority</h4>
                    <CheckList context={priority} group="priority" clickFn={addCriteria}></CheckList>
                </div>
                <div className="filter-group item legend lean w-full">
                    <h4 className="font-bold">Status</h4>
                    <CheckList context={status} group="status" clickFn={addCriteria}></CheckList>
                </div>
            </div>
        </div>
    );
}

export default FilterControls;