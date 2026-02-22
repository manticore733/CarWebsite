import React from 'react';
import { Helmet } from 'react-helmet-async';

const FleetSection = ({ label, title, description, tags, price, image, reverse = false }) => {
    return (
        <section className={`fleet-section ${reverse ? 'reverse' : ''} fade-in`}>
            <div className="fleet-text-side">
                <div className="fleet-text-content">
                    <span className="label-mini">{label}</span>
                    <h2 className="fleet-title">{title}</h2>
                    <p className="fleet-para">{description}</p>

                    <div className="features-group-bubble">
                        <ul className="features-list">
                            {tags.map((tag, idx) => (
                                <li key={idx} className="feature-item-text">{tag}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="price-tag mb-6 text-2xl font-bold">{price}</div>

                    <button className="agency-book-btn">Book Now</button>
                </div>
            </div>

            <div className="fleet-image-side flex justify-center">
                <div className="car-shimmer-placeholder">
                    <img
                        src={image}
                        alt={title}
                        className="w-[80%] h-[600px] object-cover transition-transform duration-700 hover:scale-110"
                        loading="eager"
                    />
                </div>
            </div>
        </section>
    );
};

export default function VehiclesAndRates() {
    const fleet = [
        {
            label: "Suzuki Swift Collection",
            title: "BLACK ELEGANCE",
            description: "Choose the Black Suzuki Swift for a sleek and stylish ride that stands out on the road. With its modern design and efficient performance, the black Swift combines sophistication with fun, making it an ideal choice for those seeking a compact yet charismatic car.",
            tags: ["4 Seat", "A/C", "Bluetooth", "MP3 Interface", "Alloy Wheels", "Automatic Drive", "Electric side mirror", "Parking sensors"],
            price: "€45.00 / Day",
            image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200"
        },
        {
            label: "Suzuki Swift Collection",
            title: "PURE SOPHISTICATION IN WHITE",
            description: "Opt for the Suzuki Swift in pristine white and black roof for a timeless and elegant ride. Its sleek design, paired with efficient performance, makes the white Swift a standout choice for those who appreciate a classic yet modern compact car.",
            tags: ["4 Seat", "5 Doors", "A/C", "Bluetooth", "MP3 Interface", "Alloy Wheels", "Automatic Drive", "Electric side mirror", "Parking sensors"],
            price: "€45.00 / Day",
            image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1200"
        },
        {
            label: "Suzuki Swift Collection",
            title: "SUBTLE AND GRACEFUL IN GREY",
            description: "Understated and versatile, the grey Suzuki Swift offers a harmonious blend of style and practicality. With its refined design and efficient performance, the grey Swift is a smart choice for those who value a balanced and sophisticated compact car.",
            tags: ["4 Seat", "5 Doors", "A/C", "Bluetooth", "MP3 Interface", "Alloy Wheels", "Automatic Drive", "Electric side mirror", "Parking sensors"],
            price: "€45.00 / Day",
            image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200"
        },
        {
            label: "Suzuki Swift Collection",
            title: "EMBRACE THE BLUE VIBRANCE",
            description: "Choose a Blue Suzuki Swift for a dynamic and distinctive ride that combines style with efficiency, perfect for those who appreciate a spirited yet practical compact car.",
            tags: ["4 Seat", "5 Doors", "A/C", "Bluetooth", "MP3 Interface", "Alloy Wheels", "Automatic Drive", "Electric side mirror", "Parking sensors"],
            price: "€45.00 / Day",
            image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1200"
        },
        {
            label: "Suzuki Swift Collection",
            title: "BRIGHT AND BOLD",
            description: "This lively and eye-catching choice combines standout style with efficient performance for a memorable and fun compact car experience.",
            tags: ["4 Seat", "5 Doors", "A/C", "Bluetooth", "MP3 Interface", "Alloy Wheels", "Automatic Drive", "Electric side mirror", "Parking sensors"],
            price: "€45.00 / Day",
            image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1200"
        },
        {
            label: "Suzuki Swift Collection",
            title: "PASSION IN RED",
            description: "Opt for a Red Suzuki Swift and add a dash of passion to your journey. This dynamic choice combines style with efficiency for a memorable compact car experience.",
            tags: ["4 Seat", "5 Doors", "A/C", "Bluetooth", "MP3 Interface", "Alloy Wheels", "Automatic Drive", "Electric side mirror", "Parking sensors"],
            price: "€45.00 / Day",
            image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=1200"
        }
    ];

    return (
        <div className="agency-fleet-page">
            <Helmet>
                <title>Check Out Our Fleet | Tele's Car Hire</title>
                <meta name="description" content="Explore our Suzuki Swift collection. Affordable rental rates in paradise starting from €45/day." />
            </Helmet>

            <div className="fleet-container">
                {fleet.map((car, index) => (
                    <FleetSection
                        key={index}
                        label={car.label}
                        title={car.title}
                        description={car.description}
                        tags={car.tags}
                        price={car.price}
                        image={car.image}
                        reverse={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
}
