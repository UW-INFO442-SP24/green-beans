import React, { useEffect } from 'react';
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="details">
            <img src={tempImg} alt="tempImg" />
            {displayedData.map((event) => (
                <div className="contentContainer">
                    <h2>{event.event_name}</h2>
                    <h4 className="location">{event.location}</h4>
                    <p>Seattle Neighborhood: {event.neighborhood}</p>
                    <p>{event.description}</p>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                </div>
            ))}
            <button className="back-button" onClick={handleClick}>Back</button>
        </div>
    );
}

export default EventDetails;