import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>CarWebsite - Premium Auto Experience</title>
                <meta name="description" content="Discover the best luxury and sports cars at CarWebsite. Your premium automotive experience starts here." />
                <link rel="canonical" href="https://example.com/" />
            </Helmet>

            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="gradient-text">Drive the Future</h1>
                    <p className="subtitle">Explore our collection of premium vehicles designed for the ultimate driving experience.</p>
                    <button className="primary-btn pulse-glow">View Collection</button>
                </div>
            </section>

            <section className="features-section">
                <div className="feature-card glass-panel">
                    <h2>Luxury</h2>
                    <p>Uncompromising comfort and prestige.</p>
                </div>
                <div className="feature-card glass-panel">
                    <h2>Performance</h2>
                    <p>Engineered for speed and agility.</p>
                </div>
                <div className="feature-card glass-panel">
                    <h2>Innovation</h2>
                    <p>State-of-the-art technology at your fingertips.</p>
                </div>
            </section>
        </div>
    );
}
