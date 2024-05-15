import React from 'react';
import { useParams } from 'react-router-dom';
import tempImg from '../images/tempbg.png'
import { useNavigate } from "react-router-dom";

function EventDetails({ data }) {
    const { eventId } = useParams();
    const displayedData = data.events.filter((event) => {
        return Number(event.event_id) === Number(eventId);
    });

    const navigate = useNavigate();

    function handleClick() {
        navigate("/events");
    }

    return (
        <div className="details">
            <img src={tempImg} alt="tempImg" />
            {displayedData.map((event) => (
                <div className="contentContainer">
                    <h2>{event.event_name}</h2>
                    <p>{event.description}</p>
                    <p>location: {event.location}</p>
                    <p>date: {event.date}</p>
                    <p>time: {event.time}</p>
                </div>
            ))}
            <button onClick={handleClick}>Back</button>
        </div>
    );
}

export default EventDetails;