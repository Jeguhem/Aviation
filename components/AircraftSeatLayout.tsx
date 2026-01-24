"use client";

import { useMemo } from "react";

interface AircraftSeatLayoutProps {
    seats: number;
    className?: string;
}

export default function AircraftSeatLayout({ seats, className = "" }: AircraftSeatLayoutProps) {
    // Generate seat positions
    const seatPositions = useMemo(() => {
        const pos = [];
        const rows = Math.ceil(seats / 2);

        for (let i = 0; i < seats; i++) {
            const row = Math.floor(i / 2);
            const isLeft = i % 2 === 0;

            // Calculate x, y percentage
            // x: Left side ~30%, Right side ~70%
            // y: Distributed along the fuselage length (from 20% to 80%)

            const x = isLeft ? 30 : 70;
            // Adjust spacing based on number of rows to fit in the container
            const yStart = 25;
            const yEnd = 85;
            const yStep = (yEnd - yStart) / (rows > 1 ? rows - 1 : 1);
            const y = yStart + row * yStep;

            pos.push({ x, y, id: i });
        }
        return pos;
    }, [seats]);

    return (
        <div className={`relative w-full aspect-[1/3] max-w-[300px] mx-auto ${className}`}>
            {/* Fuselage Outline */}
            <div className="absolute inset-x-0 top-0 bottom-0 border-2 border-(--warm-white)/20 rounded-t-[100px] rounded-b-[50px] bg-(--warm-white)/5 backdrop-blur-sm shadow-xl"></div>

            {/* Cockpit Area (Abstract) */}
            <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-[60%] h-[1px] bg-(--warm-white)/10"></div>

            {/* Seats */}
            {seatPositions.map((seat) => (
                <div
                    key={seat.id}
                    style={{
                        left: `${seat.x}%`,
                        top: `${seat.y}%`,
                    }}
                    className="absolute w-12 h-14 -translate-x-1/2 -translate-y-1/2"
                >
                    {/* Seat Shape - Premium Chair */}
                    <div className="w-full h-full bg-(--warm-white)  rounded-lg shadow-lg relative group transition-transform hover:scale-105 duration-300">
                        {/* Headrest */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[20%] bg-(--light-gray)/30 rounded-full mt-1"></div>
                        {/* Armrests */}
                        <div className="absolute top-1/2 left-[-4px] w-1 h-[60%] bg-(--warm-white)/50 rounded-full"></div>
                        <div className="absolute top-1/2 right-[-4px] w-1 h-[60%] bg-(--warm-white)/50 rounded-full"></div>
                    </div>
                </div>
            ))}

            {/* Center Aisle Guide (very subtle) */}
            <div className="absolute top-[20%] bottom-[15%] left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-(--warm-white)/5 to-transparent"></div>
        </div>
    );
}
