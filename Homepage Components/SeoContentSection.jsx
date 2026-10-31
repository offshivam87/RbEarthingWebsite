'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Award, CheckCircle2, ArrowRight, Factory, Zap, Wrench } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';

const features = [
    {
        icon: Factory,
        title: 'Ludhiana Manufacturing Facility',
        description: 'Engineered and manufactured with precision in Ludhiana, Punjab, catering to diverse soil resistivities and high fault-current environments.',
    },
    {
        icon: Award,
        title: 'Tested at CPRI & NABL Labs',
        description: 'Type-tested for extreme short-circuit fault currents with ISO 9001:2015 quality controls, CE marking, and RoHS compliance.',
    },
    {
        icon: Zap,
        title: 'Low Resistance (<1Ω) Grounding',
        description: 'Precision pure copper, copper bonded, and pipe-in-strip GI electrodes designed for rapid dissipation and lifelong stability.',
    },
    {
        icon: Wrench,
        title: 'Maintenance-Free Chemistry',
        description: 'Advanced moisture-retaining chemical backfill compounds that eliminate constant pit watering and seasonal resistance spikes.',
    },
];

export default function SeoContentSection() {
    return (
        <section className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header with City & Company Name */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[#00a2e8] text-xs sm:text-sm font-semibold mb-4">
                        <MapPin className="w-3.5 h-3.5 text-[#00a2e8]" />
                        <span>Based in Ludhiana, Serving Pan-India</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-5">
                        RB Earthing Company — Premier Grounding &amp; Lightning Protection in Ludhiana
                    </h2>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Operating from our industrial base in <strong>Ludhiana, Punjab</strong>, <strong>RB Earthing Company</strong> is a premier manufacturer and supplier of certified chemical earthing systems, high-tensile copper bonded rods, hot-dip galvanized electrodes, and ESE lightning arresters. We protect industrial machinery, commercial infrastructure, solar farms, and residential facilities from hazardous electrical surges and direct lightning strikes.
                    </p>
                </div>

                {/* 4 Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                    {features.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col"
                            >
                                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#00a2e8] flex items-center justify-center mb-4 shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-base font-bold text-slate-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Local Ludhiana & Industrial Scope Information */}
                <div className="bg-gradient-to-r from-[#003a6b] to-[#00264d] rounded-2xl p-8 sm:p-10 text-white shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <span className="text-cyan-300 text-xs font-bold uppercase tracking-wider block mb-2">
                                Local Expertise · National Reliability
                            </span>
                            <h3 className="text-xl sm:text-2xl font-bold mb-3">
                                Reliable Earthing Solutions for Ludhiana Industrialists &amp; EPC Contractors
                            </h3>
                            <p className="text-sm text-blue-100/90 leading-relaxed mb-4">
                                Whether your facility is in Focal Point, Industrial Area A &amp; B, Dhandari Kalan, or Sahnewal, or you are executing major projects across Punjab, Haryana, Himachal Pradesh, and all of India — RB Earthing Company provides prompt factory direct supply, earth resistance testing support, and technical guidance.
                            </p>
                            <div className="flex flex-wrap gap-y-2 gap-x-6 text-xs text-blue-200">
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    IS 3043 Compliant
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    Immediate Stock &amp; Custom Sizes
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                    Engineering Support
                                </span>
                            </div>
                        </div>

                        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#00a2e8] hover:bg-[#008ec9] text-white text-sm font-semibold transition-all shadow-md active:scale-95 text-center"
                            >
                                <span>Request Quotation</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href={`tel:${siteConfig.contact.phoneRaw}`}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-semibold transition-all text-center"
                            >
                                <span>Call {siteConfig.contact.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

