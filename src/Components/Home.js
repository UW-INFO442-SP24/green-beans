import React from 'react';
import background from '../images/background.png'

function Home() {
    return (
        <div className="home">
            <div className="homeContainer">
                <img src={background} alt="background" />
                <div className='centered'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
            </div>
        </div>
    )
}

export default Home;