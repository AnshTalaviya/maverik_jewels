import React, { useState, useEffect } from "react";
import logo from '../../public/images/Maverickk_Jewels.png';
import { ChevronDownIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from "react-router-dom";
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

    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    const navigate = useNavigate();


    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
    const openSearch = () => setIsSearchOpen(true);
    const closeSearch = () => {

        setIsSearchOpen(false);
        setSearchTerm("");

    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    useEffect(() => {
        fetch('/jewellers.json')
            .then(res => res.json())
            .then(data => setAllProducts(data))
            .catch(err => console.error("Failed to fetch product data", err));
    }, []);
    useEffect(() => {
        const term = searchTerm.toLowerCase();

        const productMatches = allProducts.filter(product =>
            // product.name.toLowerCase().includes(term) ||  // <-- this line
            product.category.toLowerCase().includes(term)
        );


        const categoryMatches = [
            ...new Set(
                allProducts
                    .filter(product =>
                        product.category && product.category.toLowerCase().includes(term)
                    )
                    .map(p => p.category)
            )
        ];

        setFilteredProducts(productMatches.slice(0, 10));
        setFilteredCategories(categoryMatches);
    }, [searchTerm, allProducts]);



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

                        <nav className="hidden md:flex space-x-8 items-center">
                            <Link to="/" className="hover:text-dark-800 hover:font-bold hover:underline">Home</Link>
                            <Link to="/about" className="hover:text-dark-500 hover:font-bold hover:underline">About</Link>

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
                <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
                    <div className="px-4 py-6 max-w-4xl mx-auto">
                        <div className="relative flex items-center border rounded-md px-4 py-2">
                            <input
                                type="text"
                                placeholder="Search"
                                className="flex-grow outline-none text-lg font-medium"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                            />
                            <FiSearch className="text-xl text-gray-600 ml-2" />
                            <button
                                onClick={closeSearch}
                                className="ml-4 text-xl text-gray-800 hover:text-red-500"
                            >
                                <FiX />
                            </button>
                        </div>

                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 p-6 border-b font-semibold text-gray-600 text-sm uppercase tracking-wider">
                            <div className="col-span-2">Suggestions</div>
                            <div className="col-span-4">Products</div>
                        </div>

                        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 px-6 py-4">
                            {/* Suggestions */}
                            <div className="col-span-2 space-y-2">
                                {filteredCategories.map((cat, index) => (
                                    <div
                                        key={index}
                                        className="cursor-pointer hover:underline text-base"
                                        onClick={() => setSearchTerm(cat)}
                                    >
                                        {cat}
                                    </div>
                                ))}
                            </div>

                            {/* Product Results */}
                            <div className="col-span-4 space-y-3">
                                {filteredProducts.map(product => (
                                    <div
                                        key={product.id}
                                        className="flex items-center gap-4 p-2 hover:bg-gray-100 rounded cursor-pointer"
                                        onClick={() => {
                                            closeSearch();
                                            navigate(`/product/${product.id}`);
                                        }}
                                    >
                                        <img src={product.imageFront} alt={product.title} className="w-10 h-10 object-contain" />
                                        <span className="text-sm">{product.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
