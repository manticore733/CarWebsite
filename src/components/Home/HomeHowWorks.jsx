import React from 'react';

export default function HomeHowWorks() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-white">How It Works</h2>
            <div className="flex flex-col md:flex-row gap-8 relative before:absolute before:inset-0 before:top-1/2 before:h-0.5 before:bg-[var(--glass-border)] before:-z-10 hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: '1', title: 'Select Vehicle', desc: 'Browse our extensive collection.' },
                        { step: '2', title: 'Book Dates', desc: 'Choose your timeframe and options.' },
                        { step: '3', title: 'Drive Away', desc: 'Pick up your keys and hit the road.' }
                    ].map((item, i) => (
                        <div key={i} className="text-center bg-[var(--bg-color)] p-4 rounded-xl">
                            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[var(--gradient-1)] to-[var(--gradient-2)] rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-[#a0a0b0]">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
