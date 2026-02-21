import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Tnc() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>Terms and Conditions | CarWebsite</title>
                <meta name="description" content="Terms and Conditions for renting from CarWebsite." />
            </Helmet>

            <div className="content-wrapper glass-panel mt-10 max-w-4xl mx-auto">
                <h1 className="gradient-text text-4xl font-bold mb-8">Terms and Conditions</h1>

                <div className="space-y-8 text-[#a0a0b0] leading-relaxed">
                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Agreement Overview</h3>
                        <p>By renting a vehicle from CarWebsite, you agree to the following terms and conditions. Please read them carefully before making a reservation.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. Driver Requirements</h3>
                        <p>All drivers must be at least 25 years of age and hold a valid driver's license. Additional drivers must also meet these requirements and be registered on the rental agreement.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. Insurance and Liability</h3>
                        <p>Basic insurance is included in the daily rate. Renters are responsible for any damages not covered by the insurance policy, up to the stated deductible amount.</p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">4. Cancellation Policy</h3>
                        <p>Reservations can be modified or cancelled free of charge up to 48 hours before the scheduled pick-up time. Cancellations made within 48 hours may be subject to a fee.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
