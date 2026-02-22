import React from 'react';

export default function HomeIntro() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col items-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="section-subtitle text-center">Intro</span>
                        <h2 className="section-title text-center mb-[80px]">Your best ride in Paradise</h2>
                        <div className="max-w-4xl mx-auto mt-12">
                            <p className="text-lg md:text-xl text-secondary leading-relaxed font-semibold text-center">
                                We provide more than just a car; we provide a lifestyle. Our fleet consists of the most exclusive and meticulously maintained vehicles in the world. Whether for business or pleasure, experience the road like never before. Our commitment to excellence ensures every journey is unforgettable.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
