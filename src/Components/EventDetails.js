import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        <div>
            <button className="back-button" onClick={handleClick}>Back</button>
            <div className="details">

                {displayedData.map((event) => (
                    <div className="contentContainer">
                        <h2>{event.event_name}</h2>
                        <img src={event.image} alt="event" />
                        <h4 className="address">{event.address}</h4>
                        <div className="tags">
                            <p><span className="tag">{event.occurrence}</span></p>
                        </div>
                        <p><span className="label">DAYS:</span> {event.days}</p>
                        <p><span className="label">HOURS:</span> {event.hours}</p>
                        <p className="details-description">{event.description}</p>

                        {/* Amazon placeholder website link */}
                        <button className="visit-button" onClick={() => window.open(event.website, '_blank')}>Visit Website</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventDetails;