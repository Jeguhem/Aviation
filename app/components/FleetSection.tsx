"use client";

const fleet = [
    {
        name: "Light Jets",
        range: "Up to 1,500 miles",
        passengers: "6-8 passengers",
        description: "Perfect for short trips",
    },
    {
        name: "Midsize Jets",
        range: "Up to 3,000 miles",
        passengers: "8-9 passengers",
        description: "Coast-to-coast comfort",
    },
    {
        name: "Super Midsize",
        range: "Up to 4,000 miles",
        passengers: "9-12 passengers",
        description: "Transcontinental luxury",
    },
    {
        name: "Heavy Jets",
        range: "Up to 6,000 miles",
        passengers: "12-16 passengers",
        description: "International excellence",
    },
    {
        name: "Ultra Long Range",
        range: "7,500+ miles",
        passengers: "14-19 passengers",
        description: "Global reach",
    },
];

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
                        From coast to coast or across continents, we have the perfect aircraft for your journey
                    </p>
                </div>

                {/* Fleet Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
                    {fleet.map((aircraft, index) => (
                        <div
                            key={index}
                            className="group relative bg-(--near-black) rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden"
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-(--deep-red)/0 to-(--deep-red)/0 group-hover:from-(--deep-red)/10 group-hover:to-(--deep-red)/20 transition-all duration-500"></div>

                            <div className="relative">
                                {/* Aircraft Icon */}
                                <div className="h-24 flex items-center justify-center mb-6">
                                    <svg
                                        className="w-20 h-20 text-(--deep-red) opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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

                                {/* Aircraft Name */}
                                <h3 className="text-xl font-bold text-(--warm-white) mb-2 font-[family-name:var(--font-space-grotesk)] group-hover:text-(--deep-red)/90 transition-colors duration-300">
                                    {aircraft.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-(--light-gray)/80 mb-4 italic">
                                    {aircraft.description}
                                </p>

                                {/* Divider */}
                                <div className="w-12 h-px bg-(--deep-red)/40 mb-4 group-hover:w-full transition-all duration-500"></div>

                                {/* Specs */}
                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-(--deep-red) mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-sm text-(--warm-white)/90">
                                            {aircraft.range}
                                        </p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <svg className="w-4 h-4 text-(--deep-red) mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                        </svg>
                                        <p className="text-sm text-(--warm-white)/90">
                                            {aircraft.passengers}
                                        </p>
                                    </div>
                                </div>

                                {/* Learn More Link */}
                                <button className="mt-6 text-sm text-(--deep-red) font-semibold group-hover:underline transition-all duration-300 cursor-pointer">
                                    View Details →
                                </button>
                            </div>
                        </div>
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
