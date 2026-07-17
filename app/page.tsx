import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full relative">
      <Hero />

      <Expertise />

      <Project />

      <CTA />

      <Footer />
    </div>
  );
}
