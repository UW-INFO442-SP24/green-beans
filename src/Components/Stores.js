import React, { useState } from 'react';
import Search from './Search';
import { useNavigate } from "react-router-dom";

import Filter from './Filter';
import tempData from '../TempData/temp.json'

function CreateCard({ store_id, storeName }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/stores/" + store_id);

    }

    return (
        <div className="card">
            <p>{storeName}</p>
            <button key={store_id} className="btn btn-primary" onClick={handleClick}>More Details</button>
        </div>
    )
}

// For search
function getFilteredStores(query, items) {
    if (!query) {
        return items;
    }
    return items.filter(store => store.store_name.toLowerCase().includes(query.toLowerCase()));
}

function Stores({ data }) {
    // for search
    const [query, setQuery] = useState("");
    const filteredStores = getFilteredStores(query, data.stores);

    return (
        <div className="eventPage">
            <Search query={query} setQuery={setQuery} data={data} />

            <div className="filters">
                {tempData.stores_filter.map((e) => {
                    return (
                        <Filter key={e.filter_name} filter_name={e.filter_name} filter_options={e.filter_options} />
                    )
                })}
            </div>

            <div className="eventCards">
                {
                    filteredStores.map(store => (
                        <CreateCard key={store.store} store_id={store.store_id} storeName={store.store_name} />
                    ))
                }

            </div>
        </div>
    )
}

export default Stores;