import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="about">
            <div className="about-us">
                <h1>ABOUT US</h1>
                <img src={abt1} alt="4 images stacked" />
            </div>
            <div className="about-problem-statement">
                <p>How might we help budget-conscious Gen Z students in Seattle overcome barriers to second-hand shopping so they can save money, contribute to the environment, and participate in sustainable practices?</p>
            </div>
            <div className="about-challenges">
                <h1>Challenges Today</h1>
                <div className="all-about-chal-cards">
                    <div className="about-chal-cards">
                        <img src={chal1} alt="chal1" />
                        <p>Reliance on Fast Fashion Increases Textile Waste</p>
                    </div>
                    <div className="about-chal-cards">
                        <img src={chal2} alt="chal2" />
                        <p>Lack of Awareness & Information on Thrifting</p>
                    </div>
                    <div className="about-chal-cards">
                        <img src={chal3} alt="chal3" />
                        <p>Social Perceptions Stigmatize Second-Hand Goods</p>
                    </div>
                </div>
            </div>
            <div className="about-quote">
                <p className="about-quote-quote">“There are about 35,970 tons of textiles in the King County & Seattle annual waste streams combined”</p>
                <p className="about-quote-ref">- Seattle Public Utilities</p>
            </div>
            <div className="about-redef">
                <img src={redef} alt="redef" />
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
                        <img src={how1} alt="how1" />
                        <p>Access to Thrift Shop Information</p>
                    </div>
                    <div className="about-help-cards">
                        <img src={how2} alt="how2" />
                        <p>Updates About Local Events</p>
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