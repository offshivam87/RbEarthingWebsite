'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    Shield,
    Zap,
    Award,
    Users,
    Target,
    Eye,
    Heart,
    CheckCircle,
    ArrowRight,
    Building2,
    Lightbulb,
    Globe,
} from 'lucide-react';

/* ───────────────────── Stat Counter (scroll-triggered) ───────────────────── */

function StatCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    let start = null;
                    const step = (ts) => {
                        if (!start) start = ts;
                        const p = Math.min((ts - start) / duration, 1);
                        const ease = 1 - Math.pow(1 - p, 3);
                        setCount(Math.floor(ease * target));
                        if (p < 1) requestAnimationFrame(step);
                        else setCount(target);
                    };
                    requestAnimationFrame(step);
                }
            },
            { threshold: 0.15 }
        );
        observer.observe(el);
        return () => observer.unobserve(el);
    }, [target, duration]);

    return (
        <span ref={ref}>
            {count}
            {suffix}
        </span>
    );
}

/* ────────────────────────── Fade-in-on-scroll wrapper ────────────────────── */

function FadeIn({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.unobserve(el);
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(32px)',
                transition: `opacity 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms, transform 0.7s cubic-bezier(.22,1,.36,1) ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* ───────────────────────────── Data ───────────────────────────── */

const stats = [
    { target: 1500, suffix: '+', label: 'Projects Delivered', icon: Building2 },
    { target: 15, suffix: '+', label: 'Years of Experience', icon: Award },
    { target: 98, suffix: '%', label: 'Client Satisfaction', icon: Users },
    { target: 40, suffix: '%', label: 'Faster Installation', icon: Zap },
];

const values = [
    {
        icon: Target,
        title: 'Our Mission',
        description:
            'To deliver world-class earthing and lightning protection solutions that safeguard lives, assets, and infrastructure — making electrical safety accessible and reliable for every project.',
    },
    {
        icon: Eye,
        title: 'Our Vision',
        description:
            'To be the most trusted name in electrical grounding and safety across India, setting the benchmark for quality, innovation, and customer satisfaction.',
    },
    {
        icon: Heart,
        title: 'Our Values',
        description:
            'Integrity in every installation, precision in every measurement, and an unwavering commitment to the safety of the people and places our systems protect.',
    },
];

const strengths = [
    'ISO-certified earthing solutions & products',
    'Comprehensive safety audits & earth-resistance testing',
    'High-performance copper-bonded & chemical electrodes',
    'End-to-end project delivery — design to commissioning',
    'Residential, commercial, industrial & solar expertise',
    'Dedicated after-sales support & maintenance',
];

/* ═══════════════════════════ PAGE COMPONENT ═══════════════════════════ */

export default function AboutPage() {
    return (
        <main className="bg-white text-slate-900">
            {/* ─── Hero Banner ─── */}
            <section className="relative w-full h-[340px] sm:h-[420px] lg:h-[480px] overflow-hidden">
                {/* Background image */}
                <Image
                    src="/about-hero.jpg"
                    alt="RB Earthing team installing earthing electrodes at an industrial site"
                    fill
                    sizes="100vw"
                    priority
                    quality={90}
                    className="object-cover"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00264d]/85 via-[#003a6b]/70 to-transparent" />

                {/* Content */}
                <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                    <FadeIn>
                        <span className="inline-block text-[#00a2e8] text-xs sm:text-sm font-semibold tracking-widest uppercase mb-3">
                            About RB Earthing
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-xl">
                            Building Trust from the <span className="text-[#00a2e8]">Ground Up</span>
                        </h1>
                        <p className="mt-4 text-white/80 text-sm sm:text-base max-w-lg leading-relaxed">
                            For over 15 years, we have been India&apos;s trusted partner in electrical earthing, grounding, and lightning protection — engineering safety you can rely on.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ─── Who We Are ─── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image side */}
                        <FadeIn>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                <Image
                                    src="/hero-banner-2.jpg"
                                    alt="RB Earthing installation"
                                    fill
                                    sizes="(min-width:1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                                {/* Accent corner */}
                                <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#00a2e8]/10 backdrop-blur-sm rounded-tr-[40px]" />
                                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-lg">
                                    <span className="block text-2xl font-extrabold text-[#00a2e8] tabular-nums">15+</span>
                                    <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">Years of Trust</span>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Text side */}
                        <FadeIn delay={150}>
                            <div>
                                <span className="text-[#00a2e8] text-xs font-semibold tracking-widest uppercase">
                                    Who We Are
                                </span>
                                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 leading-snug">
                                    A Legacy of Safety &amp; Precision in Electrical Earthing
                                </h2>
                                <p className="mt-5 text-slate-500 text-sm sm:text-base leading-relaxed">
                                    RB Earthing is a trusted provider of advanced electrical grounding and safety solutions based in Ahmedabad, India. We specialize in high-performance earthing electrodes, chemical earthing systems, lightning arresters, and comprehensive electrical safety audits for residential, commercial, industrial, and solar projects.
                                </p>
                                <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
                                    Our team of experienced engineers and technicians ensures every installation meets the highest standards of safety, durability, and performance — so you can have absolute confidence in your electrical infrastructure.
                                </p>

                                {/* Strength chips */}
                                <ul className="mt-8 space-y-3">
                                    {strengths.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                            <CheckCircle className="w-4 h-4 mt-0.5 text-[#00a2e8] shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ─── Mission / Vision / Values ─── */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                        <span className="text-[#00a2e8] text-xs font-semibold tracking-widest uppercase">
                            What Drives Us
                        </span>
                        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 leading-tight">
                            Mission, Vision &amp; Values
                        </h2>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        {values.map((item, i) => (
                            <FadeIn key={i} delay={i * 120}>
                                <div className="group bg-white rounded-2xl p-7 sm:p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:border-[#00a2e8]/20 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-xl bg-[#00a2e8]/10 flex items-center justify-center mb-5 group-hover:bg-[#00a2e8] transition-colors duration-300">
                                        <item.icon className="w-5 h-5 text-[#00a2e8] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-[#00264d] to-[#003a6b]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
                        <span className="text-[#00a2e8] text-xs font-semibold tracking-widest uppercase">
                            By the Numbers
                        </span>
                        <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[36px] font-bold text-white leading-tight">
                            Delivering Results That Speak
                        </h2>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, i) => (
                            <FadeIn key={i} delay={i * 100}>
                                <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl px-5 py-8 sm:py-10 text-center hover:bg-white/10 transition-all duration-300 group">
                                    <div className="w-10 h-10 rounded-full bg-[#00a2e8]/15 flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-4.5 h-4.5 text-[#00a2e8]" />
                                    </div>
                                    <span className="block text-3xl sm:text-4xl font-extrabold text-white mb-1 tabular-nums">
                                        <StatCounter target={stat.target} suffix={stat.suffix} />
                                    </span>
                                    <span className="block text-xs sm:text-sm text-white/60 font-medium">
                                        {stat.label}
                                    </span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Why Choose Us ─── */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Text side */}
                        <FadeIn>
                            <div>
                                <span className="text-[#00a2e8] text-xs font-semibold tracking-widest uppercase">
                                    Why Choose Us
                                </span>
                                <h2 className="mt-3 text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 leading-snug">
                                    Trusted by Industries Across India
                                </h2>
                                <p className="mt-5 text-slate-500 text-sm sm:text-base leading-relaxed">
                                    From residential complexes to large-scale industrial facilities and solar farms, RB Earthing has earned the confidence of clients who demand uncompromising quality and safety.
                                </p>

                                <div className="mt-8 grid sm:grid-cols-2 gap-5">
                                    {[
                                        { icon: Shield, title: 'Certified Quality', desc: 'ISO-certified products and installation processes.' },
                                        { icon: Lightbulb, title: 'Innovation-Led', desc: 'Cutting-edge electrode technology for optimal performance.' },
                                        { icon: Globe, title: 'Pan-India Reach', desc: 'Serving clients across all major cities and states.' },
                                        { icon: Award, title: 'Expert Team', desc: 'Skilled engineers with 15+ years of field expertise.' },
                                    ].map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 hover:bg-[#00a2e8]/5 transition-colors duration-200"
                                        >
                                            <div className="w-9 h-9 rounded-lg bg-[#00a2e8]/10 flex items-center justify-center shrink-0">
                                                <item.icon className="w-4 h-4 text-[#00a2e8]" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-semibold text-slate-800">{item.title}</h4>
                                                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Image side */}
                        <FadeIn delay={150}>
                            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                                <Image
                                    src="/hero-banner-4.jpg"
                                    alt="RB Earthing project"
                                    fill
                                    sizes="(min-width:1024px) 50vw, 100vw"
                                    className="object-cover"
                                />
                                {/* Floating badge */}
                                <div className="absolute top-4 right-4 bg-[#00a2e8] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg">
                                    ISO Certified
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ─── CTA Banner ─── */}
            <section className="py-16 md:py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <FadeIn>
                        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 leading-tight">
                            Ready to Secure Your Electrical Infrastructure?
                        </h2>
                        <p className="mt-4 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                            Get in touch with our team for a free consultation. We&apos;ll design a custom earthing solution tailored to your exact requirements.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#00a2e8] hover:bg-[#008ec9] text-white text-sm font-semibold px-7 py-3 transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.97]"
                            >
                                Get a Free Quote
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                href="/products/earthing-electrode"
                                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 hover:border-[#00a2e8] text-slate-700 hover:text-[#00a2e8] text-sm font-semibold px-7 py-3 transition-all duration-200"
                            >
                                Explore Products
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </main>
    );
}