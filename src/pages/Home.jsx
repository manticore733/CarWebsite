import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeHero from '../components/Home/HomeHero';
import HomeIntro from '../components/Home/HomeIntro';
import HomeBenefits from '../components/Home/HomeBenefits';
import HomeWhyUs from '../components/Home/HomeWhyUs';
import HomeHowWorks from '../components/Home/HomeHowWorks';
import HomeFeatures from '../components/Home/HomeFeatures';

export default function Home() {
    return (
        <div className="fade-in">
            <Helmet>
                <title>Tele's Car Hire | Your Best Ride in Paradise</title>
                <meta name="description" content="Experience the ultimate luxury car rental with Tele's Car Hire. Your premium automotive journey in paradise begins here." />
                <link rel="canonical" href="https://example.com/" />
            </Helmet>

            <HomeHero />

            <div className="home-sections-container page-container">
                <HomeIntro />
                <HomeWhyUs />
                <HomeHowWorks />
                <HomeBenefits />
                {/* Keeping the old HomeFeatures at the bottom or it can be replaced by benefits */}
                <HomeFeatures />
            </div>
        </div>
    );
}
