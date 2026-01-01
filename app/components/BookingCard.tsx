"use client";
import { useState } from "react";
import DatePicker from "./ui/DatePicker";

export default function BookingCard() {
    const [tripType, setTripType] = useState("one-way");
    const [departureDate, setDepartureDate] = useState<string | null>(null);
    const [returnDate, setReturnDate] = useState<string | null>(null);

    return (
        <section className="relative py-24 bg-gradient-to-b from-(--near-black) to-(--darker-black)">
            <div className="container-custom">
                {/* Premium Booking Card */}
                <div className="max-w-6xl mx-auto">
                    {/* Card Header */}
                    <div className="text-center mb-12">
                        <h2 className="headline-lg text-(--warm-white) mb-3 font-[family-name:var(--font-space-grotesk)]">
                            Charter Your Flight
                        </h2>
                        <p className="body-md text-(--light-gray)">
                            Seamless booking for discerning travelers
                        </p>
                    </div>

                    {/* Glassmorphism Card */}
                    <div className="relative backdrop-blur-xl bg-(--warm-white)/5 border border-(--warm-white)/10 rounded-2xl p-8 md:p-12 shadow-2xl">
                        {/* Subtle glow effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-(--deep-red)/20 via-transparent to-(--deep-red)/20 rounded-2xl blur opacity-30"></div>

                        <div className="relative">
                            {/* Trip Type Selector */}
                            <div className="flex gap-4 mb-8 pb-6 border-b border-(--warm-white)/10">
                                <button
                                    onClick={() => setTripType("one-way")}
                                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${tripType === "one-way"
                                        ? "bg-(--deep-red) text-(--warm-white) shadow-lg"
                                        : "text-(--light-gray) hover:text-(--warm-white)"
                                        }`}
                                >
                                    One Way
                                </button>
                                <button
                                    onClick={() => setTripType("round-trip")}
                                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${tripType === "round-trip"
                                        ? "bg-(--deep-red) text-(--warm-white) shadow-lg"
                                        : "text-(--light-gray) hover:text-(--warm-white)"
                                        }`}
                                >
                                    Round Trip
                                </button>
                                <button
                                    onClick={() => setTripType("multi-city")}
                                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${tripType === "multi-city"
                                        ? "bg-(--deep-red) text-(--warm-white) shadow-lg"
                                        : "text-(--light-gray) hover:text-(--warm-white)"
                                        }`}
                                >
                                    Multi-City
                                </button>
                            </div>

                            {/* Booking Form */}
                            <form className="space-y-6">
                                {/* Route Section */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* From */}
                                    <div className="group">
                                        <label className="block text-xs font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-3">
                                            Departure
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="New York (JFK)"
                                                className="w-full px-6 py-4 bg-(--warm-white)/5 border border-(--warm-white)/20 rounded-xl text-(--warm-white) placeholder-(--warm-white)/40 focus:border-(--deep-red) focus:bg-(--warm-white)/10 focus:outline-none transition-all duration-300 text-lg"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--warm-white)/30">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* To */}
                                    <div className="group">
                                        <label className="block text-xs font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-3">
                                            Destination
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="London (LHR)"
                                                className="w-full px-6 py-4 bg-(--warm-white)/5 border border-(--warm-white)/20 rounded-xl text-(--warm-white) placeholder-(--warm-white)/40 focus:border-(--deep-red) focus:bg-(--warm-white)/10 focus:outline-none transition-all duration-300 text-lg"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--warm-white)/30">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Date & Passengers Section */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Departure Date */}
                                    <DatePicker
                                        label="Departure Date"
                                        value={departureDate}
                                        onChange={setDepartureDate}
                                    />

                                    {/* Return Date (if round trip) */}
                                    {tripType === "round-trip" && (
                                        <DatePicker
                                            label="Return Date"
                                            value={returnDate}
                                            onChange={setReturnDate}
                                        />
                                    )}

                                    {/* Passengers */}
                                    <div className="group">
                                        <label className="block text-xs font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-3">
                                            Passengers
                                        </label>
                                        <div className="relative">
                                            <select className="w-full px-6 py-4 bg-(--warm-white)/5 border border-(--warm-white)/20 rounded-xl text-(--warm-white) focus:border-(--deep-red) focus:bg-(--warm-white)/10 focus:outline-none transition-all duration-300 appearance-none cursor-pointer text-lg">
                                                <option value="1">1 Passenger</option>
                                                <option value="2">2 Passengers</option>
                                                <option value="3">3 Passengers</option>
                                                <option value="4">4 Passengers</option>
                                                <option value="5">5 Passengers</option>
                                                <option value="6">6+ Passengers</option>
                                                <option value="10">10+ Passengers</option>
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--warm-white)/30 pointer-events-none">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Additional Preferences */}
                                <div className="pt-4">
                                    <label className="block text-xs font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-3">
                                        Special Requirements (Optional)
                                    </label>
                                    <textarea
                                        rows={3}
                                        placeholder="Catering preferences, ground transportation, specific aircraft requests..."
                                        className="w-full px-6 py-4 bg-(--warm-white)/5 border border-(--warm-white)/20 rounded-xl text-(--warm-white) placeholder-(--warm-white)/40 focus:border-(--deep-red) focus:bg-(--warm-white)/10 focus:outline-none transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                                    <button
                                        type="submit"
                                        className="flex-1 bg-(--deep-red) hover:bg-accent-red-hover text-(--warm-white) px-8 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-(--deep-red)/30 hover:-translate-y-0.5 cursor-pointer"
                                    >
                                        Request Quote
                                    </button>
                                    <button
                                        type="button"
                                        className="px-8 py-5 border-2 border-(--warm-white)/20 text-(--warm-white) rounded-xl font-semibold hover:border-(--warm-white)/40 hover:bg-(--warm-white)/5 transition-all duration-300 cursor-pointer"
                                    >
                                        Speak to Concierge
                                    </button>
                                </div>

                                {/* Trust Indicators */}
                                <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-(--warm-white)/10">
                                    <div className="flex items-center gap-2 text-(--warm-white)/60 text-sm">
                                        <svg className="w-5 h-5 text-(--deep-red)" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span>Secure Booking</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-(--warm-white)/60 text-sm">
                                        <svg className="w-5 h-5 text-(--deep-red)" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span>24/7 Support</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-(--warm-white)/60 text-sm">
                                        <svg className="w-5 h-5 text-(--deep-red)" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                                        </svg>
                                        <span>Instant Confirmation</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
