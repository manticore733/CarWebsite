import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>About Us | CarWebsite</title>
                <meta name="description" content="Learn more about CarWebsite, our mission to provide top-tier automotive experiences, and our history." />
                <link rel="canonical" href="https://example.com/about" />
            </Helmet>

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
        </div>
    );
}
