import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeCarRates() {
    const cars = [
        { name: "Luxury Sedan", price: "$200/day" },
        { name: "Sports Coupe", price: "$450/day" },
        { name: "Premium SUV", price: "$300/day" },
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto mb-10">
            <div className="flex justify-between items-end mb-10">
                <h2 className="text-3xl font-bold text-white">Featured Rates</h2>
                <Link to="/vehicles" className="text-[var(--accent-color)] hover:underline">View All Vehicles &rarr;</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cars.map((car, i) => (
                    <div key={i} className="glass-panel p-6 flex flex-col justify-between h-48 hover:-translate-y-1 transition-transform border-t-2 border-t-[var(--accent-color)]">
                        <h3 className="text-2xl font-bold text-white">{car.name}</h3>
                        <div className="mt-auto">
                            <p className="text-xl font-light text-[var(--accent-color)]">{car.price}</p>
                            <button className="mt-4 w-full py-2 bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.1)] transition-colors rounded text-white font-medium border border-[var(--glass-border)]">Details</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
