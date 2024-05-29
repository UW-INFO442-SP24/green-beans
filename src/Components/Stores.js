import React, { useState, useEffect } from 'react';
import Search from './Search';
import { useNavigate } from "react-router-dom";

import Filter from './Filter';
import filterNames from '../TempData/filterNames.json'

function CreateCard({ store_id, storeName, storeType, storePrice, storeImg }) {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/stores/" + store_id);
    }

    return (
        <div className="card">
            <img src={storeImg} alt="store" />
            <div className="card-content">
                <h1>{storeName}</h1>
                <p>{storePrice} | {storeType}</p>
            </div>
            <button key={store_id} className="btn btn-primary" onClick={handleClick}>MORE DETAILS</button>
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
            filteredItems = filteredItems.filter(store => {
                const storeValue = store[filterName.toLowerCase()];
                return storeValue && storeValue.toLowerCase() === filterValue.toLowerCase();
            });
        }
    });

    return filteredItems;
}


function Stores({ data }) {
    // for search
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleFilterChange = (filterName, filterValue) => {
        setFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (filterValue === '') {
                delete newFilters[filterName.toLowerCase()];
            } else {
                newFilters[filterName.toLowerCase()] = filterValue;
            }
            return newFilters;
        });
    };

    const filteredStores = getFilteredStores(query, filters, data.stores);

    return (
        <div className="storePage">
            <div className="banner">
                <h1>STORES</h1>
                <p>Here are some thrift stores in the Seattle area to get you started on your sustainable journey!!</p>
            </div>

            <div className="inputs">
                <Search setQuery={setQuery} data={data} />

                <div className="filters">
                    {filterNames.stores_filter.map((e) => {
                        return (
                            <Filter key={e.filter_name} filter_name={e.filter_name} filter_options={e.filter_options} onFilterChange={handleFilterChange} setFilters={setFilters} />
                        )
                    })}
                </div>
            </div>

            <div className="storeCards">
                {
                    filteredStores.map(store => (
                        <CreateCard key={store.store} store_id={store.store_id} storeName={store.store_name} storeType={store.type} storePrice={store.price_range} storeImg={store.image_url} />
                    ))
                }

            </div>
        </div>
    )
}

export default Stores;