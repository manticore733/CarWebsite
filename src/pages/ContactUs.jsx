import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactUs() {
    return (
        <div className="page-container fade-in">
            <Helmet>
                <title>Contact Us | CarWebsite</title>
                <meta name="description" content="Get in touch with the CarWebsite team." />
            </Helmet>

            <div className="content-wrapper glass-panel mt-10">
                <h1 className="gradient-text text-4xl font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-[#a0a0b0] mb-8">
                    We're here to help. Send us a message and we'll respond as soon as possible.
                </p>

                <form className="flex flex-col gap-6 max-w-lg">
                    <div>
                        <label className="block text-sm font-medium text-[#a0a0b0] mb-2">Name</label>
                        <input type="text" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--accent-color)]" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#a0a0b0] mb-2">Email</label>
                        <input type="email" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--accent-color)]" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-[#a0a0b0] mb-2">Message</label>
                        <textarea rows="4" className="w-full bg-[rgba(255,255,255,0.05)] border border-[var(--glass-border)] rounded-lg p-3 text-white focus:outline-none focus:border-[var(--accent-color)]"></textarea>
                    </div>
                    <button type="button" className="primary-btn self-start py-3 px-8">Send Message</button>
                </form>
            </div>
        </div>
    );
}
