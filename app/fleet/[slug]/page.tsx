import { notFound } from "next/navigation";
import { fleet } from "@/lib/fleet-data";
import FleetDetailView from "@/components/FleetDetailView";
import { Metadata } from "next";

export async function generateStaticParams() {
    return fleet.map((aircraft) => ({
        slug: aircraft.id,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const aircraft = fleet.find((f) => f.id === slug);

    if (!aircraft) {
        return {
            title: "Aircraft Not Found",
        };
    }

    return {
        title: `${aircraft.category} - ${aircraft.name} | Private Fleet`,
        description: aircraft.description,
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const aircraft = fleet.find((f) => f.id === slug);

    if (!aircraft) {
        return notFound();
    }

    return <FleetDetailView aircraft={aircraft} />;
}
