import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactUs() {
    return (
        <div className="light-theme-page fade-in">
            <Helmet>
                <title>Contact Tele's Car Hire | Get in Touch Today</title>
                <meta name="description" content="Have questions about our car rentals? Contact Tele's Car Hire today for bookings, support, and inquiries about our premium fleet in paradise." />
            </Helmet>

            <div className="light-content-card">
                <h1 className="fleet-title mb-6">Get in Touch</h1>
                <p className="fleet-para mb-10">
                    We're here to help you get the best ride in paradise. Send us a message and our team will get back to you within 24 hours.
                </p>

                <form className="flex flex-col gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="light-label">Full Name</label>
                            <input type="text" placeholder="John Doe" className="light-input" />
                        </div>
                        <div>
                            <label className="light-label">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="light-input" />
                        </div>
                    </div>

                    <div>
                        <label className="light-label">Your Message</label>
                        <textarea rows="3" placeholder="How can we help you?" className="light-input"></textarea>
                    </div>

                    <button type="button" className="agency-book-btn agency-btn-sm self-start">Send Message</button>
                </form>
            </div>
        </div>
    );
}
