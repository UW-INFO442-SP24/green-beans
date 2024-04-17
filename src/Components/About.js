import React from 'react';
import aestheticImg from '../images/youaremysunshine.jpg';

function About() {
    return (
        <div>
            <div className="topImgContainer">
                <img src={aestheticImg} alt="aestheticImg" className="aestheticImg" />
            </div>
            <div className="bottomImgContainer">
                <img src={aestheticImg} alt="aestheticImg" className="bottomContainerItem" />
                <img src={aestheticImg} alt="aestheticImg" className="bottomContainerItem" />
            </div>
        </div>
    )
}

export default About;