import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <Link className="navbar-brand" to="/">
                <img src={logo} alt="logo" style={{ maxHeight: '60px' }} />
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">EVENTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/stores">STORES</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/quiz">QUIZ</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">ABOUT</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
