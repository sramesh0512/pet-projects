import React, { useContext } from 'react';
import { JiraContext } from '../App' 
import CheckList from './checkList'

const FilterControls = (props) => {
    const jiraContext = useContext(JiraContext);

    const food = [
        { value: 'Pelageya Rakhi', label: 'Pelageya Rakhi' },
        { value: 'Kibwe Leanne', label: 'Kibwe Leanne' },
        { value: 'Karan Cardea', label: 'Karan Cardea' },
    ];

    const hotel = [
        { value: 'Pelageya Rakhi', label: 'Pelageya Rakhi' },
        { value: 'Kibwe Leanne', label: 'Kibwe Leanne' },
        { value: 'Karan Cardea', label: 'Karan Cardea' },
    ];

    const cuisines = [
        { value: 'Pelageya Rakhi', label: 'Pelageya Rakhi' },
        { value: 'Kibwe Leanne', label: 'Kibwe Leanne' },
        { value: 'Karan Cardea', label: 'Karan Cardea' },
    ];

    return (
        <div className="flex w-full flex-wrap">
            <div className="flex w-full">
                <div className="item legend py-1 w-full justify-center items-center">
                    <h4 className="font-bold">You can filter results by:</h4>
                </div>
            </div>
            <div className="flex w-full">
                <div className="item w-4/12">Assignee
                    <CheckList context={food} group="assignee"></CheckList>
                </div>
                {/* <div className="item w-4/12">Status
                    <CheckList context={hotel} group="assignee"></CheckList>
                </div>
                <div className="item w-4/12">Priority
                    <CheckList context={cuisines} group="assignee"></CheckList>
                </div> */}
            </div>
        </div>
    );
}

export default FilterControls;