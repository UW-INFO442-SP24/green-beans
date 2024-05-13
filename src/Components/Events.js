import React, { useState } from 'react';
import Search from './Search';
import { useNavigate } from "react-router-dom";

import Filter from './Filter';
import tempData from '../TempData/temp.json'

function CreateCard({ event_id, eventName }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/events/" + event_id);
    }

    return (
        <div className="card">
            <p>{eventName}</p>
            <button key={event_id} className="btn btn-primary" onClick={handleClick}>More Details</button>
        </div>
    )
}

// For search and filtering
function getFilteredEvents(query, filters, items) {
    let filteredItems = items;

    if (query) {
        filteredItems = filteredItems.filter(event => event.event_name.toLowerCase().includes(query.toLowerCase()));
    }

    Object.keys(filters).forEach(filterName => {
        const filterValue = filters[filterName];
        if (filterValue && filterValue !== filterName) {
            filteredItems = filteredItems.filter(event => event[filterName.toLowerCase()] === filterValue.toLowerCase());
        }
    });

    return filteredItems;
}

function Events({ data }) {
    // for search
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({});

    const handleFilterChange = (filterName, filterValue) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName.toLowerCase()]: filterValue,
        }));
    };

    const filteredEvents = getFilteredEvents(query, filters, data.events);

    return (
        <div className="eventPage">
            <Search setQuery={setQuery} data={data} />

            <div className="filters">
                {tempData.events_filter.map((e) => {
                    return (
                        <Filter key={e.filter_name} filter_name={e.filter_name} filter_options={e.filter_options} onFilterChange={handleFilterChange} />
                    )
                })}
            </div>

            <div className="eventCards">
                {
                    filteredEvents.map(event => (
                        <CreateCard key={event.event_id} event_id={event.event_id} eventName={event.event_name} />
                    ))
                }

            </div>
        </div>
    )
}

export default Events;