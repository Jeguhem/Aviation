"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const patternRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

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
            .from(".hero-cta-group", {
                y: 40,
                opacity: 0,
                duration: 0.8,
            }, "-=0.4")
            .from(".hero-secondary-text", {
                opacity: 0,
                duration: 0.8,
            }, "-=0.3");

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
    };

    useEffect(() => {
        animate();
    }, []);

    return (
        <section className="hero-section relative min-h-[1000px] flex items-center overflow-hidden gradient-dark noise-texture">
            {/* Abstract Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Radial glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-(--deep-red)/5 rounded-full blur-3xl"></div>

                {/* Izy Pattern with Parallax */}
                <div
                    ref={patternRef}
                    className="absolute inset-x-0 -top-20 h-[120%] opacity-[0.03] z-0 pointer-events-none"
                    style={{
                        backgroundImage: "url('/images/IzyPattern.svg')",
                        backgroundSize: "600px",
                        backgroundRepeat: "repeat",
                    }}
                />

                {/* Curved flight path lines */}
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 450 Q360 300 720 450 T1440 450" stroke="currentColor" strokeWidth="1" className="text-(--warm-white)/20" />
                    <path d="M0 500 Q360 350 720 500 T1440 500" stroke="currentColor" strokeWidth="1" className="text-(--warm-white)/10" />
                </svg>
            </div>

            {/* Content Left-Aligned */}
            <div className="container-custom relative z-10 py-20">
                <div className="max-w-3xl">
                    {/* Headline */}
                    <h1 className="headline-xl text-(--warm-white) mb-6 overflow-hidden">
                        <span className="block hero-headline">Private Aviation</span>
                        <span className="block hero-headline">Redefined</span>
                    </h1>

                    {/* Subtext */}
                    <p className="body-lg max-w-xl mb-12 hero-subtext text-white/80">
                        Where elegance, discretion, and comfort come together at 40,000 feet.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4 mb-16 hero-cta-group">
                        <button className="btn-primary cursor-pointer">
                            Request a Quote
                        </button>
                        <button className="btn-secondary cursor-pointer">
                            View Fleet
                        </button>
                    </div>

                    {/* Secondary Text */}
                    <aside className="hero-secondary-text">
                        <p className="body-md text-(--soft-gray) max-w-lg">
                            Seamless charter experiences designed around comfort and precision.
                        </p>
                    </aside>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-60">
                <div className="w-6 h-10 border border-(--warm-white)/30 rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-2 bg-(--warm-white) rounded-full animate-bounce"></div>
                </div>
            </div>
        </section>
    );
}
