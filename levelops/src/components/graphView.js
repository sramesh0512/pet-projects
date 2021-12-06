import React, { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { JiraContext } from '../App' 

const FilterView = () => {
    const jiraContext = useContext(JiraContext);

    const listTicketsByKey = (records, key) => {
        return records.reduce(
            (result, ticket) => ((result[ticket[key]] = ++result[ticket[key]] || 1), result), {}
        );
    }

    const records = Object.entries(listTicketsByKey(jiraContext.JiraState, 'assignee')).map(item => {
        return { assignee: item[0], count: item[1]}
    });

    return (
        <div className={`item lean-t flex w-full flex-col`}>
            <h4 className="filter-title font-bold">Graphical View</h4>
            <BarChart width={1600} height={400} data={records}>
                <Bar dataKey="count" fill="#000000" barSize="1" maxBarSize={50} barGap={10}/>
                <XAxis dataKey="assignee" interval={0} minTickGap={10}/>
                <YAxis/>
                <Tooltip cursor={{fill: 'transparent'}}/>
                <Legend />
            </BarChart>
        </div>
    );
}

export default FilterView;