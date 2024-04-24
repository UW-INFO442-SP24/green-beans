import React, { useState } from 'react';
import Search from './Search';
import { useNavigate } from "react-router-dom";

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

function Events({ tempData }) {
    // for search
    const [query, setQuery] = useState("");
    const filteredEvents = getFilteredEvents(query, tempData.events);

    return (
        <div className="eventPage">
            <Search query={query} setQuery={setQuery} tempData={tempData} />

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