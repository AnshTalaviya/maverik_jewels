import React, { useState, useEffect } from "react";
import logo from '../../public/images/Maverick_Jewels.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link } from "react-router-dom";
import FilterProducts from "./FilterProducts";
import {
    FiSearch,
    FiUser,
    FiHeart,
    FiShoppingCart,
    FiMenu,
    FiX,
} from "react-icons/fi";

const Header = () => {
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => setIsSearchOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {!isSearchOpen && (
                <header className="bg-white shadow-md sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                        <div className="text-2xl font-bold text-gray-800">
                            <Link to='/'>
                                <img src={logo} alt="Logo"
                                    className={`w-32 mx-auto transition-transform duration-500 ${isScrolled ? 'scale-100' : 'scale-75'}`} />
                            </Link>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden md:flex space-x-8 items-center">
                            <Link to="/" className="hover:text-dark-800 hover:font-bold hover:underline">Home</Link>

                            <div className="relative group"
                                onMouseEnter={() => setIsProductOpen(true)}
                                onMouseLeave={() => setIsProductOpen(false)}>
                                <button className="flex items-center gap-1 hover:text-dark-500 py-2 hover:underline">
                                    Product
                                    <ChevronDownIcon className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                                </button>
                                {isProductOpen && (
                                    <div className="absolute bg-white border rounded shadow-lg mt-0 space-y-1 p-4 z-50 w-40 ">
                                        <Link to="/collection?category=earrings" className="block hover:text-dark-500 hover:font-bold transition-transform duration-500 hover:translate-x-2">Earrings</Link>
                                        <Link to="/collection?category=rings" className="block hover:text-dark-500 hover:font-bold transition-transform duration-500 hover:translate-x-2">Rings</Link>
                                        <Link to="/collection?category=necklaces" className="block hover:text-dark-500 hover:font-bold transition-transform duration-500 hover:translate-x-2">Necklaces</Link>
                                        <Link to="/collection?category=bracelets" className="block hover:text-dark-500 hover:font-bold transition-transform duration-500 hover:translate-x-2">Bracelets</Link>
                                    </div>
                                )}
                            </div>

                            <Link to="/about" className="hover:text-dark-500 hover:font-bold hover:underline">About</Link>
                            <Link to="/contact" className="hover:text-dark-500 hover:font-bold hover:underline">Contact</Link>
                        </nav>

                        <div className="flex items-center space-x-4">
                            <FiSearch className="text-xl cursor-pointer" onClick={openSearch} />
                            <FiUser className="text-xl cursor-pointer" />
                            <FiHeart className="text-xl cursor-pointer" />
                            <div className="md:hidden">
                                <button onClick={toggleDrawer}>
                                    {isDrawerOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Drawer */}
                    {isDrawerOpen && (
                        <div className="md:hidden bg-white shadow-md px-4 pt-4 pb-6 space-y-4">
                            <Link to="/" className="block hover:text-dark-500 hover:font-bold">Home</Link>
                            <details className="block">
                                <summary className="cursor-pointer hover:text-dark-500 hover:font-bold">Product</summary>
                                <div className="ml-4 mt-2 space-y-2">
                                    <Link to="/collection?category=earrings" className="block hover:text-dark-500 hover:font-bold">Earrings</Link>
                                    <Link to="/collection?category=rings" className="block hover:text-dark-500 hover:font-bold">Rings</Link>
                                    <Link to="/collection?category=necklaces" className="block hover:text-dark-500 hover:font-bold">Necklaces</Link>
                                    <Link to="/collection?category=bracelets" className="block hover:text-dark-500 hover:font-bold">Bracelets</Link>
                                </div>
                            </details>
                            <Link to="/about" className="block hover:text-dark-500 hover:font-bold">About</Link>
                            <Link to="/contact" className="block hover:text-dark-500 hover:font-bold">Contact</Link>
                        </div>
                    )}
                </header>
            )}

            {/* Search Modal */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-white z-50 flex flex-col items-center p-4">
                    <button className="absolute top-4 right-4 text-3xl text-gray-600" onClick={closeSearch}>
                        <FiX />
                    </button>
                    <h2 className="text-xl mb-4 font-semibold text-gray-700">Search Products</h2>
                    <input
                        type="text"
                        placeholder="Type to search..."
                        className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
            )}
        </>
    );
};

export default Header;
