"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import BookingCard from "./BookingCard";

gsap.registerPlugin(ScrollTrigger);

// HERO 1 — ABSTRACT JET / MOTION LUXURY
// Concept: Speed, exclusivity, precision, and elite private aviation.
// Asset: hero1_jet_v2.png (Sleek white/silver jet with red accents)

export default function Hero1() {
    const planeRef = useRef<HTMLImageElement>(null);

    const animate = () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Staggered text reveal
        tl.from(".hero-headline", {
            y: 100,
            opacity: 0,
            duration: 1.0,
            stagger: 0.1,
        })
            .from(".hero-subtext", {
                y: 50,
                opacity: 0,
                duration: 0.8,
            }, "-=0.5")
            .from(".hero-booking", {
                y: 30,
                opacity: 0,
                duration: 0.8,
            }, "-=0.4");

        // Jet Entrace & Float
        if (planeRef.current) {
            gsap.fromTo(planeRef.current,
                { x: 100, opacity: 0, scale: 0.9 },
                { x: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
            );

            gsap.to(planeRef.current, {
                y: -20,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: 1.5
            });
        }
    };

    useEffect(() => {
        animate();
    }, []);

    return (
        <section className="hero-section relative min-h-screen lg:min-h-[950px] flex flex-col lg:flex-row lg:items-center pt-20 pb-20 lg:pb-32 bg-[#050505] overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Deep Dark Base */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#120505]"></div>

                {/* Red Glow Accents - echoing the jet's red stripes */}
                <div className="absolute top-[-10%] right-[-10%] w-[1000px] h-[1000px] bg-red-900/10 rounded-full blur-[150px] opacity-60"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-red-950/20 rounded-full blur-[120px]"></div>

                {/* Speed Lines SVG */}
                <svg className="absolute inset-0 w-full h-full opacity-30 mix-blend-screen" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="-100" y1="800" x2="1600" y2="100" stroke="url(#speed-grad)" strokeWidth="0.5" />
                    <line x1="-50" y1="850" x2="1650" y2="150" stroke="url(#speed-grad)" strokeWidth="0.2" />
                    <line x1="0" y1="900" x2="1500" y2="300" stroke="url(#speed-grad)" strokeWidth="0.8" opacity="0.5" />
                    <defs>
                        <linearGradient id="speed-grad" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="white" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Noise Texture Overlay */}
                <div className="absolute inset-0 noise-texture opacity-20"></div>
            </div>

            {/* Content Grid */}
            <div className="container-custom relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left: Text Content (5 cols) */}
                    <div className="lg:col-span-5 relative z-20">
                        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse"></span>
                            <span className="text-xs font-semibold text-white/90 tracking-[0.2em] uppercase">Ready for Takeoff</span>
                        </div>

                        <h1 className="headline-xl text-white mb-6 overflow-hidden leading-[1.1] tracking-tight">
                            <span className="block hero-headline font-light">Global Access.</span>
                            <span className="block hero-headline font-bold">Zero Compromise.</span>
                        </h1>

                        <p className="body-lg mb-8 hero-subtext text-gray-400 max-w-lg font-light leading-relaxed">
                            Ascend above the clouds in the world's most advanced private fleet. Where speed meets absolute precision.
                        </p>

                        <div className="hero-subtext flex flex-wrap gap-6 items-center">
                            <button className="bg-red-700 hover:bg-red-600 text-white px-8 py-3.5 rounded-none skew-x-[-10deg] transition-all duration-300 group">
                                <span className="block skew-x-[10deg] font-medium tracking-wide">REQUEST QUOTE</span>
                            </button>
                            <button className="px-6 py-3 text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                                <span className="uppercase tracking-widest text-sm font-medium">Explore Fleet</span>
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: Jet Visual (7 cols) */}
                    <div className="lg:col-span-7 relative h-[400px] lg:h-[700px] w-full flex items-center justify-center">
                        {/* Glow behind jet */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[80px]"></div>

                        <img
                            ref={planeRef}
                            src="/images/hero1_jet_v2.png"
                            alt="Luxury Private Jet"
                            className="absolute w-[130%] max-w-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10"
                            style={{ transform: 'perspective(1000px)' }}
                        />
                    </div>
                </div>

                {/* Booking Card */}
                <div className="hero-booking relative z-30 -mt-10 lg:-mt-20 max-w-5xl mx-auto">
                    <BookingCard className="shadow-2xl border-white/5 bg-[#121212]/80 backdrop-blur-xl rounded-lg" />
                </div>
            </div>
        </section>
    );
}
