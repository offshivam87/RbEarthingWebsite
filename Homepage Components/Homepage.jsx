import React from 'react'
import HeroSection from './HeroSection'
import Aboutus from './Aboutus'
import ProductSection from './ProductSection'
import SeoContentSection from './SeoContentSection'
import FaqSection from './FaqSection'
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const contactDetails = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+91-91400-73153',
        href: 'tel:+91-9140073153',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'rbearthingcompany@gmail.com',
        href: 'mailto:rbearthingcompany@gmail.com',
    },
    {
        icon: MapPin,
        label: 'Location',
        value: 'Ludhiana, Punjab, India',
        href: 'https://maps.google.com/?q=RB+Earthing+Company+Ludhiana',
    },
]

const Homepage = () => {
    return (
        <div>
            <HeroSection />
            <ProductSection />
            <Aboutus />


            {/* ───── Contact / Quote Section ───── */}
            <section id="contact" className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                        {/* Left Column – Copy & Contact Info */}
                        <div className="flex flex-col gap-8">
                            {/* Badge + Heading */}
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/80 text-blue-500 text-xs sm:text-sm font-medium mb-4">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                    <span>Get In Touch</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight mb-4">
                                    Request a Free Quote
                                </h2>

                                <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-lg">
                                    Share your project requirements and our
                                    engineering team will get back to you within
                                    24 hours with a tailored earthing solution.
                                </p>
                            </div>

                            {/* Contact Detail Cards */}
                            <div className="flex flex-col gap-3 sm:gap-4">
                                {contactDetails.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            target={
                                                item.href.startsWith('http')
                                                    ? '_blank'
                                                    : undefined
                                            }
                                            rel={
                                                item.href.startsWith('http')
                                                    ? 'noopener noreferrer'
                                                    : undefined
                                            }
                                            className="group flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-all duration-300"
                                        >
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#00a2e8] to-[#00a2e8] text-white shadow-sm">
                                                <Icon className="h-4 w-4" />
                                            </span>
                                            <div>
                                                <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                                                    {item.label}
                                                </span>
                                                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">
                                                    {item.value}
                                                </span>
                                            </div>
                                        </a>
                                    )
                                })}
                            </div>

                            {/* CTA link to full contact page */}
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#003a6b] hover:text-[#00264d] transition-colors group w-fit"
                            >
                                {/* <span>View full contact page & map</span> */}
                                {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> */}
                            </Link>
                        </div>

                        {/* Right Column – Contact Form */}
                        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-lg shadow-slate-200/40">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">
                                Tell Us About Your Project
                            </h3>
                            <p className="text-sm text-slate-400 mb-6">
                                Fill in the form and we&apos;ll respond promptly.
                            </p>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage