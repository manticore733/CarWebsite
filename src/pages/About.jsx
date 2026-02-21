import React from 'react';
import { Helmet } from 'react-helmet-async';
import AboutOverview from '../components/AboutUs/AboutOverview';

export default function About() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>About Us | CarWebsite</title>
                <meta name="description" content="Learn more about CarWebsite, our mission to provide top-tier automotive experiences, and our history." />
                <link rel="canonical" href="https://example.com/about" />
            </Helmet>

            <AboutOverview />
        </div>
    );
}
