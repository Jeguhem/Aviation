"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import logo from "../../public/images/IzyLogo.svg";

export default function SplashScreen({ onComplete }: { onComplete?: () => void }) {
    const container = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                onComplete,
            });

            // 1. Fade in container
            tl.from(container.current, {
                opacity: 0,
                duration: 0.8,
            });

            // 2. Line draw (vertical)
            tl.from(".line", {
                height: 0,
                duration: 1.2,
            });

            // 3. Expand horizontally
            tl.to(".line", {
                width: "60%",
                duration: 1.4,
            });

            // 4. Reveal logo softly
            tl.from(".izy-logo", {
                opacity: 0,
                y: 20,
                duration: 1.2,
            }, "-=0.6");

            // 5. Show title
            tl.from(".title", {
                opacity: 0,
                y: 10,
                duration: 1,
            }, "-=0.8");

            // 6. Fade everything out
            tl.to(container.current, {
                opacity: 0,
                duration: 0.8,
                delay: 0.4,
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={container}
            className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
        >
            {/* Light streak */}
            <div className="line bg-white h-40 w-[2px]"></div>

            {/* Logo */}
            <Image
                src={logo}
                width={150}
                className="izy-logo mt-10 opacity-0"
                alt="Izy Air Logo"
            />

            {/* Title */}
            <h1
                className="title mt-6 text-white tracking-[0.4em] text-xl  uppercase"
            >
                IZY AIR
            </h1>
        </div>
    );
}
