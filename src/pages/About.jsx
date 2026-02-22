import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutOverview from '../components/AboutUs/AboutOverview';

export default function About() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>About Tele's Car Hire | Our Story and Mission</title>
                <meta name="description" content="Discover the story behind Tele's Car Hire. Our mission is to provide premium, reliable vehicle rentals for the ultimate island experience in paradise." />
                <link rel="canonical" href="https://example.com/about" />
            </Helmet>

            <AboutOverview />
        </div>
    );
}
