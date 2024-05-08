import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
    return (
        <div>
            <nav>
                <ul className="nav">
                    <li className="nav-logo"><Link className="text-decoration-none" to="/" ><img src={logo} alt="logo" /></Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/events" >EVENTS</Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/stores" >STORES</Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/quiz" >QUIZ</Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/about" >ABOUT</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;