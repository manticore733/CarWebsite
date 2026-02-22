import React from 'react';
import SEO from '../components/Shared/SEO';

export default function Tnc() {
    return (
        <div className="page-container fade-in">
            <SEO
                title="Terms and Conditions"
                description="Read the terms and conditions for renting a vehicle from Tele's Car Hire. Learn about insurance, driver qualifications, and our rental policies."
                keywords="terms and conditions, rental policy, car hire agreement"
            />

            <div className="content-wrapper glass-panel mt-10 max-w-4xl mx-auto">
                <h1 className="gradient-text text-4xl font-bold mb-8">Terms and Conditions</h1>

                <div className="space-y-8 text-[#a0a0b0] leading-relaxed">
                    <p className="border-l-4 border-[#3b82f6] pl-4 py-2 italic font-medium text-white/80">
                        The person hiring the car (hereinafter called the Hirer) agrees with TELE’s Car Hire (hereinafter called the Owner) that any motor Vehicle (hereinafter called the Vehicle) hired to the hirer by the Owners shall be hired subject to the following terms and conditions.
                    </p>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">1. Driver Qualifications</h3>
                        <p>The hirer-shall drive the vehicle only when qualified to do so and whilst holding all necessary current licenses and permits and shall at all times drive the vehicle in a careful manner.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">2. Vehicle Condition</h3>
                        <p>That he has received the vehicle free from defects or damage (except as shown in the schedule) and he acknowledges that the owner has no liability in respect of any injury or damage arising from the use of the vehicle (except for the Owner’s obligation set above).</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">3. Proper Use of Vehicle</h3>
                        <p>The hirer shall use the vehicle and accessories in a proper and careful manner and only for social domestic pleasure and business purpose and excluding: (i) Any race, competition or trail (ii) Use for hire or reward (iii) Drawing a trailer (iv) Illegal purposes or carriage of goods (v) Driving by person who is under influence of drinks or drugs (vi) Use on the beach</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">4. Reporting Faults</h3>
                        <p>The hirer must report immediately in the event of any fault, defect or malfunctioning of the vehicle and if it is of a serious nature, the vehicle must not be driven at all until contact has been established with the Owners. If the Hirer continues to drive the vehicle after becoming aware of such defect, without informing the Owners thereof, the hirer shall do-so at his/her own risk, and is in breach of the Conditions of hirer.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">5. Accident Reporting</h3>
                        <p>The hirer shall report any accident involving the vehicle to the owner immediately of the occurrence of the accident and also to the police. In case of non-compliance the hirer will be fully responsible for damage to and /or losses sustained by the vehicle The hirer shall not, without the prior consent of the owner give any instructions for any repairs to the vehicle or for replacement of any part thereof rendered necessary by the accident.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">6. Indemnification</h3>
                        <p>The Hirer agrees to indemnify the owner against any loss he suffers in consequence of any damage, fire or theft to or the vehicle and any claims made by any person in respect of the vehicle whilst it is in the custody of the Hirer.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">7. Liability and Insurance</h3>
                        <p>In the event of an accident, the hirer liability shall be limited to an excess of Euro 1000. However damages caused through drunk driving, gross negligence, disregarding of the rental terms or any other illegal activities are excluded from the insurance coverage. The hirer will be fully responsible for the total damage cause.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">8. Exclusions from Coverage</h3>
                        <p>Damage cause to underneath of the vehicle, loss or damage to the car keys, damage to tires or glass (windows, windscreen, etc.) are not included in the insurance coverage and will be deducted off the excess.(hence the hirer will be fully liable)</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">9. Payment and Return</h3>
                        <p>The full rental cost is payable on delivery of the vehicle. Unless the vehicle is returned on time and at the agreed location as specified on the contract of rental, the hirer is liable to be charged a full day’s rental cost in excess.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">10. Changes to Rental Period</h3>
                        <p>If the hirer desires to change the rental period after taking possession of the vehicle, either reducing the rental days or prolonging the hire, or changing the place or agree time of termination of the agreed rental, the hirer must inform the owner at least three (3) days in advance.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">11. Legal Responsibility</h3>
                        <p>The hirer will be legally responsible for parking, traffic and other offences and penalties arising therefrom that may be committed during the period of the hire.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">12. Loss of Keys</h3>
                        <p>The hirer agrees that any loss of keys whilst the car is in the possession of the hirer will be the direct responsibility of the hirer who will pay for the loss. A delivery fee may be levied for its replacement.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">13. Tire and Rim Damage</h3>
                        <p>Any abnormal damage to tires and rims other than a puncture will be the responsibility of the Hirer. Under no circumstance will the car be driven on a flat tyre, otherwise the hirer assumes full responsibility for any damage whatsoever.</p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-white mb-3">14. Acceptance of Agreement</h3>
                        <p>The hirer acknowledges that he has read, understood and agreed to this agreement.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}
