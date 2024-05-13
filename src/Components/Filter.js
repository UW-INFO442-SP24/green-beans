import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Filter({ filter_name, filter_options, onFilterChange }) {
    const [filterOption, setFilterOption] = useState(filter_name);

    const handleClick = (option) => () => {
        setFilterOption(option);
        onFilterChange(filter_name, option);
    }


    return (
        <div className="dropdown">
            <DropdownButton id="dropdown-item-button" title={filterOption}>
                {filter_options.map((option, index) => {
                    return (
                        <Dropdown.Item as="button" key={index} onClick={handleClick(option)}>{option}</Dropdown.Item>
                    )
                })}
            </DropdownButton>
        </div>
    );
}

export default Filter;