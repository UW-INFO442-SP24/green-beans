import React, { useState, useEffect } from 'react';
import Navbar from './Nav';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Events from './Events';
import Stores from './Stores';
import Quiz from './Quiz';
import About from './About';
import EventDetails from './EventDetails';
import StoreDetails from './StoreDetails';
import Error from './Error';

import { onValue, ref } from 'firebase/database';

function App({ database }) {
    const [data, setData] = useState({
        events: [],
        stores: [],
        descriptions: [],
        quiz: []
    });

    useEffect(() => {
        const dataRef = ref(database);
        onValue(dataRef, (snapshot) => {
            setData(snapshot.val());
        });
    }, [database])

    return (
        <div>
            <header>
                <Navbar />
            </header>

            <div className="page-container">
                <div className="content-wrap">
                    <main>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="events" element={<Events data={data} />} />
                            <Route path="stores" element={<Stores data={data} />} />
                            <Route path="quiz" element={<Quiz data={data} />} />
                            <Route path="about" element={<About />} />
                            <Route path="events/:eventId" element={<EventDetails data={data} />} />
                            <Route path="stores/:storeId" element={<StoreDetails data={data} />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </main>
                </div>
                <footer className="footer">
                    <p>&copy; placeholder</p>
                </footer>
            </div>
        </div>
    )
}

export default App;