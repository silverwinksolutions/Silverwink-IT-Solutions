import React from "react";
import { Link } from "react-router-dom";
import sitelogo from '../assets/silverwinkLogo.png'
import ScrollReveal from './Scrollreveal.jsx'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
            <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid text-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
                {/* Logo + Contact */}
                <ScrollReveal delay={0.1} className="space-y-4">
                    <div className="flex justify-center items-center space-x-1">
                        <img src={sitelogo} width={45} height={45} viewBox="0 0 48 48" fill="none">
                        </img>
                        <div className="flex justify-center items-center flex-col">
                            <h2 className="text-lg font-semibold text-[#f0b249]">Silverwink</h2>
                            <p className="text-xs font-semibold">IT Solutions</p>
                        </div>
                    </div>
                    <address className="not-italic leading-relaxed text-sm text-gray-700">
                        PACHENDA ROAD <br />
                        AADARSH COLONY MUZAFFARNAGAR,
                        UTTARPRADESH
                    </address>
                    <div className="text-sm space-y-1">
                        <span>
                            Email:{" "}
                            <a
                                href="mailto:contact@silverwinksolutions.com"
                                className="text-blue-600 hover:underline"
                            >
                                contact@silverwinksolutions.com
                            </a>
                        </span>
                        <br />
                        <span>
                            Phone:{" "}
                            <a
                                href="tel:+918938970130"
                                className="font-medium text-gray-800 hover:text-blue-600"
                            >
                                (+91)-8938970130
                            </a>
                        </span>
                        <br />
                        <a
                            href="#"
                            className="text-blue-600 hover:underline text-sm break-all"
                        >
                            www.SilverwinkItSolutions.com
                        </a>
                    </div>
                </ScrollReveal>

                {/* IT Services */}
                <ScrollReveal delay={0.1}>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900">IT Services</h3>
                    <ul className="space-y-2">
                        <li><Link to="#" className="hover:text-blue-600">Managed IT</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">IT Support</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">IT Consultancy</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Cloud Computing</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Cyber Security</Link></li>
                    </ul>
                </ScrollReveal>

                {/* Quick Links */}
                <ScrollReveal delay={0.15}>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="#" className="hover:text-blue-600">Pick up locations</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Terms of Payment</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Privacy Policy</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Where to Find Us</Link></li>
                    </ul>
                </ScrollReveal>

                {/* Support */}
                <ScrollReveal delay={0.2}>
                    <h3 className="font-semibold text-lg mb-4 text-gray-900">Support</h3>
                    <ul className="space-y-2">
                        <li><Link to="#" className="hover:text-blue-600">Forum Support</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Help & FAQ</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Contact Us</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Pricing and Plans</Link></li>
                        <li><Link to="#" className="hover:text-blue-600">Cookies Policy</Link></li>
                    </ul>
                </ScrollReveal>

                {/* App Store/Play Store Buttons */}
                <ScrollReveal delay={0.25} className="flex flex-col gap-4 items-center justify-center mt-4 md:mt-0">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="w-36 rounded shadow"
                        />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="w-36 rounded shadow"
                        />
                    </a>
                </ScrollReveal>
            </ScrollReveal>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 text-sm py-6 mt-8 px-4 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto space-y-4 sm:space-y-0">
                <ScrollReveal direction="right" delay={0.4} className="text-gray-500 text-center sm:text-left">
                    &copy; {new Date().getFullYear()} Silverwink IT Solutions. All rights reserved.
                </ScrollReveal>
                <ScrollReveal direction="left" delay={0.4} className="flex space-x-4">
                    {/* Social icons using Heroicons or SVGs - fill with actual icons for real deployment */}
                    <a href="#" className="p-2 bg-gray-100 text-gray-500 hover:text-white hover:bg-blue-500 rounded-full transition" aria-label="Twitter">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 text-gray-500 hover:text-white hover:bg-blue-500 rounded-full transition" aria-label="Facebook">
                        <FaFacebookF size={20} />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 text-gray-500 hover:text-white hover:bg-blue-500 rounded-full transition" aria-label="Instagram">
                        <FaSquareInstagram size={20} />
                    </a>
                    <a href="#" className="p-2 bg-gray-100 text-gray-500 hover:text-white hover:bg-blue-500 rounded-full transition" aria-label="LinkedIn">
                        <FaLinkedin  size={20}/>
                    </a>
                </ScrollReveal>
            </div>
        </footer>
    );
};

export default Footer;
