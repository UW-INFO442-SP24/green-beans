import React from 'react';
import tempData from '../TempData/temp.json';
import tempImg from '../images/tempimg.jpeg';
import { useParams } from 'react-router-dom';

function StoreDetails() {
    const { storeId } = useParams();
    const displayedData = tempData.stores.filter((store) => {
        return Number(store.store_id) === Number(storeId);
    });

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
        </div>
    );
}

export default StoreDetails;