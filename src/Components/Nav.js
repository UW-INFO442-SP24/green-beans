import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/tempimg.jpeg';

function Navbar() {
    return (
        <div>
            <nav>
                <ul className="nav">
                    <li className="nav-logo"><Link className="text-decoration-none" to="/" >Thrift Titans</Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/events" >Events</Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/stores" >Stores</Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/quiz" >Quiz</Link></li>
                    <li className="nav-item"><Link className="text-decoration-none" to="/about" >About</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;