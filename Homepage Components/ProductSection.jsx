'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Award } from 'lucide-react';

const trendingProducts = [
    {
        id: 1,
        name: 'Copper Bonded Chemical Electrode',
        category: 'Grounding Rods',
        badge: 'Best Seller',
        description: 'High-tensile steel core with 250+ micron molecularly bonded copper for superior fault dissipation.',
        specs: ['250+ Micron Copper', 'Maintenance Free', 'UL / IEC Certified'],
        image: '/products/copper-bonded-electrode.jpg',
        href: '/products/copper-bonded-electrode',
    },
    {
        id: 2,
        name: 'Early Streamer ESE Lightning Arrester',
        category: 'Surge & Lightning Protection',
        badge: 'Trending',
        description: 'Advanced early streamer emission technology offering up to 107m radius of total facility protection.',
        specs: ['107m Protection Radius', 'Stainless Steel 316L', 'NFC 17-102 Compliant'],
        image: '/products/lightning-arrester.jpg',
        href: '/products/lightning-arrester',
    },
    {
        id: 3,
        name: 'Carbon Grounding Backfill Compound',
        category: 'Chemical Earthing',
        badge: 'Eco Safe',
        description: 'Specially formulated mineral carbon mix that maintains soil moisture and minimizes earth resistance.',
        specs: ['Resistivity < 0.2 Ω-m', 'Non-Leaching Mineral', '25 kg Moisture Pack'],
        image: '/products/backfill-compound.jpg',
        href: '/products/backfill-compound',
    },
    {
        id: 4,
        name: 'Electrolytic Copper Earthing Strip & Plate',
        category: 'Conductors & Hardware',
        badge: 'High Conductivity',
        description: '99.9% pure electrical grade copper tape and perforated plates for heavy industrial grounding busbars.',
        specs: ['99.9% Pure Copper', 'High Corrosion Resistance', 'IS 3043 Standard'],
        image: '/products/copper-strip-plate.jpg',
        href: '/products/copper-strip-plate',
    },
];

const ProductSection = () => {
    return (
        <section id="products" className="py-16 md:py-24 bg-slate-50/70">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/80 text-blue-500 text-xs sm:text-sm font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                        <span>Featured Solutions</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
                        Our Trending Products
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                        Engineered with precision for maximum electrical conductivity, extreme durability, and complete personnel safety across commercial, solar, and industrial facilities.
                    </p>
                </div>

                {/* 4 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trendingProducts.map((product) => (
                        <div
                            key={product.id}
                            className="group flex flex-col bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                        >
                            {/* Image Container */}
                            <div className="relative w-full aspect-square bg-slate-100 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="inline-block text-[11px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/95 text-slate-800 shadow-sm backdrop-blur-xs border border-slate-100">
                                        {product.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex flex-col flex-1 p-5">
                                <div className="text-[11px] font-semibold uppercase tracking-wider text-[#00a2e8] mb-1.5">
                                    {product.category}
                                </div>

                                <h3 className="text-base sm:text-lg font-bold text-slate-900 line-clamp-2 leading-snug group-hover:text-[#00a2e8] transition-colors mb-2">
                                    {product.name}
                                </h3>

                                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                                    {product.description}
                                </p>

                                {/* Key Specs List */}
                                <div className="mt-auto pt-3 border-t border-slate-100 space-y-1.5 mb-4">
                                    {product.specs.map((spec, i) => (
                                        <div key={i} className="flex items-center text-[11px] text-slate-600 gap-1.5">
                                            <ShieldCheck className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                                            <span>{spec}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Card Action */}
                                <Link
                                    href={product.href}
                                    className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 text-xs font-semibold text-slate-700 group-hover:bg-[#00a2e8] group-hover:text-white group-hover:border-[#003a6b] transition-all duration-300"
                                >
                                    <span>Enquire Details</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="mt-12 md:mt-16 text-center">
                    <Link
                        href="/products"
                        className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#00a2e8] to-[#00a2e8] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:bg-[#00638d] hover:text-white hover:scale-[1.02] active:scale-[0.99] transition-all duration-300"
                    >
                        <span>View More Products</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
