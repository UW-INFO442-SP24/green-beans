import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import tempImg from '../../public/store_images/store_1.jpg'
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <button className="back-button" onClick={handleClick}>Back</button>
            <div className="details">
                {displayedData.map((store) => (
                    <div>
                        <img src={store.image_url} alt="Store" />
                        <div className="contentContainer">
                            <h2>{store.store_name}</h2>
                            <h4 className="address">{store.location}</h4>
                            <div className="tags">
                                <p><span className="tag">{store.price_range}</span></p>
                                <p><span className="tag">{store.type}</span></p>
                            </div>
                            <p className="details-description">{store.description}</p>

                            {/* Amazon placeholder website link */}
                            <button className="visit-button" onClick={() => window.open(store.website, '_blank')}>Visit Website</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StoreDetails;