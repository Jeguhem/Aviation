"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function SceneZero({ onComplete }: { onComplete?: () => void }) {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                onComplete,
            });

            // 1. Line draw
            tl.from(".line", {
                height: 0,
                duration: 0.8
            });

            // 2. Widen into hatch
            tl.to(".line", {
                width: "80%",
                duration: 1.2
            });

            // 3. Reveal silhouette
            tl.to(".silhouette", {
                opacity: 1,
                duration: 1.0
            }, "-=0.4");

            // 4. Fade in logo/text
            tl.from(".logo, .tagline", {
                opacity: 0,
                y: 20,
                stagger: 0.2
            });

            // 5. Expand + fade to full hero
            tl.to(container.current, {
                opacity: 0,
                duration: 0.8,
                delay: 0.4
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={container}
            className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
        >
            <div className="relative flex flex-col items-center">

                {/* LIGHT STREAK */}
                <div className="line bg-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-px h-[200px]"></div>

                {/* JET SILHOUETTE (static PNG or SVG) */}
                <img
                    src="/jet-silhouette.png"
                    className="silhouette opacity-0 w-[200px] mt-[180px]"
                />

                {/* BRANDING */}
                <div className="mt-4 text-white text-2xl tracking-[0.25em] logo">ASCEND</div>
                <div className="text-white text-sm opacity-70 tagline">Private Jet Experience</div>

            </div>
        </div>
    );
}
