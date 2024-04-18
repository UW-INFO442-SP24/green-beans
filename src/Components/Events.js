import React, { useState } from 'react';
import Search from './Search';
import { useNavigate } from "react-router-dom";

function CreateCard({ eventName, setShowDetailFor }) {

    const navigate = useNavigate();

    function handleClick() {
        setShowDetailFor(eventName);
        navigate("/details");
    }

    return (
        <div className="card">
            <p>{eventName}</p>
            <button key={eventName} className="btn btn-primary" onClick={handleClick}>More Details</button>
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

function Events({ tempData, setShowDetailFor }) {
    // for search
    const [query, setQuery] = useState("");
    const filteredEvents = getFilteredEvents(query, tempData.events);

    // const eventNames = tempData.events.map(event => {
    //     return event.event_name;
    // });

    return (
        <div className="eventPage">
            <Search query={query} setQuery={setQuery} tempData={tempData} />

            <div className="eventCards">
                {
                    filteredEvents.map(event => (
                        <CreateCard key={event.event_id} eventName={event.event_name} setShowDetailFor={setShowDetailFor} />
                    ))
                }

            </div>
        </div>
    )
}

export default Events;