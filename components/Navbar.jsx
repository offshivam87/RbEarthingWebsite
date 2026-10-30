'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const products = [
    {
        name: "Earthing Electrode",
        slug: "copper-terminal-earthing-electrode",
    },
    {
        name: "Earthing Pit Cover",
        slug: "frp-earthing-pit-cover",
    },
    {
        name: "Lightning Arresters",
        slug: "ese-lightning-arrester",
    },
    {
        name: "Back Fill Compounds",
        slug: "carbon-back-fill-compound",
    },

    {
        name: "Copper Bonded Rods",
        slug: "copper-bonded-ground-rod",
    },
    {
        name: "Cable Trays",
        slug: "perforated-cable-tray",
    },

];

const Navbar = () => {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`w-full z-50 sticky top-0 transition-shadow duration-300 ${scrolled ? 'shadow-lg' : ''}`}>

            {/* ===== Top Info Bar (dark blue strip) ===== */}
            <div className="bg-gradient-to-r from-[#003a6b] to-[#00264d] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-9 text-xs sm:text-sm">
                        {/* Left: Phone & Email */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a
                                href="tel:+919140073153"
                                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                            >
                                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                <span className="hidden xs:inline">+91-9140073153</span>
                                <span className="xs:hidden">Call Us</span>
                            </a>
                            <a
                                href="mailto:rbearthingcompany@gmail.com"
                                className="flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
                            >
                                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                                <span className="hidden sm:inline">rbearthingcompany@gmail.com</span>
                                <span className="sm:hidden">Email</span>
                            </a>
                        </div>

                        {/* Right: Tagline */}
                        <div className="hidden md:block text-white/70 text-xs tracking-wide">
                            ISO Certified Earthing Solutions
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Main Navigation Bar (white) ===== */}
            <div className="bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-[100px]">

                        {/* Left: Brand Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                            <div className="w-12 h-12 md:w-25 md:h-25  rounded-lg  flex items-center justify-center">
                                {/* Earthing / Ground Symbol */}
                                <Image src="/logo-1.png" alt="Logo" className='object-cover w-full' width={80} height={70} />
                            </div>
                            <div className="flex flex-col text-left leading-none">
                                {/* <span className="text-[1.2rem] font-bold text-[#00a2e8] tracking-tight">
                                    RB EARTHING Pvt. Ltd.
                                </span> */}
                                <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase">

                                </span>
                            </div>
                        </Link>

                        {/* Center/Right: Desktop Navigation Links */}
                        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                            {/* Home */}
                            <Link
                                href="/"
                                className={`relative px-3 lg:px-4 py-2 text-[1rem] font-medium transition-colors ${pathname === '/'
                                    ? 'text-[#00a2e8]'
                                    : 'text-slate-700 hover:text-[#00a2e8]'
                                    }`}
                            >
                                Home
                                {pathname === '/' && (
                                    <span className="absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-[2px] bg-[#00a2e8] rounded-full" />
                                )}
                            </Link>

                            {/* Products (Dropdown) */}
                            <div
                                className="relative"
                                onMouseEnter={() => setProductsDropdownOpen(true)}
                                onMouseLeave={() => setProductsDropdownOpen(false)}
                            >
                                <button
                                    type="button"
                                    className={`flex items-center gap-1 px-3 lg:px-4 py-2 text-[1rem] font-medium transition-colors cursor-pointer ${pathname?.startsWith('/products') || productsDropdownOpen
                                        ? 'text-[#00a2e8]'
                                        : 'text-slate-700 hover:text-[#00a2e8]'
                                        }`}
                                >
                                    Products
                                    <ChevronDown
                                        className={`w-3.5 h-3.5 transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''
                                            }`}
                                    />
                                </button>
                                {pathname?.startsWith('/products') && (
                                    <span className="absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-[2px] bg-[#00a2e8] rounded-full" />
                                )}

                                {/* Dropdown Menu */}
                                {productsDropdownOpen && (
                                    <div className="absolute top-full left-0 pt-1 z-50">
                                        <div className="w-56 bg-white rounded-lg shadow-xl border border-slate-100 py-2 overflow-hidden">
                                            {products.map((product) => (
                                                <Link
                                                    key={product.slug}
                                                    href={`/products/${product.slug}`}
                                                    className={`block px-4 py-2.5 text-[1rem] font-medium transition-colors ${pathname === `/products/${product.slug}`
                                                        ? 'text-[#00a2e8] bg-sky-50/70'
                                                        : 'text-slate-600 hover:text-[#00a2e8] hover:bg-sky-50/50'
                                                        }`}
                                                >
                                                    {product.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* About Us */}
                            <Link
                                href="/about"
                                className={`relative px-3 lg:px-4 py-2 text-[1rem] font-medium transition-colors ${pathname === '/about'
                                    ? 'text-[#00a2e8]'
                                    : 'text-slate-700 hover:text-[#00a2e8]'
                                    }`}
                            >
                                About Us
                                {pathname === '/about' && (
                                    <span className="absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-[2px] bg-[#00a2e8] rounded-full" />
                                )}
                            </Link>

                            {/* Contact Us */}
                            <Link
                                href="/contact"
                                className={`relative px-3 lg:px-4 py-2 text-[1rem] font-medium transition-colors ${pathname === '/contact'
                                    ? 'text-[#00a2e8]'
                                    : 'text-slate-700 hover:text-[#00a2e8]'
                                    }`}
                            >
                                Contact Us
                                {pathname === '/contact' && (
                                    <span className="absolute bottom-0 left-3 right-3 lg:left-4 lg:right-4 h-[2px] bg-[#00a2e8] rounded-full" />
                                )}
                            </Link>

                            {/* CTA: WhatsApp Chat Button */}
                            <a
                                href="https://wa.me/919140073153?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 lg:ml-4 inline-flex items-center justify-center rounded-full bg-[#00a2e8] hover:bg-[#008ec9] text-white text-[1.1rem] font-semibold px-5 py-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.97]"
                            >
                                GET A QUOTE
                            </a>
                        </nav>

                        {/* Mobile Hamburger Button */}
                        <div className="flex md:hidden items-center">
                            <button
                                type="button"
                                onClick={() => setMobileOpen(!mobileOpen)}
                                className="p-2 rounded-lg text-slate-600 hover:text-[#00a2e8] hover:bg-slate-50 transition-colors"
                                aria-label="Toggle navigation menu"
                            >
                                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ===== Mobile Navigation Drawer ===== */}
            <div
                className={`md:hidden absolute left-0 right-0 bg-white border-b border-slate-200 shadow-lg z-40 transition-all duration-300 origin-top ${mobileOpen
                    ? 'opacity-100 scale-y-100'
                    : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}
            >
                <div className="px-4 pt-3 pb-5 space-y-1">
                    <Link
                        href="/"
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${pathname === '/'
                            ? 'text-[#00a2e8] bg-sky-50/60 font-semibold'
                            : 'text-slate-700 hover:text-[#00a2e8] hover:bg-slate-50'
                            }`}
                    >
                        Home
                    </Link>

                    {/* Mobile Products Accordion */}
                    <div>
                        <button
                            type="button"
                            onClick={() => setMobileProductsOpen((prev) => !prev)}
                            className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${pathname?.startsWith('/products') || mobileProductsOpen
                                ? 'text-[#00a2e8] bg-sky-50/60 font-semibold'
                                : 'text-slate-700 hover:text-[#00a2e8] hover:bg-slate-50'
                                }`}
                        >
                            <span>Products</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-[#00a2e8]' : 'text-slate-400'
                                    }`}
                            />
                        </button>

                        <div
                            className={`overflow-hidden transition-all duration-300 ${mobileProductsOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="pl-4 pr-2 pt-1 pb-1 space-y-0.5 border-l-2 border-[#00a2e8]/20 ml-3 mt-1">
                                {products.map((product) => (
                                    <Link
                                        key={product.slug}
                                        href={`/products/${product.slug}`}
                                        onClick={() => {
                                            setMobileOpen(false);
                                            setMobileProductsOpen(false);
                                        }}
                                        className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === `/products/${product.slug}`
                                            ? 'text-[#00a2e8] font-semibold bg-sky-50/70'
                                            : 'text-slate-600 hover:text-[#00a2e8] hover:bg-sky-50/50'
                                            }`}
                                    >
                                        {product.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/about"
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${pathname === '/about'
                            ? 'text-[#00a2e8] bg-sky-50/60 font-semibold'
                            : 'text-slate-700 hover:text-[#00a2e8] hover:bg-slate-50'
                            }`}
                    >
                        About Us
                    </Link>

                    <Link
                        href="/contact"
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${pathname === '/contact'
                            ? 'text-[#00a2e8] bg-sky-50/60 font-semibold'
                            : 'text-slate-700 hover:text-[#00a2e8] hover:bg-slate-50'
                            }`}
                    >
                        Contact Us
                    </Link>

                    <div className="pt-2 px-1">
                        <a
                            href="https://wa.me/919140073153?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileOpen(false)}
                            className="block w-full text-center rounded-full bg-[#00a2e8] hover:bg-[#008ec9] text-white px-6 py-2.5 text-sm font-semibold transition-colors shadow-sm"
                        >
                            GET A QUOTE
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;