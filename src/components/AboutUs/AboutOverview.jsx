import React from 'react';

export default function AboutOverview() {
    return (
        <div className="content-wrapper glass-panel">
            <h1 className="gradient-text">About CarWebsite</h1>
            <p className="lead-text">
                Founded with a passion for automotive excellence, CarWebsite is dedicated to bringing you the finest selection of vehicles. We believe that driving is more than just transportation; it's an experience.
            </p>

            <div className="mission-vision">
                <div className="info-block">
                    <h3>Our Mission</h3>
                    <p>To redefine the automotive retail experience through innovation, transparency, and unparalleled customer service.</p>
                </div>
                <div className="info-block">
                    <h3>Our Vision</h3>
                    <p>To be the world's most trusted destination for premium and luxury vehicles.</p>
                </div>
            </div>
        </div>
    );
}
