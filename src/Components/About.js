import React from 'react';
import aestheticImg from '../images/tempimg.jpeg';

function About() {
    return (
        <div>
            <div className="topImgContainer">
                <img src={aestheticImg} alt="aestheticImg" className="aestheticImg" />
            </div>
            <div className="bottomContainer">
                <img src={aestheticImg} alt="aestheticImg" className="bottomContainerItem" />
                <div className="bottomContainerItem">a descriptive paragraph</div>
            </div>
        </div>
    )
}

export default About;