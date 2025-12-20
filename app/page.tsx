"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MilestonesSection from "@/components/Milestones";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-20 md:pb-0 relative z-10">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Products />
        </AnimatedSection>
        <AnimatedSection>
          <MilestonesSection />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
