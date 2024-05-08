import React from 'react';
import quizImg from '../images/home-quiz.png'
import arrow from '../images/arrow-down.png'
import storesImg from '../images/home-stores.png'
import eventsImg from '../images/home-events.png'
import aboutImg from '../images/home-about.png'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="home-quiz">
                <div className="home-quiz-without-arrow">
                    <img src={quizImg} alt="quizImg" />
                    <div className="home-quiz-content">
                        <h1>DISCOVER YOUR ECO FRIENDLY STYLE</h1>
                        <button onClick={() => navigate("/quiz")}>TAKE THE QUIZ</button>
                    </div>
                </div>
                <img src={arrow} alt="arrow" className="arrow" />
            </div>
            <div className="home-stores">
                <h1>STORES</h1>
                <div className="home-stores-without-title">
                    <img src={storesImg} alt="storesImg" />
                    <div className="home-stores-content">
                        <p>Discover Seattle's sustainable fashion gems with our curated list of thrift and vintage stores! </p>
                        <button onClick={() => navigate("/stores")}>EXPLORE STORES</button>
                    </div>
                </div>
            </div>
            <div className="home-events">
                <h1>EVENTS</h1>
                <div className="home-events-without-title">
                    <img src={eventsImg} alt="eventsImg" />
                    <div className="home-events-content">
                        <p>Dive into unique events and experiences in Seattle that support local businesses and promote eco-friendly living!</p>
                        <button onClick={() => navigate("/events")}>EXPLORE EVENTS</button>
                    </div>
                </div>
            </div>
            <div className="home-about">
                <img src={aboutImg} alt="eventsImg" />
                <div className="home-about-content">
                    <h1>ABOUT US</h1>
                    <p>Explore the impacts of fast fashion and uncover the benefits of sustainable shopping.</p>
                    <button onClick={() => navigate("/about")}>LEARN MORE</button>
                </div>
            </div>
        </div >
    )
}

export default Home;