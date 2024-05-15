import React from 'react';
import { useParams } from 'react-router-dom';
import tempImg from '../images/tempbg.png'
import { useNavigate } from "react-router-dom";

function StoreDetails({ data }) {
    const { storeId } = useParams();
    const displayedData = data.stores.filter((store) => {
        return Number(store.store_id) === Number(storeId);
    });

    const navigate = useNavigate();

    function handleClick() {
        navigate("/stores");
    }

    return (
        <div className="details">
            <img src={tempImg} alt="tempImg" />
            {displayedData.map((store) => (
                <div className="contentContainer">
                    <h2>{store.store_name}</h2>
                    <p>{store.description}</p>
                    <p>location: {store.location}</p>
                    <p>date: {store.date}</p>
                    <p>time: {store.time}</p>
                </div>
            ))}
            <button onClick={handleClick}>Back</button>
        </div>
    );
}

export default StoreDetails;