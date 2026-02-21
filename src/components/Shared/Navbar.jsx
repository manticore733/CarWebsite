import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    CarWebsite
                </Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/vehicles">Vehicles & Rates</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
            </div>
        </nav>
    );
}
