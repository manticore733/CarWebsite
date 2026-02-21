import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeHero from '../components/Home/HomeHero';
import HomeIntro from '../components/Home/HomeIntro';
import HomeBenefits from '../components/Home/HomeBenefits';
import HomeHowWorks from '../components/Home/HomeHowWorks';
import HomeCarRates from '../components/Home/HomeCarRates';
import HomeFeatures from '../components/Home/HomeFeatures';

export default function Home() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>CarWebsite - Premium Auto Experience</title>
                <meta name="description" content="Discover the best luxury and sports cars at CarWebsite. Your premium automotive experience starts here." />
                <link rel="canonical" href="https://example.com/" />
            </Helmet>

            <HomeHero />
            <HomeIntro />
            <HomeCarRates />
            <HomeHowWorks />
            <HomeBenefits />
            {/* Keeping the old HomeFeatures at the bottom or it can be replaced by benefits */}
            <HomeFeatures />
        </div>
    );
}
