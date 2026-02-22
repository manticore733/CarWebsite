import React from 'react';

export default function HomeWhyUs() {
    return (
        <section className="py-20 text-white font-sans w-full bg-[#111111]">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-8 w-full">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between w-full mb-20 gap-10">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">Why us?</h2>
                        <p className="text-[#a0a0a0] text-sm lg:text-base leading-relaxed max-w-sm">
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Exercitation veniam consequat.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-wrap gap-8 md:gap-10 justify-start md:justify-end text-left items-start">
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-bold mb-2">100+</h3>
                            <p className="text-xs lg:text-sm text-[#a0a0a0]">Satisfied clients</p>
                        </div>
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-bold mb-2">10+</h3>
                            <p className="text-xs lg:text-sm text-[#a0a0a0] leading-snug">Years of<br />experience</p>
                        </div>
                        <div>
                            <h3 className="text-4xl lg:text-5xl font-bold mb-2">100+</h3>
                            <p className="text-xs lg:text-sm text-[#a0a0a0]">Sold cars</p>
                        </div>
                    </div>
                </div>

                {/* Content Rows */}
                <div className="flex flex-col w-full">

                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row w-full min-h-[450px] lg:min-h-[500px]">
                        {/* Image Half */}
                        <div className="w-full md:w-1/2 relative shrink-0 min-h-[350px]">
                            <img
                                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
                                alt="Dark car"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Half */}
                        <div className="w-full md:w-1/2 shrink-0 flex bg-transparent">
                            <div className="flex flex-col justify-center w-full px-6 py-12 md:px-12 lg:px-20 text-left">
                                <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">We believe that buying a car is more than just a business.</h3>
                                <p className="text-sm lg:text-[1.05rem] text-[#a0a0a0] mb-8 leading-relaxed">Start your adventure with a car that is more than just a means of transport - a loyal companion. Discover our range and find a car that suits your stories.</p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-[#e6203a] hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shrink-0 whitespace-nowrap">Buy a car</button>
                                    <button className="border border-[#777] hover:border-white text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors bg-transparent shrink-0 whitespace-nowrap">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row w-full min-h-[450px] lg:min-h-[500px]">
                        {/* Text Half (Desktop Left, Mobile Top) */}
                        <div className="w-full md:w-1/2 shrink-0 flex order-2 md:order-1 bg-transparent">
                            <div className="flex flex-col justify-center w-full px-6 py-12 md:px-12 lg:px-20 text-left">
                                <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">Pull right - we will sell your car</h3>
                                <p className="text-sm lg:text-[1.05rem] text-[#a0a0a0] mb-8 leading-relaxed">Your current car has completed its story with you. Let it start a new chapter with someone else. We'll help you sell it easily and fairly.</p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-[#e6203a] hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shrink-0 whitespace-nowrap">Sell my car</button>
                                </div>
                            </div>
                        </div>

                        {/* Image Half (Desktop Right, Mobile Bottom) */}
                        <div className="w-full md:w-1/2 relative shrink-0 min-h-[350px] order-1 md:order-2">
                            <img
                                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
                                alt="Scenic road"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col md:flex-row w-full min-h-[450px] lg:min-h-[500px]">
                        {/* Image Half */}
                        <div className="w-full md:w-1/2 relative shrink-0 min-h-[350px]">
                            <img
                                src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop"
                                alt="Black car in garage"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                        {/* Text Half */}
                        <div className="w-full md:w-1/2 shrink-0 flex bg-transparent">
                            <div className="flex flex-col justify-center w-full px-6 py-12 md:px-12 lg:px-20 text-left">
                                <h3 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">Quality over quantity</h3>
                                <p className="text-sm lg:text-[1.05rem] text-[#a0a0a0] mb-8 leading-relaxed">We set new standards in used car quality. Each vehicle is carefully selected and inspected to not only meet, but exceed your expectations.</p>
                                <div className="flex flex-wrap gap-4">
                                    <button className="bg-[#e6203a] hover:bg-red-700 text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors shrink-0 whitespace-nowrap">See catalog</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}