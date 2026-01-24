"use client";

import Image from "next/image";
import Link from "next/link";
import { fleet } from "@/lib/fleet-data";

export default function FleetSection() {
    return (
        <section className="py-24 bg-(--warm-white)">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="headline-lg text-(--near-black) mb-4">
                        Our Elite Fleet
                    </h2>
                    <p className="body-lg text-(--soft-gray) max-w-2xl mx-auto">
                        From coast to coast or across continents, we have the perfect aircraft for your journey.
                    </p>
                </div>

                {/* Fleet Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {fleet.map((aircraft) => (
                        <Link
                            key={aircraft.id}
                            href={`/fleet/${aircraft.id}`}
                            className="group relative h-[500px] w-full block rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 w-full h-full">
                                <Image
                                    src={aircraft.image}
                                    alt={aircraft.category}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-(--near-black) via-(--near-black)/60 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                {/* Top Badge (Optional, maybe for Range?) */}
                                <div className="absolute top-8 right-8 bg-(--warm-white)/10 backdrop-blur-md border border-(--warm-white)/20 px-4 py-1.5 rounded-full">
                                    <span className="text-xs font-medium text-(--warm-white) tracking-wider uppercase">
                                        {aircraft.specs.range}
                                    </span>
                                </div>

                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-(--warm-white) mb-2 font-[family-name:var(--font-space-grotesk)]">
                                        {aircraft.category}
                                    </h3>
                                    <p className="text-(--warm-white)/80 mb-6 font-light">
                                        {aircraft.description}
                                    </p>

                                    {/* Key Stats */}
                                    <div className="grid grid-cols-2 gap-4 border-t border-(--warm-white)/20 pt-4 mb-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                        <div>
                                            <p className="text-xs text-(--warm-white)/60 uppercase tracking-wider">Passengers</p>
                                            <p className="text-sm text-(--warm-white) font-medium">{aircraft.specs.passengers}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-(--warm-white)/60 uppercase tracking-wider">Speed</p>
                                            <p className="text-sm text-(--warm-white) font-medium">{aircraft.specs.speed}</p>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <div className="flex items-center gap-2 text-(--warm-white) font-medium">
                                        <span className="border-b border-transparent group-hover:border-(--deep-red) transition-all duration-300">
                                            View Aircraft Details
                                        </span>
                                        <svg
                                            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Below Fleet */}
                <div className="text-center mt-16">
                    <p className="text-(--soft-gray) mb-6">
                        Not sure which aircraft suits your needs?
                    </p>
                    <button className="px-8 py-4 bg-(--near-black) text-(--warm-white) rounded-xl font-semibold hover:bg-(--darker-black) hover:shadow-xl transition-all duration-300 cursor-pointer">
                        Speak to Our Fleet Specialist
                    </button>
                </div>
            </div>
        </section>
    );
}