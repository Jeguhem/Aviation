"use client";

export default function BookingCard() {
    return (
        <section className="section-padding bg-near-black relative z-20 -mt-20">
            <div className="container-custom">
                <div className="premium-card max-w-5xl mx-auto">
                    <h2 className="headline-lg text-near-black mb-8">Book Your Flight</h2>

                    <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* From */}
                        <div className="flex flex-col">
                            <label htmlFor="from" className="text-sm font-medium text-soft-gray mb-2">
                                From
                            </label>
                            <input
                                type="text"
                                id="from"
                                placeholder="Departure City"
                                className="px-4 py-3 rounded-lg border border-soft-gray/20 bg-warm-white focus:border-deep-red focus:outline-none transition-colors"
                            />
                        </div>

                        {/* To */}
                        <div className="flex flex-col">
                            <label htmlFor="to" className="text-sm font-medium text-soft-gray mb-2">
                                To
                            </label>
                            <input
                                type="text"
                                id="to"
                                placeholder="Destination City"
                                className="px-4 py-3 rounded-lg border border-soft-gray/20 bg-warm-white focus:border-deep-red focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Date */}
                        <div className="flex flex-col">
                            <label htmlFor="date" className="text-sm font-medium text-soft-gray mb-2">
                                Date
                            </label>
                            <input
                                type="date"
                                id="date"
                                className="px-4 py-3 rounded-lg border border-soft-gray/20 bg-warm-white focus:border-deep-red focus:outline-none transition-colors"
                            />
                        </div>

                        {/* Passengers */}
                        <div className="flex flex-col">
                            <label htmlFor="passengers" className="text-sm font-medium text-soft-gray mb-2">
                                Passengers
                            </label>
                            <select
                                id="passengers"
                                className="px-4 py-3 rounded-lg border border-soft-gray/20 bg-warm-white focus:border-deep-red focus:outline-none transition-colors"
                            >
                                <option value="1">1 Passenger</option>
                                <option value="2">2 Passengers</option>
                                <option value="3">3 Passengers</option>
                                <option value="4">4 Passengers</option>
                                <option value="5">5+ Passengers</option>
                            </select>
                        </div>

                        {/* Submit Button */}
                        <div className="md:col-span-2 lg:col-span-4 flex justify-end mt-4">
                            <button type="submit" className="btn-primary">
                                Search Flights
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
