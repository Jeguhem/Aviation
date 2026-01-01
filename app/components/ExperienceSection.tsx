"use client";

export default function ExperienceSection() {
    return (
        <section className="py-24 bg-(--near-black)">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div>
                        <h2 className="headline-lg text-(--warm-white) mb-6">
                            The Art of Private Aviation
                        </h2>
                        <div className="space-y-6">
                            <p className="body-lg">
                                For over two decades, we've redefined what it means to fly privately.
                                Every journey is a masterpiece of precision, comfort, and discretion.
                            </p>
                            <p className="body-lg">
                                Our commitment extends beyond transportation—we curate experiences
                                that reflect your standards and respect your time.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                        <div className="border-l-2 border-(--deep-red) pl-6">
                            <h3 className="text-xl font-semibold text-(--warm-white) mb-2 font-[family-name:var(--font-space-grotesk)]">
                                Uncompromising Service
                            </h3>
                            <p className="body-md text-(--light-gray)">
                                From flight planning to in-flight amenities, every detail is
                                meticulously orchestrated by our dedicated team.
                            </p>
                        </div>

                        <div className="border-l-2 border-(--deep-red) pl-6">
                            <h3 className="text-xl font-semibold text-(--warm-white) mb-2 font-[family-name:var(--font-space-grotesk)]">
                                Trust & Reliability
                            </h3>
                            <p className="body-md text-(--light-gray)">
                                Safety is paramount. Our fleet undergoes rigorous maintenance,
                                and our pilots are among the industry's most experienced.
                            </p>
                        </div>

                        <div className="border-l-2 border-(--deep-red) pl-6">
                            <h3 className="text-xl font-semibold text-(--warm-white) mb-2 font-[family-name:var(--font-space-grotesk)]">
                                Tailored to You
                            </h3>
                            <p className="body-md text-(--light-gray)">
                                No two journeys are alike. We adapt to your schedule, preferences,
                                and unique requirements with seamless flexibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
