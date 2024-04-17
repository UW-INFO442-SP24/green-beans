import React, { useState } from 'react';
import Search from './Search';

function CreateCard({ eventName }) {
    return (
        <div className="card">
            <p>{eventName}</p>
            <button>More Details</button>
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

    const eventNames = tempData.events.map(event => {
        return event.event_name;
    });

    return (
        <div className="eventPage">
            <Search query={query} setQuery={setQuery} tempData={tempData} />

            <div className="eventCards">
                {
                    filteredEvents.map(event => (
                        <CreateCard key={event.event_id} eventName={event.event_name} />
                    ))
                }

            </div>
        </div>
    )
}

export default Events;