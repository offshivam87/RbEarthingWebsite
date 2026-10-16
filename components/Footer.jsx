import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const navigation = {
    company: [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Contact Us', href: '/contact' },
    ],
    products: [
        { name: 'Earthing Electrode', href: '/products/earthing-electrode' },
        { name: 'Chemical Earthing', href: '/products/chemical-earthing' },
        { name: 'Lightning Arrester', href: '/products/lightning-arrester' },
    ],
}

const contactInfo = [
    {
        icon: Phone,
        text: '+91-9888858922',
        href: 'tel:+91XXXXXXXXXX',
    },
    {
        icon: Mail,
        text: 'info@rbearthing.com',
        href: 'mailto:info@rbearthing.com',
    },
    {
        icon: MapPin,
        text: 'Ludhiana, Punjab, India',
        href: 'https://maps.google.com/?q=RB+Earthing+Company+Ludhiana',
    },
]

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-gradient-to-r from-[#003a6b] to-[#00264d] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

                    {/* Column 1 – Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <Link href="/" className="inline-flex items-center gap-2.5 mb-4">
                            <Image
                                src="/logo-1.png"
                                alt="RB Earthing Logo"
                                width={48}
                                height={48}
                                className="rounded-lg"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed text-white  max-w-xs">
                            ISO certified earthing solutions provider delivering
                            reliable grounding systems for residential, commercial,
                            and industrial projects across India.
                        </p>
                    </div>

                    {/* Column 2 – Company Links */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2.5">
                            {navigation.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white hover:text-[#003a6b] transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 – Products */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
                            Products
                        </h3>
                        <ul className="space-y-2.5">
                            {navigation.products.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-white hover:text-white transition-colors duration-200"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 – Contact */}
                    <div>
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-4">
                            Contact Us
                        </h3>
                        <ul className="space-y-3">
                            {contactInfo.map((item) => {
                                const Icon = item.icon
                                return (
                                    <li key={item.text}>
                                        <a
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
                                            className="flex items-start gap-2.5 text-sm text-white transition-colors duration-200"
                                        >
                                            <Icon className="w-4 h-4 mt-0.5 shrink-0 text-white transition-colors" />
                                            <span>{item.text}</span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-blue-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white">
                        <p>
                            &copy; {currentYear} RB Earthing Pvt. Ltd. All rights reserved.
                        </p>
                        <p className="flex items-center gap-1.5">
                            <span>ISO Certified Earthing Solutions</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
