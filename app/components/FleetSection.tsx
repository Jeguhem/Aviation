"use client";

const fleet = [
    {
        name: "Light Jets",
        range: "Up to 1,500 miles",
        passengers: "6-8 passengers",
    },
    {
        name: "Midsize Jets",
        range: "Up to 3,000 miles",
        passengers: "8-9 passengers",
    },
    {
        name: "Super Midsize",
        range: "Up to 4,000 miles",
        passengers: "9-12 passengers",
    },
    {
        name: "Heavy Jets",
        range: "Up to 6,000 miles",
        passengers: "12-16 passengers",
    },
    {
        name: "Ultra Long Range",
        range: "7,500+ miles",
        passengers: "14-19 passengers",
    },
];

export default function FleetSection() {
    return (
        <section className="section-padding bg-warm-white">
            <div className="container-custom">
                <h2 className="headline-lg text-near-black mb-4 text-center">
                    Our Fleet
                </h2>
                <p className="body-lg text-center text-soft-gray mb-16 max-w-2xl mx-auto">
                    From coast to coast or across continents, we have the perfect aircraft for your journey
                </p>

                {/* Fleet Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {fleet.map((aircraft, index) => (
                        <div
                            key={index}
                            className="group bg-near-black/95 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-near-black/10"
                        >
                            <div className="h-32 bg-soft-gray/10 rounded-lg mb-4 flex items-center justify-center">
                                <svg
                                    className="w-16 h-16 text-warm-white/40"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M5 12h14M12 5l7 7-7 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-warm-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                                {aircraft.name}
                            </h3>
                            <div className="space-y-2">
                                <p className="text-sm text-light-gray">
                                    <span className="text-warm-white font-medium">Range:</span> {aircraft.range}
                                </p>
                                <p className="text-sm text-light-gray">
                                    <span className="text-warm-white font-medium">Capacity:</span> {aircraft.passengers}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
