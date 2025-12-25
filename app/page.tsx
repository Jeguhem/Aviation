import Hero from "@/app/components/Hero";
import BookingCard from "@/app/components/BookingCard";
import BentoGrid from "@/app/components/BentoGrid";
import ExperienceSection from "@/app/components/ExperienceSection";
import FleetSection from "@/app/components/FleetSection";
import FooterCTA from "@/app/components/FooterCTA";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <BookingCard />
      <BentoGrid />
      <ExperienceSection />
      <FleetSection />
      <FooterCTA />
      <Footer />
    </main>
  );
}
