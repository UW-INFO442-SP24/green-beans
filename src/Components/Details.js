import React from 'react';
import tempData from '../TempData/temp.json';

function Details({ showDetailFor }) {
    const displayedData = tempData.events.filter((event) => {
        return event.event_name === showDetailFor;
    });

    return (
        <div>{displayedData.map((event) => (
            <div>
                <h2>{event.event_name}</h2>
                <p>{event.description}</p>
                <h4>location: {event.location}</h4>
                <h5>date: {event.date}</h5>
                <h5>time: {event.time}</h5>
            </div>
        ))}</div>
    )
}

export default Details;