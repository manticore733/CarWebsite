// import React from "react";
// import { Link } from "react-router-dom";

// export default function HomeCarRates() {
//     const cars = [
//         {
//             name: "BLACK ELEGANCE",
//             price: "€45.00",
//             tag: "Suzuki Swift Collection",
//             image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200",
//         },
//         {
//             name: "PASSION IN RED",
//             price: "€45.00",
//             tag: "Suzuki Swift Collection",
//             image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=1200",
//         },
//         {
//             name: "BRIGHT AND BOLD",
//             price: "€45.00",
//             tag: "Suzuki Swift Collection",
//             image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1200",
//         },
//     ];

//     return (
//         <section className="section-padding bg-white">
//             <div className="container-custom">
//                 <div className="flex flex-col items-center mb-[80px] text-center text-black">
//                     <span className="section-subtitle">Prestige Collection</span>
//                     <h2 className="section-title mb-[20px]">Our Car Rates</h2>
//                     <p className="text-secondary text-lg max-w-xl leading-relaxed font-semibold" style={{ marginBottom: '20px' }}>
//                         Hand-selected vehicles maintained to the highest standards of performance and aesthetics.
//                     </p>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                     {cars.map((car, i) => (
//                         <div key={i} className="group fleet-card">
//                             <div className="h-[450px] md:h-[600px] w-full overflow-hidden relative">
//                                 <img
//                                     src={car.image}
//                                     alt={car.name}
//                                     className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110"
//                                 />
//                                 <div className="absolute inset-0 image-overlay opacity-20 group-hover:opacity-40 transition-opacity"></div>

//                                 <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
//                                     <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-[#d6d3d1]">{car.tag}</span>
//                                     <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase !text-[#d6d3d1] mb-6">{car.name}</h3>

//                                     <div className="flex items-center justify-between border-t border-[#d6d3d1]/30 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
//                                         <div>
//                                             <p className="text-[10px] text-[#d6d3d1]/80 uppercase mb-1 font-bold">Starting from</p>
//                                             <p className="text-2xl font-black tracking-tight text-[#d6d3d1]">{car.price}<span className="text-xs text-[#d6d3d1]/60 ml-1">/DAY</span></p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="flex justify-center" style={{ marginTop: '100px' }}>
//                     <Link to="/vehicles" className="explore-btn">
//                         View All Vehicles
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     );
// }
import React from "react";
import { Link } from "react-router-dom";

// ✅ Local images (adjust path if needed)
import blackImg from "../../assets/black.jpg";
import redImg from "../../assets/RednBlack.png";
import orangeImg from "../../assets/orange.png";

export default function HomeCarRates() {

    const cars = [
        {
            name: "BLACK ELEGANCE",
            price: "€45.00",
            tag: "Suzuki Swift Collection",
            image: blackImg,
        },
        {
            name: "PASSION IN RED",
            price: "€45.00",
            tag: "Suzuki Swift Collection",
            image: redImg,
        },
        {
            name: "BRIGHT AND BOLD",
            price: "€45.00",
            tag: "Suzuki Swift Collection",
            image: orangeImg,
        },
    ];

    return (
        <section className="section-padding bg-white">
            <div className="container-custom">

                <div className="flex flex-col items-center mb-[80px] text-center text-black">
                    <span className="section-subtitle">Prestige Collection</span>
                    <h2 className="section-title mb-[20px]">Our Car Rates</h2>
                    <p
                        className="text-black text-lg max-w-xl leading-relaxed font-semibold"
                        style={{ marginBottom: "20px" }}
                    >
                        Hand-selected vehicles maintained to the highest standards of performance and aesthetics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cars.map((car, i) => (
                        <div key={i} className="fleet-card bg-white shadow-lg rounded-xl overflow-hidden">

                            <div className="h-[450px] md:h-[600px] w-full relative bg-white flex items-center justify-center">

                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                                />

                                <div className="absolute bottom-0 left-0 w-full p-8 bg-white/90 backdrop-blur-sm">

                                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold mb-2 text-black block">
                                        {car.tag}
                                    </span>

                                    <h3 className="text-3xl md:text-4xl font-black tracking-tight uppercase text-black mb-4">
                                        {car.name}
                                    </h3>

                                    <div className="flex items-center justify-between border-t border-black/30 pt-4">
                                        <div>
                                            <p className="text-[10px] text-black/70 uppercase mb-1 font-bold">
                                                Starting from
                                            </p>
                                            <p className="text-2xl font-black tracking-tight text-black">
                                                {car.price}
                                                <span className="text-xs text-black/60 ml-1">
                                                    /DAY
                                                </span>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-[100px]">
                    <Link to="/vehicles" className="explore-btn bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition">
                        View All Vehicles
                    </Link>
                </div>

            </div>
        </section>
    );
}