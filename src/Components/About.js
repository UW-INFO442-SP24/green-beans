import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import chal1 from '../images/about-chal-1.png'
import chal2 from '../images/about-chal-2.png'
import chal3 from '../images/about-chal-3.png'
import how1 from '../images/about-how-1.png'
import how2 from '../images/about-how-2.png'
import abt1 from '../images/about-img-1.png'
import redef from '../images/about-redef.png'
import YouTube from 'react-youtube';

function About() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="about">
            <div className="about-us">
                <h1>ABOUT US</h1>
                <img src={abt1} alt="stacked effect on an imagage of a woman wearing vintage clothing" />
            </div>
            <div className="about-problem-statement">
                <p>How might we help budget-conscious Gen Z students in Seattle overcome barriers to second-hand shopping so they can save money, contribute to the environment, and participate in sustainable practices?</p>
            </div>
            <div className="about-challenges">
                <h1>Challenges Today</h1>
                <div className="all-about-chal-cards">
                    <div className="about-chal-cards">
                        <img src={chal1} alt="woman with many shopping bags" />
                        <p>Reliance on Fast Fashion Increases Textile Waste</p>
                    </div>
                    <div className="about-chal-cards">
                        <img src={chal2} alt="woman on her computer with headphones on" />
                        <p>Lack of Awareness & Information on Thrifting</p>
                    </div>
                    <div className="about-chal-cards">
                        <img src={chal3} alt="woman laying down on a pile of clothes" />
                        <p>Social Perceptions Stigmatize Second-Hand Goods</p>
                    </div>
                </div>
            </div>
            <div className="about-quote">
                <p className="about-quote-quote">“There are about 35,970 tons of textiles in the King County & Seattle annual waste streams combined”</p>
                <p className="about-quote-ref">- Seattle Public Utilities</p>
            </div>
            <div className="about-redef">
                <img src={redef} alt="resuable canvas bag with recylcing symbol" />
                <div className="for-about-redef-button">
                    <div className="about-redef-content">
                        <h1>Redefining Style</h1>
                        <h2>Overcoming barriers to sustainable fashion </h2>
                        <p>Our goal is to encourage using resources efficiently, reducing waste, and promoting a shift towards more sustainable practices in terms of how we approach fashion consumption, fostering a culture that values reusing and recycling clothing to minimize environmental impact.</p>
                    </div>
                    <button><a href="https://www.un.org/sustainabledevelopment/sustainable-consumption-production/" target="_blank" className="text-decoration-none">More About SDG 12</a></button>
                </div>

            </div>
            <div className="about-help">
                <h1>How We Help</h1>
                <div className="about-help-card-format">
                    <div className="about-help-cards">
                        <img src={how1} alt="clothes on clothing racks within a store" />
                        <button onClick={() => navigate("/stores")}>Access to Thrift Shop Information</button>
                    </div>
                    <div className="about-help-cards">
                        <img src={how2} alt="many people at a busy street market" />
                        <button onClick={() => navigate("/events")}>Updates About Local Events</button>

                    </div>
                </div>
            </div>
            <div className="video-container">
                <YouTube videoId="CjgWWmgUMa0" className="youtube-video" />
            </div>
        </div>
    )
}

export default About;