import React from 'react';

export default function HomeBenefits() {
    const benefits = [
        { title: "24/7 Support", desc: "Our concierge team is available around the clock to assist you." },
        { title: "Flexible Rentals", desc: "Rent by the hour, day, or month with custom packages." },
        { title: "Insurance Included", desc: "Drive with peace of mind knowing you are fully covered." }
    ];

    return (
        <section className="py-16 px-6 bg-[rgba(255,255,255,0.02)] border-y border-[rgba(255,255,255,0.05)]">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center text-white">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="glass-panel p-8 text-center hover:-translate-y-2 transition-transform">
                            <h3 className="text-xl font-bold mb-4 text-[var(--accent-color)]">{b.title}</h3>
                            <p className="text-[#a0a0b0]">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
