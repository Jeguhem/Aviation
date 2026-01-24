"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BookingCard from "./BookingCard";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const patternRef = useRef<HTMLDivElement>(null);
    const planeRef = useRef<HTMLImageElement>(null);

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

        // Parallax for IzyPattern
        if (patternRef.current) {
            gsap.to(patternRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                }
            });
        }

        // Gentle float for plane image
        if (planeRef.current) {
            gsap.to(planeRef.current, {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
    };

    useEffect(() => {
        animate();
    }, []);

    return (
        <section className="hero-section relative min-h-screen lg:min-h-[900px] flex flex-col lg:flex-row lg:items-center pt-0 pb-20 lg:pb-48 gradient-dark">
            {/* Background Container - clipped */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Noise Texture */}
                <div className="absolute inset-0 noise-texture opacity-50"></div>

                {/* Radial glow */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-(--deep-red)/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-(--deep-red)/5 rounded-full blur-3xl"></div>

                {/* Izy Pattern with Parallax */}
                <div
                    ref={patternRef}
                    className="absolute inset-x-0 -top-20 h-[120%] opacity-[0.03] z-0"
                    style={{
                        backgroundImage: "url('/images/IzyPattern.svg')",
                        backgroundSize: "600px",
                        backgroundRepeat: "repeat",
                    }}
                />

                {/* Curved flight path lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 600 Q360 400 720 600 T1540 600" stroke="currentColor" strokeWidth="1" className="text-(--warm-white)/20" />
                    <path d="M-100 650 Q360 450 720 650 T1540 650" stroke="currentColor" strokeWidth="1" className="text-(--warm-white)/10" />
                </svg>
            </div>

            {/* Content Container */}
            <div className="container-custom !pt-16 lg:pt-0 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 lg:items-center">
                    {/* Left: Text Content */}
                    <div className="max-w-2xl">
                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-(--warm-white)/10 bg-(--warm-white)/5 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-(--deep-red) animate-pulse"></span>
                            <span className="text-xs font-medium text-(--warm-white)/80 tracking-wide uppercase">Private Aviation Redefined</span>
                        </div>

                        <h1 className="headline-xl text-(--warm-white) mb-6 overflow-hidden leading-tight">
                            <span className="block hero-headline">Elevate Your</span>
                            <span className="block hero-headline">Journey Above</span>
                            <span className="block hero-headline text-transparent bg-clip-text bg-gradient-to-r from-(--warm-white) to-(--light-gray)">The Ordinary</span>
                        </h1>

                        <p className="body-lg mb-4 hero-subtext text-(--light-gray) max-w-lg">
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

                    {/* Right: Visual Area */}
                    <div className="hidden lg:block relative h-[600px] w-full">
                        {/* Abstract Visual Composition */}
                        <div className="absolute inset-0 bg-gradient-to-br from-(--deep-red)/10 to-transparent rounded-full blur-3xl transform translate-x-1/4"></div>
                        <img
                            src="/images/hero_plane.png"
                            alt="Luxury Jet"
                            className="absolute top-3/4  -left-1 -translate-x-50 -translate-y-3/4 w-[180%] max-w-none opacity-80 drop-shadow-2xl  brightness-125 contrast-125 mix-blend-lighten"
                        />
                    </div>
                </div>

                {/* Booking Card - Unified natural positioning for all screens */}
                <div className="hero-bookindg relative z-20 mt-5 lg:mt-0 max-w-5xl mx-auto">
                    <BookingCard className="shadow-premium border-(--warm-white)/10 bg-(--near-black)/80 backdrop-blur-xl" />
                </div>
            </div>
        </section>
    );
}

