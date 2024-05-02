import React from 'react';
import background from '../images/background.png'
import { useNavigate } from "react-router-dom";

function CreateCards({ tab_name, description }) {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/" + tab_name);
    }

    return (
        <div className="homeCard">
            <h1>{tab_name}</h1>
            <p>{description}</p>
            <button type="button" class="btn btn-outline-dark" onClick={handleClick}>GO HERE</button>
        </div>
    )
}

function Home({ data }) {
    return (
        <div className="home">
            <div className="topHalf">
                <div className="homeContainer">
                    <img src={green} alt="green" />
                    <div className='centered'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                </div>
                <div className="homeContainer">
                    <div className='centered'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</div>
                </div>
            </div>
            <div className="bottomHalf">
                <p className="whatCanIDo">WHAT CAN I DO?</p>
                <div className="homeCardContainer">
                    {
                        data.descriptions.map(tab => (
                            <CreateCards key={tab.tab_name} tab_name={tab.tab_name} description={tab.description} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;