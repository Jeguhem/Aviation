"use client";

import Image from "next/image";
import Izylogo from "@/public/images/IzyLogo.svg"

export default function Footer() {
    return (
        <footer className="bg-(--darker-black)  py-16 border-t border-(--warm-white)/5">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Image src={Izylogo} alt="logo" />
                        <h3 className="text-2xl font-bold text-(--warm-white) mb-4 font-[family-name:var(--font-space-grotesk)]">
                            Izy Air
                        </h3>
                        <p className="body-md text-(--soft-gray) max-w-md">
                            Redefining private aviation with unparalleled service,
                            discretion, and luxury since 2003.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:mt-10">
                        <h4 className="text-sm font-semibold text-(--warm-white) mb-4 uppercase tracking-wider">
                            Services
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-(--soft-gray) hover:text-(--warm-white) transition-colors cursor-pointer">
                                    Charter Flights
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-(--soft-gray) hover:text-(--warm-white) transition-colors cursor-pointer">
                                    Aircraft Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-(--soft-gray) hover:text-(--warm-white) transition-colors cursor-pointer">
                                    Membership Programs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-(--soft-gray) hover:text-(--warm-white) transition-colors cursor-pointer">
                                    Cargo Services
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:mt-10">
                        <h4 className="text-sm font-semibold text-(--warm-white) mb-4 uppercase tracking-wider">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li className="text-(--soft-gray)">
                                +1 (555) 123-4567
                            </li>
                            <li className="text-(--soft-gray)">
                                charter@izyair.com
                            </li>
                            <li className="text-(--soft-gray)">
                                Available 24/7
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-(--warm-white)/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-(--soft-gray)">
                        © 2024 Izy Air. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-sm text-(--soft-gray) hover:text-(--warm-white) transition-colors cursor-pointer">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-(--soft-gray) hover:text-(--warm-white) transition-colors cursor-pointer">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
