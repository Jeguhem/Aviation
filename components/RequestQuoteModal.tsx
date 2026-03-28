"use client";

import { useState, useEffect } from "react";
import Modal from "./ui/Modal";
import DatePicker from "./ui/DatePicker";
import { useToast } from "./ui/ToastProvider";

export interface RequestQuoteFilters {
    departure: string;
    destination: string;
    date: string | null;
    passengers: string;
    tripType: string;
    message?: string;
}

interface RequestQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: Partial<RequestQuoteFilters>;
}

export default function RequestQuoteModal({ isOpen, onClose, initialData }: RequestQuoteModalProps) {
    const { showToast } = useToast();
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        departure: "",
        destination: "",
        date: null as string | null,
        passengers: "1",
        message: "",
    });

    useEffect(() => {
        if (isOpen && initialData) {
            setFormData(prev => ({
                ...prev,
                departure: initialData.departure || prev.departure,
                destination: initialData.destination || prev.destination,
                date: initialData.date || prev.date,
                passengers: initialData.passengers || prev.passengers,
                message: initialData.message || prev.message,
            }));
        }
    }, [isOpen, initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.name || !formData.email || !formData.departure || !formData.destination) {
            showToast("Please fill in all required fields.", "error");
            return;
        }

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsLoading(false);
        showToast("Quote request submitted successfully. A specialist will contact you soon.", "success");
        onClose();
        
        // Reset form except context fields
        setFormData({
            name: "",
            email: "",
            phone: "",
            departure: "",
            destination: "",
            date: null,
            passengers: "1",
            message: "",
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Request a Quote">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">
                            Full Name <span className="text-(--deep-red)">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-(--warm-white) border border-(--light-gray)/30 rounded-lg text-(--near-black) focus:border-(--deep-red) outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">
                            Email Address <span className="text-(--deep-red)">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-(--warm-white) border border-(--light-gray)/30 rounded-lg text-(--near-black) focus:border-(--deep-red) outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-(--warm-white) border border-(--light-gray)/30 rounded-lg text-(--near-black) focus:border-(--deep-red) outline-none transition-all"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">
                            Departure <span className="text-(--deep-red)">*</span>
                        </label>
                        <input
                            type="text"
                            name="departure"
                            required
                            value={formData.departure}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-(--warm-white) border border-(--light-gray)/30 rounded-lg text-(--near-black) focus:border-(--deep-red) outline-none transition-all"
                            placeholder="City or Airport Code"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">
                            Destination <span className="text-(--deep-red)">*</span>
                        </label>
                        <input
                            type="text"
                            name="destination"
                            required
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-(--warm-white) border border-(--light-gray)/30 rounded-lg text-(--near-black) focus:border-(--deep-red) outline-none transition-all"
                            placeholder="City or Airport Code"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        {/* Using lightMode prop which we will implement next */}
                        <DatePicker
                            label="Departure Date"
                            required
                            value={formData.date}
                            onChange={(date) => setFormData(prev => ({ ...prev, date }))}
                            lightMode={true} 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">
                            Passengers <span className="text-(--deep-red)">*</span>
                        </label>
                        <select
                            name="passengers"
                            required
                            value={formData.passengers}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-(--warm-white) border border-(--light-gray)/30 rounded-lg text-(--near-black) focus:border-(--deep-red) outline-none transition-all appearance-none cursor-pointer"
                        >
                            <option value="1">1 Passenger</option>
                            <option value="2">2 Passengers</option>
                            <option value="3">3 Passengers</option>
                            <option value="4">4 Passengers</option>
                            <option value="5">5 Passengers</option>
                            <option value="6-10">6-10 Passengers</option>
                            <option value="10+">10+ Passengers</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-(--soft-gray)">
                        Message (Optional)
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-(--warm-white) border border-(--light-gray)/30 rounded-lg text-(--near-black) focus:border-(--deep-red) outline-none transition-all resize-y min-h-[100px]"
                        placeholder="Any additional requirements?"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-(--near-black) text-(--warm-white) py-4 rounded-xl font-bold transition-all duration-300 shadow-lg cursor-pointer flex justify-center items-center ${isLoading ? "opacity-70 cursor-not-allowed" : "hover:bg-(--deep-red)"}`}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </>
                    ) : (
                        "Submit Request"
                    )}
                </button>
            </form>
        </Modal>
    );
}
