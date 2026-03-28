export interface FleetAircraft {
    id: string;
    category: string; // e.g., "Light Jets"
    name: string; // Representative model, e.g., "Citation CJ4 / Phenom 300"
    description: string; // Short luxurious description for cards
    longDescription: string; // Longer description for detail page
    image: string;
    specs: {
        range: string;
        passengers: string;
        speed: string;
        cabinHeight: string;
        baggage: string;
    };
    features: string[];
    seats: number; // For layout visualization
}

export const fleet: FleetAircraft[] = [
    {
        id: "light-jets",
        category: "Light Jets",
        name: "Citation CJ4 / Phenom 300",
        description: "Perfect for short hops and regional efficiency.",
        longDescription: "The ideal balance of performance, comfort, and cost-efficiency for short to mid-range flights. Our light jet fleet offers a private, quiet cabin perfect for quick business trips or weekend getaways.",
        image: "/real-jet-images/phenom-300-lightjet-2.webp",
        specs: {
            range: "2,000 nm",
            passengers: "6-8",
            speed: "450 kts",
            cabinHeight: "4 ft 9 in",
            baggage: "65 cu ft",
        },
        features: ["Club Seating", "Refreshment Center", "WiFi Available", "Enclosed Lavatory"],
        seats: 7,
    },
    {
        id: "midsize-jets",
        category: "Midsize Jets",
        name: "Citation Latitude / Hawker 900XP",
        description: "Coast-to-coast comfort with stand-up cabins.",
        longDescription: "Step up to a spacious stand-up cabin with transcontinental range. Midsize jets offer the perfect blend of luxury and utility, allowing you to travel further in greater comfort.",
        image: "/real-jet-images/citation-latitude-midjet.jpg",
        specs: {
            range: "2,850 nm",
            passengers: "8-9",
            speed: "466 kts",
            cabinHeight: "6 ft",
            baggage: "100 cu ft",
        },
        features: ["Stand-up Cabin", "Full Galley", "Flight Attendant Optional", "Lie-flat Berths"],
        seats: 9,
    },
    {
        id: "super-midsize-jets",
        category: "Super Midsize",
        name: "Challenger 350 / Gulfstream G280",
        description: "Transcontinental luxury and speed.",
        longDescription: "Experience large-cabin comfort with the agility to access smaller airports. Super Midsize jets define versatility, connecting continents and cities with exceptional speed and style.",
        image: "/real-jet-images/Challenger-350-supermidjet-2.webp",
        specs: {
            range: "3,600 nm",
            passengers: "9-10",
            speed: "500 kts",
            cabinHeight: "6 ft 2 in",
            baggage: "120 cu ft",
        },
        features: ["Full Galley", "Flight Attendant Included", "High-Speed WiFi", "Accessible Baggage"],
        seats: 10,
    },
    {
        id: "heavy-jets",
        category: "Heavy Jets",
        name: "Gulfstream GIV-SP / Challenger 605",
        description: "International excellence and spaciousness.",
        longDescription: "The gold standard for international travel. Heavy jets provide distinct living zones, allowing you to work, dine, and rest in absolute privacy while crossing oceans.",
        image: "/real-jet-images/gulfstream-GIVSP-heavyjet-2.jpg",
        specs: {
            range: "4,500 nm",
            passengers: "12-14",
            speed: "520 kts",
            cabinHeight: "6 ft 2 in",
            baggage: "150 cu ft",
        },
        features: ["Full Galley & Crew", "Private Stateroom", "Shower (Select)", "Conference Seating"],
        seats: 14,
    },
    {
        id: "ultra-long-range",
        category: "Ultra Long Range",
        name: "Global 7500 / Gulfstream G650",
        description: "Global reach without compromise.",
        longDescription: "The pinnacle of private aviation. Fly non-stop from New York to Hong Kong in a cabin designed to minimize jet lag and maximize productivity and relaxation.",
        image: "/real-jet-images/global-7500-ultrajet-2.webp",
        specs: {
            range: "7,700 nm",
            passengers: "14-19",
            speed: "Mach 0.925",
            cabinHeight: "6 ft 5 in",
            baggage: "195 cu ft",
        },
        features: ["Global Range", "Full Bedroom", "Shower", "Master Suite"],
        seats: 16,
    },
];
