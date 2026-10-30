'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ReactLenis from 'lenis/react';

/* ─── Scroll‑stack card data ─── */
const services = [
    {
        category: 'Manufacturing Since 2017 · Earthing Systems',
        title: 'Copper, Bonded & GI Electrodes. Built for Extreme Faults.',
        description:
            'Precision-engineered earthing electrodes and low-carbon copper bonded rods built to deliver low ground resistance and withstand corrosive soils (pH 5.0 to 8.0) without degradation.',
        src: '/card 1.png',
        stats: [
            { label: 'Earth Resistance', value: '<1Ω' },
            { label: 'Lifespan', value: '25+ Yrs' },
        ],
    },
    {
        category: 'SOIL TECHNOLOGY · MAINTENANCE-FREE',
        title: 'Moisture-Retaining Compounds. Consistent Low Ohms.',
        description:
            'Specially formulated chemical backfill compound that conditions surrounding soil, locks in deep moisture, and eliminates recurring manual watering and pit replenishment.',
        src: '/card2.png',
        stats: [
            { label: 'Soil Range', value: 'pH 5.0 to 8.0' },
            { label: 'Maintenance', value: 'Zero Water' },
        ],
    },
    {
        category: 'SURGE & STRIKE DEFENSE · AIR TERMINALS',
        title: 'Conventional Lightning Arresters. Safe Strike Diversion.',
        description:
            'Multi-spike copper air terminals engineered to capture direct atmospheric lightning strikes and channel mega-ampere surge currents safely into the ground before equipment failure occurs.',
        src: '/card3.png',
        stats: [
            { label: 'Material', value: 'Pure Copper' },
            { label: 'Operation', value: 'Passive' },
        ],
    },
    {
        category: 'LAB VALIDATION · CERTIFIED STANDARDS',
        title: 'Tested at CPRI & NABL. CE & RoHS Compliant.',
        description:
            'High fault-current performance type-tested at CPRI and NABL accredited laboratories, manufactured under ISO 9001:2015 controls with CE (2014/35/EU) and RoHS compliance.',
        src: '/badge.png',
        mobileContain: true,
        stats: [
            { label: 'Testing Labs', value: 'CPRI/NABL' },
            { label: 'Compliance', value: 'CE & RoHS' },
        ],
    },
];

/* ─── Stats ─── */
const stats = [
    { target: 98, suffix: '%', label: 'Customer Satisfaction' },
    { target: 40, suffix: '%', label: 'Faster Installation' },
    { target: 1500, suffix: '+', label: 'Projects Delivered' },
    { target: 15, suffix: '+', label: 'Years of Experience' },
];

/* ──────────────────────────────────────────
   StatCounter — animated number counter
   ────────────────────────────────────────── */
function StatCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const element = countRef.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;

                    let startTime = null;
                    const step = (timestamp) => {
                        if (!startTime) startTime = timestamp;
                        const progress = Math.min((timestamp - startTime) / duration, 1);

                        // Ease-out cubic curve for smooth deceleration
                        const easeOut = 1 - Math.pow(1 - progress, 3);
                        const current = Math.floor(easeOut * target);

                        setCount(current);

                        if (progress < 1) {
                            requestAnimationFrame(step);
                        } else {
                            setCount(target);
                        }
                    };

                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.15 }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [target, duration]);

    return (
        <span ref={countRef}>
            {count}
            {suffix}
        </span>
    );
}

/* ──────────────────────────────────────────
   StickyServiceCard — split layout card
   ────────────────────────────────────────── */
function StickyServiceCard({ i, title, description, category, src, mobileContain, stats, progress, range, targetScale }) {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div
            ref={container}
            className="sticky top-0 flex items-center justify-center h-screen"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 24 + 100}px)`,
                }}
                className="relative -top-1/4 flex flex-col md:flex-row w-[85vw] sm:w-[88vw] max-w-[1200px] origin-top overflow-hidden rounded-2xl sm:rounded-3xl bg-[#f5f5f5] shadow-lg md:shadow-2xl md:h-[520px] lg:h-[560px]"
            >
                {/* ── Image ── */}
                <div className="w-full md:w-[45%] md:h-full shrink-0 order-1 md:order-2">

                    {/* Mobile: full-bleed image */}
                    <div className={`md:hidden w-full h-[200px] relative${mobileContain ? ' bg-white' : ''}`}>
                        <img
                            src={src}
                            alt={title}
                            className={`absolute inset-0 h-full w-full ${mobileContain ? 'object-contain p-4' : 'object-cover'} object-center`}
                        />
                    </div>

                    {/* Desktop: fills entire right panel */}
                    <div className="hidden md:block relative h-full w-full">
                        <img
                            src={src}
                            alt={title}
                            className="absolute inset-0 h-full w-full object-cover object-center rounded-r-3xl"
                        />
                    </div>
                </div>

                {/* ── Text content ── */}
                <div className="flex flex-col justify-between w-full md:w-[55%] p-3 sm:p-8 md:p-12 lg:p-14 order-2 md:order-1">
                    {/* Category tag */}
                    <span className="text-[9px] sm:text-xs text-slate-400 font-medium tracking-wide uppercase">
                        {category}
                    </span>

                    {/* Title + Description */}
                    <div className="mt-1.5 mb-1 md:my-0">
                        <h3 className="text-sm sm:text-2xl md:text-3xl lg:text-[36px] font-bold text-slate-900 leading-tight mb-1 sm:mb-3">
                            {title}
                        </h3>
                        <p className="text-[11px] sm:text-sm md:text-base text-slate-500 leading-relaxed max-w-lg line-clamp-2 md:line-clamp-none">
                            {description}
                        </p>
                    </div>

                    {/* Mini stat boxes */}
                    {stats && stats.length > 0 && (
                        <div className="flex gap-2 sm:gap-4 mt-2 sm:mt-4 md:mt-6">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg sm:rounded-2xl px-2.5 py-1.5 sm:px-5 sm:py-3.5 flex-1 md:flex-initial min-w-0 md:min-w-[140px] shadow-sm"
                                >
                                    <span className="block text-[9px] sm:text-xs text-slate-400 font-medium truncate">
                                        {stat.label}
                                    </span>
                                    <span className="block text-xs sm:text-xl md:text-2xl font-extrabold text-slate-900 truncate">
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

/* ──────────────────────────────────────────
   Aboutus — main section
   ────────────────────────────────────────── */
const Aboutus = () => {
    const stackRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: stackRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section id="about" className="bg-white">
            {/* ── Intro: Who We Are ── */}
            <div className="pt-16 md:pt-24 pb-0">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 px-4">
                    <h2 className="text-3xl sm:text-4xl lg:text-[60px] font-bold text-[#00a2e8] tracking-tight leading-tight mb-4">
                        The Foundation of Electrical Safety
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                        RB Earthing Private Limited is a Ludhiana, Punjab-based company focused on earthing, grounding and lightning protection products for electrical safety applications. Our product portfolio includes GI Earthing Electrodes, Copper Bonded Earthing Rods, Pure Copper Earthing Electrodes, Chemical Earthing Systems, Earthing Compounds, Lightning Arresters, Earthing Accessories and other electrical safety products.
                    </p>
                </div>

                {/* ── Section divider label ── */}
                <div className="flex flex-col items-center gap-2 mb-0">
                    <span className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                        Our Solutions
                    </span>
                    <span className="block w-px h-8 bg-gradient-to-b from-slate-300 to-transparent" />
                </div>
            </div>

            {/* ── Scroll-Stack Cards ── */}
            <ReactLenis root>
                <div
                    ref={stackRef}
                    className="relative"
                >
                    {services.map((service, i) => {
                        const targetScale = Math.max(
                            0.85,
                            1 - (services.length - i - 1) * 0.05,
                        );
                        return (
                            <StickyServiceCard
                                key={`service_${i}`}
                                i={i}
                                {...service}
                                progress={scrollYProgress}
                                range={[i * (1 / services.length), 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </ReactLenis>

            {/* ── Bold Statement + Stats ── */}
            <div className="py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    {/* Bold Statement */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#00a2e8] leading-snug md:leading-tight mb-6">
                        Trusted Earthing Partner for Heavy Industry & Solar Grids.
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-16">
                        Our solutions are designed to minimize earth resistance, protect against lightning strikes, and offer long-term reliability through durable components and intelligent system design.
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-slate-50 rounded-2xl px-4 py-6 sm:py-8 transition-all duration-300 hover:bg-slate-100 "
                            >
                                <span className="block text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1 tabular-nums">
                                    <StatCounter target={stat.target} suffix={stat.suffix} />
                                </span>
                                <span className="block text-xs sm:text-sm text-slate-500 font-medium">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Aboutus;