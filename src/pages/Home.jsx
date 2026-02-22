import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeHero from '../components/Home/HomeHero';
import HomeIntro from '../components/Home/HomeIntro';
import HomeHowWorks from '../components/Home/HomeHowWorks';
import HomeFeatures from '../components/Home/HomeFeatures';
import HomeCarRates from '../components/Home/HomeCarRates';

export default function Home() {
    return (
        <div className="fade-in">
            <Helmet>
                <title>Tele's Car Hire | Your Best Ride in Paradise</title>
                <meta name="description" content="Experience the ultimate luxury car rental with Tele's Car Hire. Your premium automotive journey in paradise begins here." />
                <link rel="canonical" href="https://example.com/" />
            </Helmet>

            <HomeHero />
            <HomeIntro />
            <HomeFeatures />
            <HomeHowWorks />
            <HomeCarRates />
        </div>
    );
}
