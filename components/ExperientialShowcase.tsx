"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        title: "Sanctuary in the Sky",
        description: "Unparalleled comfort in our bespoke cabins.",
        image: "/images/jet-images/jet_interior_luxury.jpg",
        video: "/videos/plane_luxury_chairs.mov",
    },
    {
        id: 2,
        title: "Culinary Excellence",
        description: "Gourmet dining curated by world-class chefs.",
        image: "/images/jet-images/jet_champagne_cup.jpg",
        video: "/videos/airplane-scroll.mp4",
    },
    {
        id: 3,
        title: "Seamless Departures",
        description: "Private terminals. No queues. Just fly.",
        image: "/images/jet-images/jet_entrance.jpg",
        video: "/videos/plane_luxury_chairs.mov",
    },
    {
        id: 4,
        title: "Global Reach",
        description: "Access to over 5,000 airports worldwide.",
        image: "/images/jet-images/front_jet_view.jpg",
        video: "/videos/plane_luxury_chairs.mov",
    },
];

export default function ExperientialShowcase() {
    const [activeId, setActiveId] = useState<number>(1);
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial animation for the section title
            gsap.from(".showcase-header", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            });

            // Staggered fade in for cards
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleMouseEnter = (id: number) => {
        setActiveId(id);
    };

    return (
        <section ref={sectionRef} className="py-24 bg-(--near-black) overflow-hidden">
            <div className="container-custom mb-16 showcase-header">
                <h2 className="headline-lg text-(--warm-white) mb-4">
                    The Experience
                </h2>
                <p className="body-lg text-(--soft-gray) max-w-xl">
                    Beyond transportation. A lifestyle of uncompromising luxury and freedom.
                </p>
            </div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row gap-4 h-[600px] w-full">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            ref={(el) => { cardsRef.current[index] = el; }}
                            onMouseEnter={() => handleMouseEnter(exp.id)}
                            className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-out-expo group ${
                                activeId === exp.id ? "lg:flex-[3] flex-[3]" : "lg:flex-[1] flex-[1]"
                            }`}
                        >
                            {/* Background Image (simulating video poster) */}
                            <div className="absolute inset-0 w-full h-full">
                                <img
                                    src={exp.image}
                                    alt={exp.title}
                                    className={`w-full h-full object-cover transition-transform duration-1000 ease-out ${
                                        activeId === exp.id ? "scale-110 opacity-0" : "scale-100 grayscale-[50%] opacity-100"
                                    }`}
                                />
                                
                                {/* Video - Only plays when active */}
                                <video
                                    src={exp.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
                                        activeId === exp.id ? "opacity-100 scale-110" : "opacity-0 scale-100"
                                    }`}
                                />

                                {/* Simulated Video Overlay (Gradients) */}
                                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${
                                    activeId === exp.id ? "opacity-80" : "opacity-60"
                                }`} />

                                {/* Active State Overlay (removes grayscale, adds clarity) */}
                                <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${
                                    activeId === exp.id ? "opacity-0" : "opacity-100"
                                }`} />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex flex-col justify-end h-full">
                                <div className={`transition-all duration-500 transform ${
                                    activeId === exp.id ? "translate-y-0 opacity-100" : "translate-y-4 opacity-70"
                                }`}>
                                    <h3 className={`font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl text-(--warm-white) font-medium mb-2 leading-tight ${
                                        activeId !== exp.id && "lg:hidden"
                                    }`}>
                                        {exp.title}
                                    </h3>

                                    {/* Vertical text for inactive cards on desktop */}
                                    <h3 className={`hidden lg:block absolute bottom-0 left-0 origin-bottom-left -rotate-90 translate-y-[-40px] translate-x-8 text-2xl text-(--warm-white)/80 whitespace-nowrap font-[family-name:var(--font-space-grotesk)] transition-opacity duration-300 ${
                                        activeId === exp.id ? "opacity-0 pointer-events-none" : "opacity-100"
                                    }`}>
                                        {exp.title}
                                    </h3>

                                    <div className={`overflow-hidden transition-all duration-500 ${
                                        activeId === exp.id ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0"
                                    }`}>
                                        <p className="text-(--light-gray) text-base md:text-lg leading-relaxed max-w-md">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
