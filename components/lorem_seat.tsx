 "use client";
 import { useMemo } from "react";
 
 interface AircraftSeatLayoutProps {
   seats: number;
   className?: string;
 }
 
 export default function Lorem_seat({ seats, className = "" }: AircraftSeatLayoutProps) {
   const { leftCount, rightCount, rows } = useMemo(() => {
     const left = Math.floor(seats / 2);
     const right = seats - left;
     const r = Math.max(left, right);
     return { leftCount: left, rightCount: right, rows: r };
   }, [seats]);
 
   return (
     <div className={`relative w-full max-w-3xl mx-auto ${className}`}>
       <div className="relative rounded-3xl bg-(--near-black) border border-(--warm-white)/10 p-6 md:p-8">
         <div className="grid grid-cols-[1fr_6px_1fr] gap-4 md:gap-6 items-center">
           {/* Left column seats */}
           <div className="grid" style={{ gridTemplateRows: `repeat(${rows}, minmax(36px, 1fr))` }}>
             {Array.from({ length: leftCount }).map((_, i) => (
               <div
                 key={`L-${i}`}
                 className="rounded-xl bg-(--warm-white)/5 border border-(--warm-white)/10 h-9 md:h-10 shadow-[inset_0_0_10px_rgba(255,255,255,0.03)]"
               />
             ))}
           </div>
 
           {/* Aisle */}
           <div className="rounded-full bg-(--warm-white)/10 h-full" />
 
           {/* Right column seats */}
           <div className="grid" style={{ gridTemplateRows: `repeat(${rows}, minmax(36px, 1fr))` }}>
             {Array.from({ length: rightCount }).map((_, i) => (
               <div
                 key={`R-${i}`}
                 className="rounded-xl bg-(--warm-white)/5 border border-(--warm-white)/10 h-9 md:h-10 shadow-[inset_0_0_10px_rgba(255,255,255,0.03)]"
               />
             ))}
           </div>
         </div>
 
         {/* Subtle header/foot gradients for editorial feel */}
         <div className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-(--warm-white)/5 to-transparent rounded-t-3xl" />
         <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-(--warm-white)/5 to-transparent rounded-b-3xl" />
       </div>
     </div>
   );
 }
