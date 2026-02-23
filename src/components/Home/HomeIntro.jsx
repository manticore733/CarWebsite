import React from 'react';

export default function HomeIntro() {
    return (
        <section className="section-padding bg-white">
            <div className="container-custom">
                <div className="flex flex-col items-center">
                    <div className="max-w-4xl mx-auto w-full">
                        <span className="section-subtitle text-center">Welcome</span>
                        <h2 className="section-title text-center mb-[80px]">Your best ride in Paradise</h2>
                        <div className="max-w-4xl mx-auto mt-12">
                            <p className="text-lg md:text-xl text-secondary leading-relaxed font-semibold text-center">
                                Welcome to Tele’s Car Hire, your premier choice for transportation solutions in Seychelles. We offer you the best ride whether you’re here for a tropical vacation, business endeavors or local exploration. You can rely on us for a reliable and affordable vehicle. Start your best journey with us today!                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
