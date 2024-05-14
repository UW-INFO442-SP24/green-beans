import React from 'react';
import bg1 from '../images/about-bg-1.png'
import bg2 from '../images/about-bg-2.png'
import chal1 from '../images/about-chal-1.png'
import chal2 from '../images/about-chal-2.png'
import chal3 from '../images/about-chal-3.png'
import how1 from '../images/about-how-1.png'
import how2 from '../images/about-how-2.png'
import abt1 from '../images/about-img-1.png'
import redef from '../images/about-redef.png'

function About() {
    return (
        <div className="about">
            <div className="about-us">
                <h1>ABOUT US</h1>
                <img src={abt1} alt="4 images stacked" />
            </div>
            <div className="about-problem-statement">
                <p>How might we help budget-conscious Gen Z students in Seattle overcome barriers to second-hand shopping, so they can save money, contribute to the environment, and participate in sustainable practices?</p>
            </div>
            <div className="about-challenges">
                <h1>Challenges Today</h1>
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
            <div className="about-quote">
                <p>“There are about 35,970 tons of textiles in the King County & Seattle annual waste streams combined”</p>
                <p>- Seattle Public Utilities</p>
            </div>
            <div className="about-redef">
                <img src={redef} alt="redef" />
                <div className="about-redef-content">
                    <h1>Redefining Style</h1>
                    <h2>Overcoming barriers to sustainable fashion </h2>
                    <p>Our goal is to encourage using resources efficiently, reducing waste, and promoting a shift towards more sustainable practices in terms of how we approach fashion consumption, fostering a culture that values reusing and recycling clothing to minimize environmental impact.</p>
                    <button>More About SDG 12</button>
                </div>

            </div>
            <div className="about-help">
                <h1>How We Help</h1>
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
    )
}

export default About;