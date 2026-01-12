import { Award, TrendingUp, Users, Sprout, Mail } from "lucide-react";
import { SectionDecorator } from "./DecorativeElements";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const services = [
  {
    title: "Modern Farming Solutions",
    description:
      "We apply modern agricultural practices and smart farming solutions to improve productivity, reduce costs, and promote sustainable farming. Our approach focuses on efficiency, innovation, and long-term impact.",
    icon: TrendingUp,
  },
  {
    title: "Crop & Soil Management",
    description:
      "Healthy soil leads to better harvests. We support farmers with soil testing, nutrient management, crop rotation strategies, and best planting practices to maximize yield while preserving soil health.",
    icon: Sprout,
  },
  {
    title: "Integrated Pest Management",
    description:
      "We use integrated pest management techniques that combine biological, cultural, and controlled chemical methods to minimize crop loss, protect the environment, and ensure safe, quality produce.",
    icon: Award,
  },
];

const MilestonesSection = () => {
  
  
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-white relative overflow-hidden"
    >
      <SectionDecorator />

      <div className="container mx-auto  px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Practical, sustainable, and impact-driven agricultural solutions
            designed to support farmers, partners, and investors.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-3xl p-px bg-linear-to-br from-orange-500/40 via-green-500/40 to-transparent hover:from-orange-500 hover:via-green-500 transition-all duration-500"
            >
              <div className="relative h-full rounded-3xl bg-background p-8 overflow-hidden">
                {/* Background accent */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Floating icon */}
                <div className="relative z-10 mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-linear-to-br from-orange-500 to-green-600 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Hover underline */}
                  <div className="h-1 w-0 bg-linear-to-r from-orange-500 to-green-600 rounded-full group-hover:w-16 transition-all duration-500" />
                </div>

                {/* Decorative circle */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Investor / Partner Connect */}
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-green-600 to-orange-500 p-8 md:p-12 text-white">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-white/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Connect With Us
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Investors & Strategic Partners
              </h3>

              <p className="text-white/90 max-w-xl mb-8">
                Interested in partnering with us, investing in sustainable
                agriculture, or exploring collaboration opportunities? Book a
                consultation
              </p>

             <a
  href="https://calendar.app.google/cPbN9xZefBK8atDn9"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    type="button"
    className="px-6 py-6 rounded-xl bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
  >
    Book a Consultation
  </Button>
</a>


           
            </div>

            {/* Decorative blur */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilestonesSection;
