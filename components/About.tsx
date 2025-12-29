"use client";

import { BadgeCheck, Database, Eye, Target } from "lucide-react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 px-6 bg-linear-to-b from-green-50 to-white overflow-hidden"
    >
      {/* Decorative blur */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-2  mb-6 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            About Us
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Rooted in sustainability, driven by quality, and committed to
            nourishing our communities.
          </p>
          
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="relative rounded-3xl p-px bg-linear-to-br from-orange-500/40 via-green-500/40 to-transparent">
            <div className="rounded-3xl bg-background p-8 space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                What started as a small passion for farming has grown into a
                commitment to providing fresh, healthy produce to our community.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                We combine traditional farming knowledge with sustainable,
                climate-smart practices to grow crops that are good for you and
                gentle on the land.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                From planting to harvest, every step we take is guided by care,
                quality, and responsibility delivering food you can trust
                directly from our fields to your table.
              </p>

              <a
                href="https://arbarnegroup.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="mt-6 border-orange-500/40 hover:bg-orange-500/10 hover:border-orange-500/60"
                >
                  <BadgeCheck className="w-5 h-5 mr-2" />
                  <span className="font-semibold">
                    Partner of the Future Farms Initiative
                  </span>
                </Button>
              </a>
            </div>
          </div>

          {/* Mission / Vision / Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="group relative rounded-3xl p-px bg-linear-to-br from-orange-500/40 via-green-500/40 to-transparent">
              <div className="rounded-3xl bg-background p-6 h-full">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-orange-500 to-green-600 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Our Mission
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To grow high-quality fruits and vegetables using good
                  agricultural practices, innovation, and shared knowledge 
                  nourishing communities while creating lasting impact.
                </p>
                <div className="mt-4 h-1 w-0 bg-linear-to-r from-orange-500 to-green-600 rounded-full group-hover:w-16 transition-all" />
              </div>
            </div>

            {/* Vision */}
            <div className="group relative rounded-3xl p-px bg-linear-to-br from-orange-500/40 via-green-500/40 to-transparent">
              <div className="rounded-3xl bg-background p-6 h-full">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-orange-500 to-green-600 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Our Vision
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To ensure access to fresh, nutritious produce, strengthen food
                  security, and empower farmers through knowledge and
                  sustainable agribusiness.
                </p>
                <div className="mt-4 h-1 w-0 bg-linear-to-r from-orange-500 to-green-600 rounded-full group-hover:w-16 transition-all" />
              </div>
            </div>

            {/* Values */}
            <div className="sm:col-span-2 group relative rounded-3xl p-px bg-linear-to-br from-orange-500/40 via-green-500/40 to-transparent">
              <div className="rounded-3xl bg-background p-6">
                <div className="mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-orange-500 to-green-600 shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-3">
                  Our Values
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
                  <li>
                    <strong>Quality First</strong> – Only the best makes it to
                    harvest.
                  </li>
                  <li>
                    <strong>Sustainability</strong> – Protecting the land for
                    future generations.
                  </li>
                  <li>
                    <strong>Community</strong> – Growing together with our
                    customers.
                  </li>
                  <li>
                    <strong>Integrity</strong> – Honest farming from seed to
                    sale.
                  </li>
                </ul>
                <div className="mt-4 h-1 w-0 bg-linear-to-r from-orange-500 to-green-600 rounded-full group-hover:w-20 transition-all" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
