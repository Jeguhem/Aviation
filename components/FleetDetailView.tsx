"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AircraftSeatLayout from "@/components/AircraftSeatLayout";
import RequestQuoteModal from "@/components/RequestQuoteModal";
import Footer from "@/components/Footer";
import { FleetAircraft } from "@/lib/fleet-data";

export default function FleetDetailView({ aircraft }: { aircraft: FleetAircraft }) {
    const [isInternalModalOpen, setInternalModalOpen] = useState(false);

    return (
        <main className="bg-(--near-black) min-h-screen text-(--warm-white)">
            <div className="absolute top-8 left-8 z-10">
                <Link href="/" className="flex items-center gap-2 px-4 py-2 bg-(--warm-white)/10 hover:bg-(--warm-white)/20 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm font-medium">Back</span>
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <Image
                    src={aircraft.image}
                    alt={aircraft.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-(--near-black) via-transparent to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-24 container-custom">
                    <p className="text-(--deep-red) font-medium tracking-widest uppercase mb-4 animate-fly-in">
                        {aircraft.category}
                    </p>
                    <h1 className="headline-xl text-white mb-6 animate-fly-in" style={{ animationDelay: '0.1s' }}>
                        {aircraft.name}
                    </h1>
                    <p className="body-lg text-white/90 max-w-2xl animate-fly-in" style={{ animationDelay: '0.2s' }}>
                        {aircraft.longDescription}
                    </p>
                </div>
            </section>

            {/* Content Grid */}
            <section className="py-24 container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Left Column: Specs & Features */}
                    <div className="space-y-16">
                        {/* Capabilities */}
                        <div>
                            <h2 className="headline-lg mb-8">Aircraft Capabilities</h2>

                            <div className="grid grid-cols-2 gap-8">
                                <div className="p-6 bg-(--warm-white)/5 border border-(--warm-white)/10 rounded-xl">
                                    <p className="text-(--soft-gray) text-xs uppercase tracking-wider mb-2">Range</p>
                                    <p className="text-2xl font-mono text-(--warm-white)">{aircraft.specs.range}</p>
                                </div>
                                <div className="p-6 bg-(--warm-white)/5 border border-(--warm-white)/10 rounded-xl">
                                    <p className="text-(--soft-gray) text-xs uppercase tracking-wider mb-2">Passengers</p>
                                    <p className="text-2xl font-mono text-(--warm-white)">{aircraft.specs.passengers}</p>
                                </div>
                                <div className="p-6 bg-(--warm-white)/5 border border-(--warm-white)/10 rounded-xl">
                                    <p className="text-(--soft-gray) text-xs uppercase tracking-wider mb-2">Cruise Speed</p>
                                    <p className="text-2xl font-mono text-(--warm-white)">{aircraft.specs.speed}</p>
                                </div>
                                <div className="p-6 bg-(--warm-white)/5 border border-(--warm-white)/10 rounded-xl">
                                    <p className="text-(--soft-gray) text-xs uppercase tracking-wider mb-2">Cabin Height</p>
                                    <p className="text-2xl font-mono text-(--warm-white)">{aircraft.specs.cabinHeight}</p>
                                </div>
                            </div>
                        </div>

                        {/* Features List */}
                        <div>
                            <h3 className="text-xl font-bold mb-6 font-[family-name:var(--font-space-grotesk)]">Key Features</h3>
                            <ul className="space-y-4">
                                {aircraft.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-(--light-gray)">
                                        <div className="w-1.5 h-1.5 bg-(--deep-red) rounded-full"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="pt-8">
                            <button
                                onClick={() => setInternalModalOpen(true)}
                                className="w-full md:w-auto px-10 py-5 bg-(--warm-white) text-(--near-black) rounded-xl font-bold hover:bg-(--deep-red) hover:text-white transition-all duration-300 shadow-xl shadow-white/5 cursor-pointer"
                            >
                                Inquire About This Aircraft
                            </button>
                            <p className="mt-4 text-sm text-(--soft-gray)">
                                * No instant booking. Our specialists will verify availability.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Seat Layout */}
                    <div className="relative">
                        <div className="sticky top-12 p-12 bg-(--warm-white)/5 rounded-3xl border border-(--warm-white)/10">
                            <div className="text-center mb-10">
                                <h3 className="text-2xl font-bold mb-2 font-[family-name:var(--font-space-grotesk)]">Cabin Layout</h3>
                                <p className="text-(--soft-gray) text-sm">Typical configuration for {aircraft.category}</p>
                            </div>

                            <AircraftSeatLayout seats={aircraft.seats} />

                            <div className="mt-12 flex justify-center gap-8 text-xs text-(--soft-gray) uppercase tracking-widest">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-(--warm-white) rounded-sm"></div>
                                    <span>Seat</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 border border-(--warm-white)/50 rounded-sm"></div>
                                    <span>Aisle</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />

            <RequestQuoteModal
                isOpen={isInternalModalOpen}
                onClose={() => setInternalModalOpen(false)}
                initialData={{ message: `I am inquiring about the ${aircraft.name}. Please provide availability and pricing details.` }}
            />
        </main>
    );
}

