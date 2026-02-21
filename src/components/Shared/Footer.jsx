import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer">
            <div style={{ marginBottom: '1rem' }}>
                <Link to="/tnc" style={{ color: 'var(--text-secondary)' }}>Terms & Conditions</Link>
            </div>
            <p>&copy; 2026 CarWebsite. All Rights Reserved.</p>
        </footer>
    );
}
