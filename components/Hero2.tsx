"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BookingCard from "./BookingCard";

gsap.registerPlugin(ScrollTrigger);

export default function Hero2() {
    const patternRef = useRef<HTMLDivElement>(null);

    const animate = () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Staggered text reveal
        tl.from(".hero-headline", {
            y: 120,
            opacity: 0,
            duration: 1.2,
            stagger: 0.15,
        })
            .from(".hero-subtext", {
                y: 60,
                opacity: 0,
                duration: 1,
            }, "-=0.6")
            .from(".hero-booking", {
                y: 40,
                opacity: 0,
                duration: 0.8,
            }, "-=0.4");

        // Cabin Image Parallax/Fade
        gsap.fromTo(".hero-cabin-bg",
            { opacity: 0, scale: 1.1 },
            { opacity: 1, scale: 1, duration: 2, ease: "power2.out" }
        );
    };

    useEffect(() => {
        animate();
    }, []);

    return (
        <section className="hero-section relative min-h-screen lg:min-h-[900px] flex flex-col lg:flex-row lg:items-center pt-0 pb-20 lg:pb-48 gradient-dark overflow-hidden">
            {/* Background & Cabin Image Container */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Noise Texture */}
                <div className="absolute inset-0 noise-texture opacity-[0.15] z-10 mix-blend-overlay"></div>

                {/* Izy Pattern (Subtle) */}
                <div
                    ref={patternRef}
                    className="absolute inset-x-0 -top-20 h-[120%] opacity-[0.03] z-0"
                    style={{
                        backgroundImage: "url('/images/IzyPattern.svg')",
                        backgroundSize: "600px",
                        backgroundRepeat: "repeat",
                    }}
                />

                {/* Cabin Image - Absolute Positioned Right */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 h-full w-full lg:w-[65%] overflow-hidden">
                        <img
                            src="/images/hero_cabin.png"
                            alt="Luxury Cabin Interior"
                            className="hero-cabin-bg w-full h-full object-cover object-center lg:object-left transform scale-105"
                        />

                        {/* Gradient Mask: Left-to-Right Fade (Dissolve into dark bg) */}
                        <div className="absolute inset-0 bg-gradient-to-r from-(--near-black) via-(--near-black)/60 to-transparent lg:via-(--near-black)/20"></div>

                        {/* Mobile Overlay: Darker to ensure text readability */}
                        <div className="absolute inset-0 bg-(--near-black)/40 lg:bg-transparent"></div>

                        {/* Atmosphere Overlay: Warmth & Depth */}
                        <div className="absolute inset-0 bg-(--deep-red)/10 mix-blend-soft-light"></div>

                        {/* Vignette / Edge Softening */}
                        <div className="absolute inset-0 bg-radial-gradient from-transparent to-(--near-black)/80 opacity-60"></div>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="container-custom !pt-32 lg:pt-0 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center">
                    {/* Left: Text Content */}
                    <div className="max-w-2xl relative z-20">
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-(--warm-white)/10 bg-(--near-black)/40 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-(--deep-red) animate-pulse"></span>
                            <span className="text-xs font-medium text-(--warm-white)/90 tracking-wide uppercase">Private Aviation Redefined</span>
                        </div>

                        <h1 className="headline-xl text-(--warm-white) mb-6 overflow-hidden leading-tight drop-shadow-lg">
                            <span className="block hero-headline">Elevate Your</span>
                            <span className="block hero-headline">Journey Above</span>
                            <span className="block hero-headline text-transparent bg-clip-text bg-gradient-to-r from-(--warm-white) to-(--light-gray)">The Ordinary</span>
                        </h1>

                        <p className="body-lg mb-8 hero-subtext text-(--light-gray) max-w-lg drop-shadow-md">
                            Where elegance, discretion, and comfort come together at 40,000 feet. Experience the pinnacle of personalized travel.
                        </p>

                        <div className="hero-subtext flex flex-wrap gap-6 items-center">
                            <button className="text-(--warm-white) border-b border-(--deep-red) pb-1 hover:text-(--deep-red) transition-colors duration-300">
                                Explore Fleet
                            </button>
                            <button className="text-(--warm-white) border-b border-transparent pb-1 hover:border-(--deep-red) transition-colors duration-300">
                                Our Services
                            </button>
                        </div>
                    </div>

                    {/* Right Column is empty to let image show, but acts as spacer */}
                    <div className="hidden lg:block"></div>
                </div>

                {/* Booking Card */}
                <div className="hero-booking relative z-20 mt-12 lg:mt-32 max-w-5xl mx-auto">
                    <BookingCard className="shadow-premium border-(--warm-white)/10 bg-(--near-black)/80 backdrop-blur-xl" />
                </div>
            </div>
        </section>
    );
}
