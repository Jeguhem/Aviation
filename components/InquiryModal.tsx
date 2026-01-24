"use client";

import { useState } from "react";

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    aircraftName: string;
}

export default function InquiryModal({ isOpen, onClose, aircraftName }: InquiryModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        origin: "",
        destination: "",
        date: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        console.log("Inquiry for " + aircraftName, formData);
        alert("Thank you for your inquiry. A dedicated specialist will contact you shortly.");
        onClose();
        setFormData({ name: "", email: "", phone: "", origin: "", destination: "", date: "", message: "" });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-(--near-black)/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-(--warm-white) rounded-2xl shadow-2xl overflow-hidden animate-fly-in">
                <div className="absolute top-4 right-4">
                    <button
                        onClick={onClose}
                        className="p-2 text-(--soft-gray) hover:text-(--near-black) transition-colors cursor-pointer"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-8 md:p-10">
                    <h2 className="headline-lg text-(--near-black) text-3xl mb-2">Request Charter</h2>
                    <p className="body-md text-(--soft-gray) mb-8">
                        Inquire about the <span className="text-(--deep-red) font-semibold">{aircraftName}</span>.
                        Our team will follow up to discuss availability and tailor your journey.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">Full Name</label>
                                <input
                                    required
                                    type="text"
                                    className="w-full bg-(--warm-white) border-b border-(--light-gray)/30 focus:border-(--deep-red) py-3 text-(--near-black) outline-none transition-colors"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">Email Address</label>
                                <input
                                    required
                                    type="email"
                                    className="w-full bg-(--warm-white) border-b border-(--light-gray)/30 focus:border-(--deep-red) py-3 text-(--near-black) outline-none transition-colors"
                                    placeholder="john@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">Phone Number (Optional)</label>
                            <input
                                type="tel"
                                className="w-full bg-(--warm-white) border-b border-(--light-gray)/30 focus:border-(--deep-red) py-3 text-(--near-black) outline-none transition-colors"
                                placeholder="+1 (555) 000-0000"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">From</label>
                                <input
                                    type="text"
                                    className="w-full bg-(--warm-white) border-b border-(--light-gray)/30 focus:border-(--deep-red) py-3 text-(--near-black) outline-none transition-colors"
                                    placeholder="Departure City"
                                    value={formData.origin}
                                    onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">To</label>
                                <input
                                    type="text"
                                    className="w-full bg-(--warm-white) border-b border-(--light-gray)/30 focus:border-(--deep-red) py-3 text-(--near-black) outline-none transition-colors"
                                    placeholder="Destination City"
                                    value={formData.destination}
                                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">Approximate Date</label>
                            <input
                                type="date"
                                className="w-full bg-(--warm-white) border-b border-(--light-gray)/30 focus:border-(--deep-red) py-3 text-(--near-black) outline-none transition-colors"
                                value={formData.date}
                                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">Message (Optional)</label>
                            <textarea
                                className="w-full bg-(--warm-white) border-b border-(--light-gray)/30 focus:border-(--deep-red) py-3 text-(--near-black) outline-none transition-colors resize-none h-24"
                                placeholder="Any specific requirements or preferences..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-(--near-black) text-(--warm-white) py-4 rounded-xl font-bold hover:bg-(--deep-red) transition-colors duration-300 shadow-lg cursor-pointer"
                        >
                            Submit Inquiry
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
