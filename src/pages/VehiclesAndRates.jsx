import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function VehiclesAndRates() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>Vehicles and Rates | CarWebsite</title>
                <meta name="description" content="View our fleet of premium vehicles and daily rental rates." />
            </Helmet>

            <div className="content-wrapper glass-panel mt-10">
                <h1 className="gradient-text text-4xl font-bold mb-6">Vehicles & Rates</h1>
                <p className="text-xl text-[#a0a0b0] mb-8">
                    Browse our extensive collection of luxury and performance vehicles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 border border-[var(--glass-border)] rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">Luxury Sedan</h3>
                        <p className="text-[var(--accent-color)] text-xl mb-4">$200 / day</p>
                        <button className="primary-btn text-sm py-2 px-4">Book Now</button>
                    </div>
                    <div className="p-6 border border-[var(--glass-border)] rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">Sports Coupe</h3>
                        <p className="text-[var(--accent-color)] text-xl mb-4">$450 / day</p>
                        <button className="primary-btn text-sm py-2 px-4">Book Now</button>
                    </div>
                    <div className="p-6 border border-[var(--glass-border)] rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">Premium SUV</h3>
                        <p className="text-[var(--accent-color)] text-xl mb-4">$300 / day</p>
                        <button className="primary-btn text-sm py-2 px-4">Book Now</button>
                    </div>
                    <div className="p-6 border border-[var(--glass-border)] rounded-xl hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                        <h3 className="text-2xl font-bold text-white mb-2">Executive Van</h3>
                        <p className="text-[var(--accent-color)] text-xl mb-4">$250 / day</p>
                        <button className="primary-btn text-sm py-2 px-4">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
