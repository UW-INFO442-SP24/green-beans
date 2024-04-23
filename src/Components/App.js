import React from 'react';
import Navbar from './Nav';
import { Route, Routes } from 'react-router-dom';

import tempData from '../TempData/temp.json';

import Home from './Home';
import Events from './Events';
import Stores from './Stores';
import Quiz from './Quiz';
import About from './About';
import EventDetails from './EventDetails';
import StoreDetails from './StoreDetails';
import Error from './Error';

function App() {

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
                            <Route path="events" element={<Events tempData={tempData} />} />
                            <Route path="stores" element={<Stores tempData={tempData} />} />
                            <Route path="quiz" element={<Quiz />} />
                            <Route path="about" element={<About />} />
                            <Route path="events/:eventId" element={<EventDetails />} />
                            <Route path="stores/:storeId" element={<StoreDetails />} />
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