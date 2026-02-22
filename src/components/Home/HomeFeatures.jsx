import React from 'react';

export default function HomeFeatures() {
    const features = [
        {
            title: "Performance",
            desc: "Engineered for speed and agility. Experience raw power without compromise.",
            image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "Luxury",
            desc: "Uncompromising comfort and prestige. Travel in unparalleled style.",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
        },
        {
            title: "Innovation",
            desc: "State-of-the-art technology at your fingertips, anticipating your needs.",
            image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1200",
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col items-center mb-[80px] text-center">
                    <span className="section-subtitle">Core Values</span>
                    <h2 className="section-title mb-[20px]">Driven by excellence</h2>
                    <p className="text-secondary text-lg md:text-xl max-w-4xl leading-relaxed font-semibold">
                        We push the boundaries of what's possible in luxury mobility, focusing on three core pillars that define our legacy.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((f, i) => (
                        <div key={i} className="group relative fleet-card">
                            <div className="relative aspect-[3/4] overflow-hidden">
                                <img
                                    src={f.image}
                                    alt={f.title}
                                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="image-overlay opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-between z-10 transition-transform duration-500 ease-out group-hover:translate-y-[-10px]">
                                    <div className="flex justify-end w-full">
                                        <span className="text-6xl md:text-[80px] font-black text-[#d6d3d1] leading-none">0{i + 1}</span>
                                    </div>
                                    <div className="w-full">
                                        <h3 className="text-4xl md:text-[56px] font-black !text-[#d6d3d1] tracking-tighter mb-4 leading-none">{f.title}</h3>
                                        <p className="pr-4 text-[#d6d3d1] text-lg leading-relaxed opacity-0 max-h-0 overflow-hidden group-hover:max-h-[100px] group-hover:opacity-100 transition-all duration-500 ease-in-out font-medium">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
