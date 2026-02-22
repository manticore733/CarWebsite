import React from 'react';
import SEO from '../components/Shared/SEO';
import HomeHero from '../components/Home/HomeHero';
import HomeIntro from '../components/Home/HomeIntro';
import HomeHowWorks from '../components/Home/HomeHowWorks';
import HomeFeatures from '../components/Home/HomeFeatures';
import HomeCarRates from '../components/Home/HomeCarRates';

export default function Home() {
    return (
        <div className="fade-in">
            <SEO
                title="Your Best Ride in Paradise"
                description="Experience the ultimate luxury car rental with Tele's Car Hire. Your premium automotive journey in paradise begins here."
                keywords="car rental, luxury cars, paradise car hire, Suzuki Swift rental"
            />

            <HomeHero />
            <HomeIntro />
            <HomeFeatures />
            <HomeHowWorks />
            <HomeCarRates />
        </div>
    );
}
