import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css'; // <-- 1. Import module styles

export default function Navbar() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        // 2. Combine the base .navbar class with the conditional .home or .default class
        <nav className={`${styles.navbar} ${isHome ? styles.home : styles.default}`}>

            <div className={styles.logo}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Tele's Car Hire
                </Link>
            </div>

            <div className={styles['nav-links']}>
                {/* <Link to="/">Vehicles</Link> */}
                <Link to="/vehicles">Vehicles</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">ContactUs</Link>
                <Link to="/tnc">Terms & Conditions</Link>
            </div>

            {/* <div className={styles['nav-actions']}>
                <button className={styles['icon-btn']} aria-label="Support">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                </button>
                <button className={styles['icon-btn']} aria-label="Region">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </button>
                <button className={styles['icon-btn']} aria-label="Account">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </button>
            </div> */}
        </nav>
    );
}