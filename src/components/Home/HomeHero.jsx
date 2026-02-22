import React from 'react';
import heroImage from "../../assets/image.png";
import carImage from "../../assets/cc.png";
import styles from './HomeHero.module.css';

export default function HomeHero() {

    return (
        <section className={styles['tesla-hero-section']} style={{ backgroundImage: `url(${carImage})` }}>

            {/* 2. Mix the local style and the global 'fade-in' class */}
            <div className={`${styles['tesla-hero-text']} fade-in`}>
                <h1 className={styles['tesla-title']}>Porsche 911</h1>
                <p className={styles['tesla-subtitle']}>1.99% APR Financing Ending August 31</p>
                <p className={styles['tesla-description']}>From $34,990</p>
            </div>

            <div className={`${styles['tesla-buttons']} fade-in`} style={{ animationDelay: '0.3s' }}>
            </div>

        </section>
    );
}