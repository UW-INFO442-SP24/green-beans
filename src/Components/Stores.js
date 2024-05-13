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

// For search and filters
function getFilteredStores(query, filters, items) {
    let filteredItems = items;

    if (query) {
        filteredItems = filteredItems.filter(store => store.store_name.toLowerCase().includes(query.toLowerCase()));
    }

    Object.keys(filters).forEach(filterName => {
        const filterValue = filters[filterName];
        if (filterValue && filterValue !== filterName) {
            filteredItems = filteredItems.filter(store => store[filterName.toLowerCase()] === filterValue);
        }
    });

    return filteredItems;
}

function Stores({ data }) {
    // for search
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({});

    const handleFilterChange = (filterName, filterValue) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName.toLowerCase()]: filterValue,
        }));
    };

    const filteredStores = getFilteredStores(query, filters, data.stores);

    return (
        <div className="eventPage">
            <Search setQuery={setQuery} data={data} />

            <div className="filters">
                {tempData.stores_filter.map((e) => {
                    return (
                        <Filter key={e.filter_name} filter_name={e.filter_name} filter_options={e.filter_options} onFilterChange={handleFilterChange} />
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