// import React, { useEffect, useRef } from 'react';

// export default function HomeHowWorks() {
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observerOptions = {
//             threshold: 0.1
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('reveal');
//                     entry.target.querySelectorAll('.reveal-text').forEach(el => el.classList.add('reveal'));
//                 }
//             });
//         }, observerOptions);

//         const steps = sectionRef.current?.querySelectorAll('.timeline-step');
//         steps?.forEach((step) => observer.observe(step));

//         return () => observer.disconnect();
//     }, []);

//     const steps = [
//         {
//             number: '01',
//             title: 'Choose your preferred car',
//             description: 'Browse through our collection and select the vehicle that suits your needs. ',
//             image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
//         },
//         {
//             number: '02',
//             title: 'Fill out our reservation form',
//             description: 'Enter your details and booking preferences to reserve your ride. Our process is seamless and designed for your convenience.',
//             image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800',
//         },
//         {
//             number: '03',
//             title: 'Receive confirmation email',
//             description: 'Get an instant confirmation with all booking details in your inbox. No waiting, no hassle—just pure driving pleasure.',
//             image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=800',
//         }
//     ];

//     return (
//         <section className="timeline-section relative" ref={sectionRef}>
//             <div className="container-custom">
//                 <div className="flex flex-col items-center mb-32 text-center">
//                     <span className="section-subtitle">Process</span>
//                     <h2 className="section-title">How we deliver excellence</h2>
//                 </div>

//                 <div className="relative">
//                     {/* Vertical Timeline Line */}
//                     <div className="timeline-line hidden md:block"></div>

//                     <div className="space-y-32 md:space-y-48 w-full">
//                         {steps.map((step, i) => (
//                             <div key={i} className={`timeline-step flex flex-col items-center gap-12 md:gap-24 w-full relative ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
//                                 {/* Text Content */}
//                                 <div className={`flex-1 w-full reveal-text ${i % 2 === 1 ? 'md:text-right' : 'text-left'}`}>
//                                     <div className={`flex flex-col ${i % 2 === 1 ? 'md:items-end' : 'items-start'}`}>
//                                         <span className="text-6xl md:text-8xl font-black text-black/5 mb-4 leading-none">{step.number}</span>
//                                         <h3 className="text-3xl md:text-5xl font-black mb-6 text-black leading-tight uppercase tracking-tighter">{step.title}</h3>
//                                         <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed font-semibold">{step.description}</p>
//                                     </div>
//                                 </div>

//                                 {/* Center Dot */}
//                                 <div className="timeline-dot hidden md:block" />

//                                 {/* Image Content */}
//                                 <div className="flex-1 w-full reveal-text">
//                                     <div className="aspect-[4/3] relative overflow-hidden fleet-card">
//                                         <img
//                                             src={step.image}
//                                             alt={step.title}
//                                             className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
//                                         />
//                                         <div className="image-overlay opacity-30"></div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }
import React, { useEffect, useRef } from 'react';

// ✅ Import local images (adjust path if needed)
import blackImg from "../../assets/black.jpg";
import redImg from "../../assets/RednBlack.png";

export default function HomeHowWorks() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    entry.target.querySelectorAll('.reveal-text').forEach(el => el.classList.add('reveal'));
                }
            });
        }, observerOptions);

        const stepsElements = sectionRef.current?.querySelectorAll('.timeline-step');
        stepsElements?.forEach((step) => observer.observe(step));

        return () => observer.disconnect();
    }, []);

    const steps = [
        {
            number: '01',
            title: 'Choose your preferred car',
            description: 'Browse through our collection and select the vehicle that suits your needs.',
            image: blackImg, // ✅ replaced
        },
        {
            number: '02',
            title: 'Fill out our reservation form',
            description: 'Enter your details and booking preferences to reserve your ride. Our process is seamless and designed for your convenience.',
            image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800',
        },
        {
            number: '03',
            title: 'Receive confirmation email',
            description: 'Get an instant confirmation with all booking details in your inbox. No waiting, no hassle—just pure driving pleasure.',
            image: redImg, // ✅ replaced
        }
    ];

    return (
        <section className="timeline-section relative" ref={sectionRef}>
            <div className="container-custom">
                <div className="flex flex-col items-center mb-32 text-center">
                    <span className="section-subtitle">Process</span>
                    <h2 className="section-title">How we deliver excellence</h2>
                </div>

                <div className="relative">
                    {/* Vertical Timeline Line */}
                    <div className="timeline-line hidden md:block"></div>

                    <div className="space-y-32 md:space-y-48 w-full">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`timeline-step flex flex-col items-center gap-12 md:gap-24 w-full relative ${i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                                    }`}
                            >
                                {/* Text Content */}
                                <div
                                    className={`flex-1 w-full reveal-text ${i % 2 === 1 ? 'md:text-right' : 'text-left'
                                        }`}
                                >
                                    <div
                                        className={`flex flex-col ${i % 2 === 1 ? 'md:items-end' : 'items-start'
                                            }`}
                                    >
                                        {/* ✅ Dark Grey Numbers */}
                                        <span className="text-6xl md:text-8xl font-black text-gray-700 mb-4 leading-none">
                                            {step.number}
                                        </span>

                                        <h3 className="text-3xl md:text-5xl font-black mb-6 text-black leading-tight uppercase tracking-tighter">
                                            {step.title}
                                        </h3>

                                        <p className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed font-semibold">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="timeline-dot hidden md:block" />

                                {/* Image Content */}
                                <div className="flex-1 w-full reveal-text">
                                    <div className="aspect-[4/3] relative overflow-hidden fleet-card bg-white flex items-center justify-center">
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-contain transition-all duration-700"
                                        />
                                        <div className="image-overlay opacity-30"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}