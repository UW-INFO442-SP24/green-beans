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
                    <p><span className="label">DATE:</span> {event.date}</p>
                    <p><span className="label">TIME:</span> {event.time}</p>
                    <p>{event.description}</p>  

                    {/* Amazon placeholder website link */}
                    <button className="visit-button" onClick={() => window.open('https://www.amazon.com', '_blank')}>Visit Website</button>
                </div>
            ))}
            <button className="back-button" onClick={handleClick}>Back</button>
        </div>
    );
}

export default EventDetails;