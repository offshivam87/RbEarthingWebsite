'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const banners = [
    {
        src: '/Banner-2.png',

        alt: 'RB Earthing Solutions – Safety runs on grounding, grounding runs on trust',
    },
    {
        src: '/bannerone.png',
        alt: 'Expert earthing installation – Precision-engineered electrodes for every application',
    },
    {
        src: '/Banner-3.png',
        alt: 'Lightning protection – Shielding your world from nature\'s fury',
    },
    {
        src: '/Banner-4.png',
        alt: 'Trusted by industry leaders – End-to-end earthing solutions backed by expertise',
    },
];

const HeroSection = () => {
    return (
        <section id="hero" className="relative w-full lg:h-[75vh]">
            <h1 className="sr-only">
                RB Earthing Company | Leading Earthing Electrode &amp; Lightning Protection Manufacturer in Ludhiana, Punjab
            </h1>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    bulletClass: 'hero-dot',
                    bulletActiveClass: 'hero-dot-active',
                    horizontalClass: 'hero-pagination-horizontal',
                }}
                loop={true}
                speed={800}
                className="w-full hero-swiper lg:h-full"
            >
                {banners.map((banner, index) => (
                    <SwiperSlide key={index} className="lg:h-full">
                        <div className="relative w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[16/6] lg:aspect-auto lg:h-full">
                            <Image
                                src={banner.src}
                                alt={banner.alt}
                                fill
                                sizes="100vw"
                                style={{ objectFit: 'cover' }}
                                priority={index === 0}
                                quality={90}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom styles for horizontal pagination dots at bottom center */}
            <style jsx global>{`
                .hero-swiper {
                    position: relative;
                }

                .hero-swiper .swiper-pagination {
                    position: absolute;
                    bottom: 16px !important;
                    left: 0 !important;
                    right: 0 !important;
                    top: auto !important;
                    width: 100% !important;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    z-index: 20;
                }

                .hero-dot {
                    display: block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.5);
                    border: 2px solid rgba(255, 255, 255, 0.8);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .hero-dot:hover {
                    background: rgba(255, 255, 255, 0.8);
                }

                .hero-dot-active {
                    background: #00a2e8 !important;
                    border-color: #00a2e8 !important;
                    transform: scale(1.3);
                    box-shadow: 0 0 8px rgba(0, 162, 232, 0.6);
                }

                @media (min-width: 768px) {
                    .hero-swiper .swiper-pagination {
                        bottom: 20px !important;
                        gap: 10px;
                    }

                    .hero-dot {
                        width: 12px;
                        height: 12px;
                    }
                }

                @media (min-width: 1024px) {
                    .hero-swiper {
                        height: 75vh;
                    }

                    .hero-swiper .swiper-slide {
                        height: 100%;
                    }

                    .hero-swiper .swiper-pagination {
                        bottom: 24px !important;
                        gap: 12px;
                    }
                }
            `}</style>
        </section>
    );
};

export default HeroSection;