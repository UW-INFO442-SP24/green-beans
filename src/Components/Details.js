import React, { useEffect } from 'react';
import tempData from '../TempData/temp.json';
import tempImg from '../images/tempimg.jpeg';
import { useNavigate } from "react-router-dom";

function Details({ showDetailFor }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (showDetailFor === "") {
            navigate("/");
        }
    }, []);

    const displayedData = tempData.events.filter((event) => {
        return event.event_name === showDetailFor;
    });

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
        </div>
    );
}

export default Details;