"use client";
import { Phone, MessageCircle, Sprout, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const PHONE_NUMBER = "+254769768560";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Hello! I'm interested in your farm produce."
);

const stats = [
  {
    number: "4+",
    label: "Years In Production",
    icon: TrendingUp,
  },
  {
    number: "120+",
    label: "Tonnes Harvested",
    icon: Sprout,
  },
  {
    number: "5+",
    label: " Major Markets Reached",
    icon: Users,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/task2.jpeg"
          alt="Fresh farm produce"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl z-0" />

      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-primary-foreground text-sm font-medium border border-white/20">
              🌱 Versatile Growers · Est. 2022
            </span>
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up animation-delay-100 text-4xl md:text-5xl lg:text-6xl font-display font-bold  leading-tight text-balance text-primary-foreground">
            Fresh Produce, Modern Farming, Trusted Consultancy
            
          </h1>

          {/* Subtext */}
          <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            Quality vegetables and crops grown with care in Kitengela, Kenya 
            supporting sustainable farming and healthy communities.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up animation-delay-300 flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" asChild>
              <a href="#contact">
                <Phone className="mr-2" />
                Order Now
              </a>
            </Button>

            <Button
              size="lg"
              asChild
            >
              <a
                href={`https://wa.me/${PHONE_NUMBER.replace(
                  "+",
                  ""
                )}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2" />
                WhatsApp 
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up animation-delay-400 grid grid-cols-3 gap-4 max-w-3xl mx-auto pt-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5 hover:bg-white/15 transition-all"
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                </div>
                <p className="text-2xl md:text-3xl font-display font-bold text-white">
                  {stat.number}
                </p>
                <p className="text-xs md:text-sm text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Owner */}
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
