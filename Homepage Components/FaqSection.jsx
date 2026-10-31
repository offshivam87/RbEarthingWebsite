'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { getFaqSchema } from '@/lib/jsonLd';

export const faqs = [
    {
        question: 'Where is RB Earthing Company located and do you deliver across India?',
        answer: 'RB Earthing Company is proudly headquartered and manufactured in Ludhiana, Punjab, India. In addition to serving local industries and contractors across Ludhiana and Punjab, we maintain a robust distribution network delivering certified earthing materials and lightning protection systems pan-India.',
    },
    {
        question: 'What types of earthing electrodes does RB Earthing Company manufacture?',
        answer: 'We manufacture a complete range of grounding solutions, including Pure Copper Earthing Electrodes (PC-02), Copper Bonded Earth Rods with molecular 250-micron bonding (CB-04), Hot-Dip Galvanized (GI) Pipe-in-Strip Electrodes (GI-01), and heavy-duty HDPE Earthing Pit Covers.',
    },
    {
        question: 'Are RB Earthing Company products certified by CPRI and NABL?',
        answer: 'Yes. Our earthing electrodes and components are type-tested for fault-current dissipation at CPRI and NABL accredited laboratories. We manufacture under rigorous ISO 9001:2015 quality controls with CE (2014/35/EU) and RoHS compliance, meeting IS 3043 and IEEE 80 standards.',
    },
    {
        question: 'What is chemical earthing and why is it superior to conventional earthing?',
        answer: 'Chemical earthing utilizes specialized conductive backfill compounds (CB-08) around corrosion-resistant electrodes instead of traditional salt and charcoal. It maintains deep moisture, ensures stable low resistance (<1 Ohm) across all seasons, eliminates manual watering, and offers an operational lifespan exceeding 25 years.',
    },
    {
        question: 'What is an ESE Lightning Arrester and how does it protect buildings?',
        answer: 'An Early Streamer Emission (ESE) lightning arrester emits early upward streamers during thunderstorm electrical field build-up, capturing direct atmospheric strikes before they hit structures. It provides an expansive protection radius of up to 107 meters using marine-grade SS 316L construction.',
    },
    {
        question: 'How can I get a quotation or engineering consultation for my project?',
        answer: 'You can submit your requirements via our website contact form, call our engineering desk directly at +91-91400-73153, or email rbearthingcompany@gmail.com. We provide comprehensive technical specifications and customized commercial quotes within 24 hours.',
    },
];

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(0);
    const faqSchema = getFaqSchema(faqs);

    return (
        <section className="py-16 md:py-24 bg-white" id="faq">
            {/* Embedded Schema.org FAQPage for Google Search Engine Rich Snippets */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/80 text-[#00a2e8] text-xs sm:text-sm font-semibold mb-4">
                        <HelpCircle className="w-4 h-4 text-[#00a2e8]" />
                        <span>Common Questions</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                        Frequently Asked Questions
                    </h2>

                    <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
                        Everything you need to know about RB Earthing Company, our Ludhiana manufacturing, product compliance, and grounding engineering.
                    </p>
                </div>

                {/* FAQ List */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                                    isOpen
                                        ? 'border-blue-200 bg-blue-50/20 shadow-sm'
                                        : 'border-slate-200/80 bg-white hover:border-slate-300'
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base sm:text-lg font-semibold text-slate-900 pr-4">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                                            isOpen
                                                ? 'bg-[#00a2e8] text-white rotate-180'
                                                : 'bg-slate-100 text-slate-500'
                                        }`}
                                    >
                                        <ChevronDown className="w-4 h-4" />
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-blue-100/60 animate-in fade-in duration-200">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

