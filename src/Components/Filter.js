import React, { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Filter({ filter_name, filter_options, onFilterChange }) {
    const [filterOption, setFilterOption] = useState(filter_name);

    const handleClick = (option) => () => {
        setFilterOption(option);
        onFilterChange(filter_name, option);
    }

    const handleClear = () => {
        setFilterOption(filter_name);
        onFilterChange(filter_name, '');
    }

    return (
        <div className="dropdown">
            <DropdownButton id="dropdown-item-button" title={filterOption}>
                <Dropdown.Item as="button" onClick={handleClear}>Clear Filter</Dropdown.Item>
                {filter_options.map((option, index) => (
                    <Dropdown.Item as="button" key={index} onClick={handleClick(option)}>{option}</Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
}

export default Filter;