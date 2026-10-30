'use client';

import React from 'react';

const certifications = [
    'ISO 9001:2015',
    'CPRI & NABL',
    'CE Marking',
    'RoHS Compliant',
];

const Marquee = () => {
    return (
        <div className="mt-12 md:mt-16 pt-8 overflow-hidden">
            {/* Marquee track */}
            <div className="relative w-full">
                {/* Fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 sm:w-40 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 sm:w-40 bg-gradient-to-l from-white to-transparent" />

                <div
                    className="flex whitespace-nowrap"
                    style={{
                        animation: 'marquee-scroll 20s linear infinite',
                    }}
                >
                    {[...certifications, ...certifications].map((cert, idx) => (
                        <span key={idx} className="flex items-center shrink-0">
                            <span className="mx-6 sm:mx-10 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-200 select-none">
                                {cert}
                            </span>
                            <span className="text-slate-200/60 text-2xl sm:text-4xl select-none">•</span>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Marquee;