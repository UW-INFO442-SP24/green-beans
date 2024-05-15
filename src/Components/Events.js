import React, { useState, useEffect } from 'react';
import Search from './Search';
import { useNavigate } from "react-router-dom";

import Filter from './Filter';
import tempData from '../TempData/temp.json'
import tempbg from '../images/tempbg.png'

function CreateCard({ event_id, eventName, eventLocation, eventDate }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/events/" + event_id);
    }

    return (
        <div className="card">
            <img src={tempbg} alt="tempImg" />
            <div className="card-content">
                <h1>{eventName}</h1>
                <p>{eventLocation} | {eventDate}</p>
            </div>
            <button key={event_id} className="btn btn-primary" onClick={handleClick}>MORE DETAILS</button>
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFilterChange = (filterName, filterValue) => {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (filterValue === '') {
                delete newFilters[filterName.toLowerCase()];
            } else {
                newFilters[filterName.toLowerCase()] = filterValue;
            }
            return newFilters;
        });
    };

    const filteredEvents = getFilteredEvents(query, filters, data.events);

    return (
        <div className="eventPage">
            <div className="banner">
                <h1>EVENTS</h1>
                <p>Here are some events in the Seattle area to connect you with the community!</p>
            </div>

            <div className="inputs">
                <Search setQuery={setQuery} data={data} />

                <div className="filters">
                    {tempData.events_filter.map((e) => {
                        return (
                            <Filter key={e.filter_name} filter_name={e.filter_name} filter_options={e.filter_options} onFilterChange={handleFilterChange} />
                        )
                    })}
                </div>
            </div>

            <div className="eventCards">
                {
                    filteredEvents.map(event => (
                        <CreateCard key={event.event_id} event_id={event.event_id} eventName={event.event_name} eventLocation={event.location} eventDate={event.date} />
                    ))
                }

            </div>
        </div>
    )
}

export default Events;