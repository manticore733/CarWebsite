import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="footer-section bg-black text-white border-t border-white/10 pt-24 pb-12">
            <div className="container-custom" style={{ marginTop: '10px' }}>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-24">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-4xl font-black tracking-tighter text-white mb-6 inline-block hover:opacity-80 transition-opacity">
                            TELE'S<span className="text-outline-small text-transparent ml-1" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>CAR HIRE</span>
                        </Link>
                        <p className="text-white/60 max-w-sm text-lg leading-relaxed font-medium" style={{ marginBottom: '10px' }}>
                            Redefining luxury mobility. We provide an exclusive selection of the world's finest vehicles for those who demand excellence in every journey.
                        </p>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-white/30"></span>
                            Navigation
                        </h4>
                        <ul className="space-y-4 md:pl-11">
                            <li><Link to="/" className="text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">Home</Link></li>
                            <li><Link to="/vehicles" className="text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">Fleet</Link></li>
                            <li><Link to="/about" className="text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">About Us</Link></li>
                            <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8 flex items-center gap-3">
                            <span className="w-8 h-[1px] bg-white/30"></span>
                            Legal
                        </h4>
                        <ul className="space-y-4 md:pl-11">
                            <li><Link to="/tnc" className="text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">Terms & Conditions</Link></li>
                            <li><Link to="/privacy" className="text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">Privacy Policy</Link></li>
                            <li><Link to="/cookies" className="text-white/60 hover:text-white transition-colors text-sm uppercase font-bold tracking-wider">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-6">
                    <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em]" style={{ marginBottom: '10px' }}>
                        &copy; {new Date().getFullYear()} Tele's Car Hire. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Instagram</a>
                        <a href="#" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">LinkedIn</a>
                        <a href="#" className="text-white/60 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Twitter</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
