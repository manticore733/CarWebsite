// import React from 'react';
// import heroImage from "../../assets/image.png";
// import carImage from "../../assets/cc.png";
// import styles from './HomeHero.module.css';

// export default function HomeHero() {

//     return (
//         <section className={styles['tesla-hero-section']} style={{ backgroundImage: `url(${carImage})` }}>

//             {/* 2. Mix the local style and the global 'fade-in' class */}
//             <div className={`${styles['tesla-hero-text']} fade-in`}>
//                 <h1 className={styles['tesla-title']}>Tele's Car Hire</h1>
//                 <p className={styles['tesla-subtitle']}>Your best ride in Paradise</p>
//                 <p className={styles['tesla-description']}>Starting from €45.00 / Day</p>
//             </div>

//             <div className={`${styles['tesla-buttons']} fade-in`} style={{ animationDelay: '0.3s' }}>
//             </div>

//         </section>
//     );
// }
import React from 'react';
import { Helmet } from 'react-helmet-async';
import seychellesImage from "../../assets/seychelles.jpg";
import styles from './HomeHero.module.css';

export default function HomeHero() {

    return (
        <>
            <Helmet>
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
            </Helmet>

            <section
                className={styles['tesla-hero-section']}
                style={{ backgroundImage: `url(${seychellesImage})` }}
            >
                <div className={`${styles['tesla-hero-text']} fade-in`}>
                    <h1 className={styles['tesla-title']}>Tele's Car Hire</h1>
                    <p className={styles['tesla-subtitle']}>Your best ride in Paradise</p>
                    <p className={styles['tesla-description']}>Starting from €45.00 / Day</p>
                </div>
            </section>
        </>
    );
}