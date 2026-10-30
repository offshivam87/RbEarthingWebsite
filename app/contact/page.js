import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Contact Us | RB Earthing Pvt. Ltd.",
    description:
        "Get in touch with RB Earthing for earthing electrodes, chemical earthing, and lightning protection solutions. Request a free quote today.",
};

const contactInfo = [
    {
        icon: Phone,
        label: "Phone",
        value: "+919140073153",
        href: "tel:+919140073153",
        color: "from-blue-500 to-cyan-400",
    },
    {
        icon: Mail,
        label: "Email",
        value: "rbearthingcompany@gmail.com",
        href: "mailto:rbearthingcompany@gmail.com",
        color: "from-violet-500 to-purple-400",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "RB Earthing Company, Ludhiana, Punjab, India",
        href: "https://maps.google.com/?q=RB+Earthing+Company+Ludhiana",
        color: "from-emerald-500 to-teal-400",
    },
    {
        icon: Clock,
        label: "Business Hours",
        value: "Mon – Sat: 9:00 AM – 6:00 PM",
        href: null,
        color: "from-amber-500 to-orange-400",
    },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* ───── Hero Banner ───── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#003a6b] via-[#00264d] to-[#001a35]">
                {/* Decorative blurred circles */}
                <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
                    <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-sm">
                        Get In Touch
                    </span>
                    <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Contact Us
                    </h1>
                    <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100/80">
                        Have a question about our earthing solutions?
                        Our expert team is ready to help you find the
                        perfect grounding solution for your project.
                    </p>
                </div>

                {/* Bottom wave divider */}
                {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block h-10 w-full sm:h-16"
                    >
                        <path
                            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                            className="fill-white"
                            opacity=".3"
                        />
                        <path
                            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                            className="fill-white"
                            opacity=".5"
                        />
                        <path
                            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                            className="fill-white"
                        />
                    </svg>
                </div> */}
            </section>

            {/* ───── Contact Info Cards ───── */}
            <section className="relative z-10 mx-auto -mt-2 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {contactInfo.map((item) => {
                        const Icon = item.icon;
                        const Wrapper = item.href ? "a" : "div";
                        const wrapperProps = item.href
                            ? {
                                href: item.href,
                                target:
                                    item.href.startsWith("http")
                                        ? "_blank"
                                        : undefined,
                                rel: item.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined,
                            }
                            : {};

                        return (
                            <Wrapper
                                key={item.label}
                                {...wrapperProps}
                                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >
                                {/* Gradient accent bar */}
                                <div
                                    className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${item.color}`}
                                />
                                <div
                                    className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white shadow-md`}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                    {item.label}
                                </p>
                                <p className="mt-1 text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                                    {item.value}
                                </p>
                            </Wrapper>
                        );
                    })}
                </div>
            </section>

            {/* ───── Form + Map Two-Column Section ───── */}
            <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left Column – Contact Form */}
                    <div>
                        <div className="mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200/60 bg-blue-50/80 text-blue-500 text-xs sm:text-sm font-medium mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                <span>Request a Quote</span>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Tell Us About Your Project
                            </h2>
                            <p className="mt-3 text-base leading-relaxed text-slate-500">
                                Share your requirements and our team will
                                get in touch with you within 24 hours
                                with a tailored solution.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
                            <ContactForm />
                        </div>
                    </div>

                    {/* Right Column – Map + Extra Info */}
                    <div className="flex flex-col gap-8">
                        {/* Google Maps Embed */}
                        <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50">
                            <div className="bg-gradient-to-r from-[#003a6b] to-[#00264d] px-6 py-4">
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-cyan-300" />
                                    <h3 className="text-lg font-semibold text-white">
                                        Our Location
                                    </h3>
                                </div>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.6227319486443!2d75.87027957619819!3d30.897213277663795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837e721e76e1%3A0xfb3a05538dc5548d!2sRB%20Earthing%20Company!5e0!3m2!1sen!2sin!4v1792170926439!5m2!1sen!2sin"
                                width="100%"
                                height="350"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="RB Earthing Company Location"
                                className="w-full"
                            />
                        </div>

                        {/* Why Choose Us */}
                        <div className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg shadow-slate-200/50 sm:p-8">
                            <h3 className="mb-5 text-xl font-bold text-slate-900">
                                Why Choose RB Earthing?
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "ISO certified earthing solutions",
                                    "9+ years of industry experience",
                                    "Pan-India installation services",
                                    "Competitive pricing & free site survey",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white shadow-sm">
                                            <svg
                                                className="h-3.5 w-3.5"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={3}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-sm font-medium text-slate-600">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Quick Call-to-Action */}
                        <a
                            href="tel:+91XXXXXXXXXX"
                            className="group flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#003a6b] to-[#00264d] px-6 py-5 text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20"
                        >
                            <div>
                                <p className="text-sm font-medium text-blue-200">
                                    Prefer to talk?
                                </p>
                                <p className="text-lg font-bold">
                                    Call us now
                                </p>
                            </div>
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-1">
                                <ArrowRight className="h-5 w-5" />
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}