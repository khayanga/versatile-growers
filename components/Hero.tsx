"use client";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";

const PHONE_NUMBER = "+254769768560";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in your farm produce."
);

const Hero = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/task2.jpeg"
          alt="hero-image"
          height={500}
          width={500}
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      <div className="relative z-10 container px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium border border-primary-foreground/20">
              Versatile growers est.{currentYear}
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight text-balance">
            Fresh Farm Produce from Versatile Growers
          </h1>

          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Quality, farm-fresh vegetables and crops grown with care in
            Kitengela, Kenya. Direct from our farm to your table.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <a href="#contact">
                <Phone className="mr-1" />
                Order Now
              </a>
            </Button>
            <Button size="lg" asChild>
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace(
                  "+",
                  ""
                )}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-1" />
                WhatsApp Farmer
              </a>
            </Button>
          </div>

          {/* Farmer Name */}
          <p className="animate-fade-up animation-delay-400 text-primary-foreground/80 text-sm pt-4">
            Owned & operated by <strong>Nereah Joan</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
