import Hero from "@/components/Hero2";
import BookingCard from "@/components/BookingCard";
import BentoGrid from "@/components/BentoGrid";
import ExperienceSection from "@/components/ExperienceSection";
import FleetSection from "@/components/FleetSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";
import ExperientialShowcase from "@/components/ExperientialShowcase";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BentoGrid />
      <ExperientialShowcase />
      <ExperienceSection />
      <FleetSection />
      <FooterCTA />
      <Footer />
    </main>
  );
}
