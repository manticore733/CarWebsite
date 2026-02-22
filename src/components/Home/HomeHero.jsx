import React from 'react';

export default function HomeHero() {
    const carImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200";

    return (
        <section className="hero-section">
            <div className="decorative-glow-1"></div>
            <div className="decorative-glow-2"></div>
            <div className="hero-content fade-in">
                <div className="hero-image-container">
                    <img src={carImage} alt="Premium Car" className="hero-car-image" />
                </div>
                <h1 className="gradient-text">Tele's Car Hire</h1>
                <p className="subtitle">Your best ride in paradise</p>
                <button className="primary-btn pulse-glow">View our Collection</button>
            </div>
        </section>
    );
}
