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

// For search
function getFilteredEvents(query, items) {
    if (!query) {
        return items;
    }
    return items.filter(event => event.event_name.toLowerCase().includes(query.toLowerCase()));
}

function Events({ data }) {
    // for search
    const [query, setQuery] = useState("");
    const filteredEvents = getFilteredEvents(query, data.events);

    return (
        <div className="eventPage">
            <Search query={query} setQuery={setQuery} data={data} />

            <div className="filters">
                {tempData.events_filter.map((e) => {
                    return (
                        <Filter key={e.filter_name} filter_name={e.filter_name} filter_options={e.filter_options} />
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