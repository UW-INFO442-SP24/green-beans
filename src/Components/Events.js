import React from 'react';

function CreateCard({ eventName }) {
    return (
        <div className="card">
            <p>{eventName}</p>
            <button>More Details</button>
        </div>
    )
}

function Events({ tempData }) {
    const eventNames = tempData.events.map(event => {
        return event.event_name;
    });

    return (
        <div className="eventCards">
            {/* Search/filter feature */}


            {
                eventNames.map(eventName => (
                    <CreateCard key={eventName} eventName={eventName} />
                ))
            }

        </div>
    )
}

export default Events;