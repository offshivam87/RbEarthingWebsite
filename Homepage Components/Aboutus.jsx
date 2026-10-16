'use client';

import React, { useEffect, useRef, useState } from 'react';

const stats = [
    { target: 98, suffix: '%', label: 'Customer Satisfaction' },
    { target: 40, suffix: '%', label: 'Faster Installation' },
    { target: 1500, suffix: '+', label: 'Projects Delivered' },
    { target: 15, suffix: '+', label: 'Years of Experience' },
];

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

const Aboutus = () => {
    return (
        <section id="about" className="py-16 md:py-24 bg-white">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">


                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
                    Who We Are
                </h2>

                <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    RB Earthing is a trusted provider of advanced electrical grounding and safety solutions. Based in Ahmedabad, India, we specialize in delivering high-performance earthing electrodes, chemical earthing systems, lightning arresters, and comprehensive electrical safety audits for residential, commercial, industrial, and solar projects. Committed to integrity, safety, and precision, we strive to make safe earthing simple and accessible for everyone.
                </p>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Bold Statement */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-slate-900 leading-snug md:leading-tight mb-6">
                    We build reliable and efficient earthing systems for homes and industries. With advanced grounding technology, we{' '}
                    <span className="text-slate-500">
                        help people achieve complete electrical safety without complexity.
                    </span>
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
        </section>
    );
};

export default Aboutus;