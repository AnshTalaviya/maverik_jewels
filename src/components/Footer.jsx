import React from "react";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaCcAmex,
    FaCcDiscover,
    FaCcDinersClub,
    FaCcStripe,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white border-t mt-10 text-gray-700 text-sm " id="footer">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* MJ Jewellery */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 relative inline-block after:block after:h-1 after:bg--300 after:w-10 after:mt-1">
                        MJ Jewellery
                    </h3>
                    <p className="mt-2">
                        Experience the Elegance of Diamond Jewelry Inspired by Tradition.
                        Step into a world of sophistication with our exquisite diamond
                        jewelry, designed to captivate the senses.
                    </p>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 relative inline-block after:block after:h-1 after:bg-pink-300 after:w-10 after:mt-1">
                        CONTANT US
                    </h3>
                    <p className="font-bold mt-2">Surat Diamond Bourse</p>
                    <p>Office No. Tower-G 710</p>
                    <p>Surat, Gujarat 395007</p>
                    <p>India</p>
                    <p className="mt-1">Phone: +91 9016825446</p>
                    <p>Email: support@mjjewellery.com</p>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 relative inline-block after:block after:h-1 after:bg-pink-300 after:w-10 after:mt-1">
                        FOLLOW US
                    </h3>
                    <div className="flex gap-4 text-xl mt-4">
                        <FaFacebookF className="hover:text-pink-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                        <FaYoutube className="hover:text-pink-400 cursor-pointer" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-2 relative inline-block after:block after:h-1 after:bg-pink-300 after:w-10 after:mt-1">
                        Quick links
                    </h3>
                    <ul className="space-y-2 mt-3">
                        <li><Link to='/' className="hover:text-pink-500">Refund policy</Link></li>
                        <li><Link to='/' className="hover:text-pink-500">Privacy policy</Link></li>
                        <li><Link to='/' className="hover:text-pink-500">Terms of service</Link></li>
                        <li><Link to='/' className="hover:text-pink-500">Shipping policy</Link></li>
                    </ul>
                </div>
            </div>

            <div className="border-t pt-5 pb-10 text-center text-xs text-gray-500">
                <div className="flex justify-center gap-2 mb-4">
                    <img className="h-8" src="https://img.icons8.com/color/48/amex.png" alt="amex" />
                    <img className="h-8" src="https://img.icons8.com/color/48/mastercard-logo.png" alt="mastercard" />
                    <img className="h-8" src="https://img.icons8.com/color/48/visa.png" alt="visa" />
                    <img className="h-8" src="https://img.icons8.com/color/48/paypal.png" alt="paypal" />
                    <img className="h-8" src="https://img.icons8.com/color/48/discover.png" alt="discover" />
                    <img className="h-8" src="https://img.icons8.com/color/48/rupay.png" alt="rupay" />
                    <img className="h-8" src="https://img.icons8.com/color/48/diners-club.png" alt="diners club" />
                </div>
                <p>
                    © 2025, MJ Jewellery Powered by Shopify &nbsp;·&nbsp;
                    <Link to='/' className="hover:text-pink-400">Refund policy</Link> &nbsp;·&nbsp;
                    <Link to='/' className="hover:text-pink-400">Privacy policy</Link> &nbsp;·&nbsp;
                    <Link to='/' className="hover:text-pink-400">Terms of service</Link> &nbsp;·&nbsp;
                    <Link to='/' className="hover:text-pink-400">Shipping policy</Link> &nbsp;·&nbsp;
                    <Link to='/' className="hover:text-pink-400">Contact information</Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
