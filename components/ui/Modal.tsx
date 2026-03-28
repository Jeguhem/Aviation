"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    title?: string;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
    const [mounted, setMounted] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.body.style.overflow = "hidden";
            window.addEventListener("keydown", handleEscape);
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isOpen, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-(--near-black)/80 backdrop-blur-sm transition-opacity"
            onClick={handleBackdropClick}
        >
            <div 
                ref={modalRef}
                className="relative w-full max-w-2xl max-h-[90vh] flex flex-col bg-(--warm-white) rounded-2xl shadow-2xl animate-fly-in"
            >
                {/* Header (Sticky if scrolled) */}
                <div className="flex items-center justify-between p-6 border-b border-(--light-gray)/20 shrink-0">
                    <h2 className="headline-lg text-(--near-black) text-2xl font-[family-name:var(--font-space-grotesk)]">
                        {title}
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 text-(--soft-gray) hover:text-(--near-black) hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                        aria-label="Close modal"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content (Scrollable) */}
                <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
}
