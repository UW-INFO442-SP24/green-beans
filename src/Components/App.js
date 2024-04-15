import React from 'react';
import Navbar from './Nav';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import Events from './Events';
import Stores from './Stores';
import Quiz from './Quiz';
import About from './About';
import Error from './Error';

function App() {
    return (
        <div>
            <header>
                <h1>Placeholder</h1>
                <Navbar />
            </header>

            <div className="page-container">
                <div className="content-wrap">

                    <main>
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="events" element={<Events />} />
                            <Route path="stores" element={<Stores />} />
                            <Route path="quiz" element={<Quiz />} />
                            <Route path="about" element={<About />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </main>
                </div>
                <footer>
                    <p>&copy; placeholder</p>
                </footer>
            </div>
        </div>
    )
}

export default App;