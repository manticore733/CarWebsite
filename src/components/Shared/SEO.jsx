import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, ogTitle, ogDescription, ogImage, ogUrl, ogType = 'website', twitterHandle = '@telescarhire' }) => {
    const siteTitle = "Tele's Car Hire";
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = "Experience the ultimate luxury car rental with Tele's Car Hire. Your premium automotive journey in paradise begins here.";
    const metaDescription = description || defaultDescription;
    const defaultImage = "https://example.com/og-image.jpg"; // Replace with actual URL when available
    const metaImage = ogImage || defaultImage;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph tags */}
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={ogUrl || window.location.href} />
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content={siteTitle} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || metaDescription} />
            <meta name="twitter:image" content={metaImage} />
            {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

            {/* Canonical link */}
            <link rel="canonical" href={ogUrl || window.location.href} />
        </Helmet>
    );
};

export default SEO;
