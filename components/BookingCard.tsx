"use client";
import { useState } from "react";
import DatePicker from "./ui/DatePicker";
import RequestQuoteModal, { RequestQuoteFilters } from "./RequestQuoteModal";

export default function BookingCard({ className = "" }: { className?: string }) {
    const [tripType, setTripType] = useState("one-way");
    const [departureDate, setDepartureDate] = useState<string | null>(null);
    const [returnDate, setReturnDate] = useState<string | null>(null);
    
    // Form states
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");
    const [passengers, setPassengers] = useState("1");
    
    // Modal state
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Initial data to pass
    const [modalData, setModalData] = useState<Partial<RequestQuoteFilters>>({});

    const handleRequestQuote = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Pass data
        setModalData({
            departure,
            destination,
            date: departureDate,
            passengers,
            tripType,
            message: tripType === "round-trip" && returnDate ? `Return Date: ${new Date(returnDate).toLocaleDateString()}` : ""
        });
        
        setIsModalOpen(true);
    };

    return (
        <div className={`relative backdrop-blur-xl bg-(--warm-white)/5 border border-(--warm-white)/10 rounded-2xl p-6 md:p-10 shadow-2xl ${className}`}>
            {/* Subtle glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-(--deep-red)/20 via-transparent to-(--deep-red)/20 rounded-2xl blur opacity-30 pointer-events-none"></div>

            <div className="relative">
                {/* Header within card for context */}
                <div className="mb-8 border-b border-(--warm-white)/10 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-(--warm-white) font-[family-name:var(--font-space-grotesk)]">
                            Book Your Flight
                        </h2>
                        <p className="text-sm text-(--light-gray)">
                            Global access. Instant quotes.
                        </p>
                    </div>

                    {/* Trip Type Selector */}
                    <div className="flex bg-(--near-black)/50 rounded-lg p-1">
                        <button
                            onClick={() => setTripType("one-way")}
                            className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer ${tripType === "one-way"
                                ? "bg-(--deep-red) text-(--warm-white) shadow-lg"
                                : "text-(--light-gray) hover:text-(--warm-white)"
                                }`}
                        >
                            One Way
                        </button>
                        <button
                            onClick={() => setTripType("round-trip")}
                            className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer ${tripType === "round-trip"
                                ? "bg-(--deep-red) text-(--warm-white) shadow-lg"
                                : "text-(--light-gray) hover:text-(--warm-white)"
                                }`}
                        >
                            Round Trip
                        </button>
                        <button
                            onClick={() => setTripType("multi-city")}
                            className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-300 cursor-pointer ${tripType === "multi-city"
                                ? "bg-(--deep-red) text-(--warm-white) shadow-lg"
                                : "text-(--light-gray) hover:text-(--warm-white)"
                                }`}
                        >
                            Multi-City
                        </button>
                    </div>
                </div>

                {/* Booking Form */}
                <form className="space-y-6" onSubmit={handleRequestQuote}>
                    {/* Route Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* From */}
                        <div className="group">
                            <label className="block text-[10px] font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-2">
                                Departure
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={departure}
                                    onChange={(e) => setDeparture(e.target.value)}
                                    placeholder="New York (JFK)"
                                    className="w-full px-4 py-3 bg-(--near-black)/40 border border-(--warm-white)/10 rounded-lg text-(--warm-white) placeholder-(--warm-white)/30 focus:border-(--deep-red) focus:bg-(--near-black)/60 focus:outline-none transition-all duration-300"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--warm-white)/30 pointer-events-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* To */}
                        <div className="group">
                            <label className="block text-[10px] font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-2">
                                Destination
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    placeholder="London (LHR)"
                                    className="w-full px-4 py-3 bg-(--near-black)/40 border border-(--warm-white)/10 rounded-lg text-(--warm-white) placeholder-(--warm-white)/30 focus:border-(--deep-red) focus:bg-(--near-black)/60 focus:outline-none transition-all duration-300"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--warm-white)/30 pointer-events-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Date & Passengers Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Departure Date */}
                        <div className="w-full">
                            <DatePicker
                                label="Departure Date"
                                value={departureDate}
                                onChange={setDepartureDate}
                            />
                        </div>

                        {/* Return Date (if round trip) */}
                        {tripType === "round-trip" && (
                            <div className="w-full animate-in fade-in slide-in-from-left-4 duration-300">
                                <DatePicker
                                    label="Return Date"
                                    value={returnDate}
                                    onChange={setReturnDate}
                                />
                            </div>
                        )}

                        {/* Passengers */}
                        <div className="group">
                            <label className="block text-[10px] font-semibold text-(--warm-white)/60 uppercase tracking-wider mb-2">
                                Passengers
                            </label>
                            <div className="relative">
                                <select 
                                    value={passengers}
                                    onChange={(e) => setPassengers(e.target.value)}
                                    className="w-full px-4 py-3 bg-(--near-black)/40 border border-(--warm-white)/10 rounded-lg text-(--warm-white) focus:border-(--deep-red) focus:bg-(--near-black)/60 focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                                >
                                    <option value="1">1 Passenger</option>
                                    <option value="2">2 Passengers</option>
                                    <option value="3">3 Passengers</option>
                                    <option value="4">4 Passengers</option>
                                    <option value="5">5 Passengers</option>
                                    <option value="6-10">6-10 Passengers</option>
                                    <option value="10+">10+ Passengers</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-(--warm-white)/30 pointer-events-none">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button
                            type="submit"
                            className="w-full bg-(--deep-red) hover:bg-red-700 text-(--warm-white) px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:-translate-y-0.5 cursor-pointer"
                        >
                            Request Quote
                        </button>
                    </div>
                </form>
            </div>
            
            <RequestQuoteModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                initialData={modalData}
            />
        </div>
    );
}
