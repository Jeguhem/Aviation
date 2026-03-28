"use client";
import { useState } from "react";
import RequestQuoteModal from "./RequestQuoteModal";

export default function FooterCTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="py-24 bg-near-black border-t border-warm-white/10">
            <div className="container-custom text-center relative z-20">
                <h2 className="headline-lg text-(--warm-white) mb-6">
                    Ready to Elevate Your Journey?
                </h2>
                <p className="body-lg max-w-2xl mx-auto mb-10 text-(--light-gray)">
                    Experience the pinnacle of private aviation. Request a personalized quote
                    and discover how we redefine luxury travel.
                </p>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="btn-primary text-lg px-12 py-4 cursor-pointer"
                >
                    Request Your Quote
                </button>
            </div>
            
            <RequestQuoteModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
}
