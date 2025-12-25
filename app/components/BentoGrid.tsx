"use client";

const features = [
    {
        title: "Global Reach",
        description: "Access to 5,000+ airports worldwide",
        size: "large",
    },
    {
        title: "Elite Fleet",
        description: "Luxury aircraft from light jets to ultra-long range",
        size: "medium",
    },
    {
        title: "Private Charter",
        description: "Tailored experiences for every journey",
        size: "medium",
    },
    {
        title: "24/7 Concierge",
        description: "Round-the-clock personalized service",
        size: "small",
    },
    {
        title: "Discretion & Security",
        description: "Your privacy is our priority",
        size: "large",
    },
];

export default function BentoGrid() {
    return (
        <section className="section-padding bg-warm-white">
            <div className="container-custom">
                <h2 className="headline-lg text-near-black mb-4 text-center">
                    Unparalleled Excellence
                </h2>
                <p className="body-lg text-center text-soft-gray mb-16 max-w-2xl mx-auto">
                    Every detail crafted for the discerning traveler
                </p>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Global Reach - Large */}
                    <div className="lg:col-span-2 lg:row-span-2 group">
                        <div className="h-full glass-card bg-near-black/95 p-8 lg:p-12 flex flex-col justify-end min-h-[300px] lg:min-h-[400px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                            <h3 className="text-3xl lg:text-4xl font-bold text-warm-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                                {features[0].title}
                            </h3>
                            <p className="body-md text-light-gray">
                                {features[0].description}
                            </p>
                        </div>
                    </div>

                    {/* Elite Fleet - Medium */}
                    <div className="lg:col-span-2 group">
                        <div className="h-full glass-card bg-deep-red/90 p-8 flex flex-col justify-end min-h-[200px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                            <h3 className="text-2xl lg:text-3xl font-bold text-warm-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                                {features[1].title}
                            </h3>
                            <p className="body-md text-warm-white/90">
                                {features[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Private Charter - Medium */}
                    <div className="group">
                        <div className="h-full glass-card bg-soft-gray/20 border-2 border-near-black/10 p-8 flex flex-col justify-end min-h-[200px] transition-all duration-500 hover:scale-[1.02] hover:border-deep-red">
                            <h3 className="text-2xl font-bold text-near-black mb-2 font-[family-name:var(--font-space-grotesk)]">
                                {features[2].title}
                            </h3>
                            <p className="body-md text-soft-gray">
                                {features[2].description}
                            </p>
                        </div>
                    </div>

                    {/* 24/7 Concierge - Small */}
                    <div className="group">
                        <div className="h-full glass-card bg-near-black/95 p-8 flex flex-col justify-end min-h-[200px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                            <h3 className="text-2xl font-bold text-warm-white mb-2 font-[family-name:var(--font-space-grotesk)]">
                                {features[3].title}
                            </h3>
                            <p className="body-md text-light-gray">
                                {features[3].description}
                            </p>
                        </div>
                    </div>

                    {/* Discretion & Security - Large */}
                    <div className="lg:col-span-2 group">
                        <div className="h-full glass-card bg-gradient-to-br from-near-black to-darker-black p-8 lg:p-12 flex flex-col justify-end min-h-[250px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                            <h3 className="text-3xl lg:text-4xl font-bold text-warm-white mb-3 font-[family-name:var(--font-space-grotesk)]">
                                {features[4].title}
                            </h3>
                            <p className="body-md text-light-gray">
                                {features[4].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
