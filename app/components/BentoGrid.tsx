"use client";
import React, { useState } from "react";

export default function BentoGrid() {
    return (
        <section className="section-padding bg-(--warm-white) relative overflow-hidden">
            {/* Background ambient accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[10%] right-[5%] w-[600px] h-[600px] bg-(--deep-red) rounded-full opacity-[0.015] blur-[150px]" />
                <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-(--near-black) rounded-full opacity-[0.015] blur-[120px]" />
            </div>

            <div className="container-custom relative z-10">
                <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-(--deep-red) font-medium tracking-[0.2em] uppercase text-sm mb-4 block animate-fade-in">
                        Precision & Elegance
                    </span>
                    <h2 className="headline-lg text-(--near-black) mb-6 font-[family-name:var(--font-space-grotesk)]">
                        The Future of Flight
                    </h2>
                    <p className="body-lg text-(--soft-gray)">
                        Experience an asymmetrical approach to luxury, where every detail fits perfectly into your lifestyle.
                    </p>
                </div>

                {/* Puzzle Grid - 6 Columns, Inlined for Creative Freedom */}
                <div className="grid grid-cols-1 md:grid-cols-6 gap-5 max-w-7xl mx-auto auto-rows-[240px]">

                    {/* 01: Global Reach - Massive Piece */}
                    <div className="md:col-span-4 md:row-span-2 group relative rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-(--near-black)">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('/images/jet-images/front_jet_view.jpg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-(--near-black) via-(--near-black)/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        <span className="absolute top-6 right-8 text-white/5 group-hover:text-white/35 text-7xl font-bold font-[family-name:var(--font-space-grotesk)] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 select-none pointer-events-none">
                            01
                        </span>

                        <div className="relative h-full p-10 flex flex-col justify-end">
                            <div className="relative w-14 h-14 mb-6">
                                <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-(--deep-red) group-hover:rotate-[360deg] transition-transform duration-1000" />
                                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-(--deep-red) group-hover:border-(--deep-red) transition-all duration-500">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">Global Reach</h3>
                            <p className="body-md text-white/70 max-w-sm">Access 5,000+ airports worldwide with unparalleled speed and efficiency.</p>
                            <div className="mt-4 w-0 h-[2px] bg-(--deep-red) group-hover:w-24 transition-all duration-700 delay-100" />
                        </div>
                    </div>

                    {/* 02: Elite Fleet - Medium Top Right */}
                    <div className="md:col-span-2 md:row-span-1 group relative rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-(--near-black)">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('/images/jet-images/jet_entering_hanger.jpg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-(--near-black) via-(--near-black)/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        <span className="absolute top-4 right-6 text-white/5 group-hover:text-white/35 text-5xl font-bold font-[family-name:var(--font-space-grotesk)] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 select-none pointer-events-none">
                            02
                        </span>

                        <div className="relative h-full p-6 flex flex-col justify-end">
                            <div className="relative w-12 h-12 mb-4 group-icon overflow-hidden">
                                <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-(--deep-red) group-hover:rotate-[360deg] transition-transform duration-1000" />
                                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-(--deep-red) transition-all duration-500">
                                    <div className="group-hover:animate-fly-up">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                    <div className="absolute opacity-0 group-hover:animate-fly-in">
                                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">Elite Fleet</h3>
                            <p className="text-xs text-white/70 line-clamp-2">Our hangers house the world's most advanced private aircraft.</p>
                            <div className="mt-3 w-0 h-[2px] bg-(--deep-red) group-hover:w-16 transition-all duration-700" />
                        </div>
                    </div>

                    {/* 03: Bespoke Interiors - Tall Right */}
                    <div className="md:col-span-2 md:row-span-2 group relative rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-(--near-black)">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('/images/jet-images/jet_interior_luxury.jpg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-(--near-black) via-(--near-black)/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        <span className="absolute top-6 right-8 text-white/5 group-hover:text-white/35 text-6xl font-bold font-[family-name:var(--font-space-grotesk)] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 select-none pointer-events-none">
                            03
                        </span>

                        <div className="relative h-full p-10 flex flex-col justify-end">
                            <div className="relative w-14 h-14 mb-6">
                                <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-(--deep-red) group-hover:rotate-[360deg] transition-transform duration-1000" />
                                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-(--deep-red) group-hover:border-(--deep-red) transition-all duration-500">
                                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-space-grotesk)]">Bespoke Interiors</h3>
                            <p className="body-md text-white/70 max-w-sm">Tailored cabins designed for productivity and ultimate relaxation.</p>
                            <div className="mt-4 w-0 h-[2px] bg-(--deep-red) group-hover:w-20 transition-all duration-700" />
                        </div>
                    </div>

                    {/* 04: Gastronomy - Small Bottom Middle Area */}
                    <div className="md:col-span-2 md:row-span-1 group relative rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 bg-(--near-black)">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('/images/jet-images/jet_champagne_cup.jpg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-(--near-black) via-(--near-black)/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        <span className="absolute top-4 right-6 text-white/5 group-hover:text-white/35 text-5xl font-bold font-[family-name:var(--font-space-grotesk)] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-2 group-hover:translate-y-0 select-none pointer-events-none">
                            04
                        </span>

                        <div className="relative h-full p-6 flex flex-col justify-end">
                            <div className="relative w-12 h-12 mb-4">
                                <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-(--deep-red) group-hover:rotate-[360deg] transition-transform duration-1000" />
                                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center border border-white/10 group-hover:bg-(--deep-red) transition-all duration-500">
                                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">Gastronomy</h3>
                            <p className="text-xs text-white/70 line-clamp-2">Michelin-starred dining curated for your specific palate.</p>
                            <div className="mt-3 w-0 h-[2px] bg-(--deep-red) group-hover:w-16 transition-all duration-700" />
                        </div>
                    </div>

                    {/* 05: Security - Wide Bottom Piece */}
                    <div className="md:col-span-2 md:row-span-1 group relative rounded-[var(--radius-lg)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 bg-(--near-black)">
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                            style={{ backgroundImage: "url('/images/jet-images/jet_cockpit.jpg')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-(--near-black) via-(--near-black)/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />

                        <span className="absolute top-6 right-8 text-white/5 group-hover:text-white/35 text-6xl font-bold font-[family-name:var(--font-space-grotesk)] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0 select-none pointer-events-none">
                            05
                        </span>

                        <div className="relative h-full p-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="max-w-md">
                                <div className="relative w-14 h-14 mb-6">
                                    <div className="absolute inset-0 rounded-full border-2 border-white/20 border-t-(--deep-red) group-hover:rotate-[360deg] transition-transform duration-1000" />
                                    <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-(--deep-red) transition-all duration-500">
                                        <div className="group-hover:animate-shake">
                                            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2 font-[family-name:var(--font-space-grotesk)]">Absolute Discretion</h3>
                                <p className="body-md text-white/70">Uncompromising security from cockpit to destination.</p>
                            </div>
                            <div className="flex-shrink-0">
                                <button className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-(--near-black) transition-all duration-500 backdrop-blur-sm cursor-pointer">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
