"use client";

import { BadgeCheck, Database, Eye, Target } from "lucide-react";
import { Button } from "./ui/button";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-linear-to-b from-green-50 to-white "
    >
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              About Us
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-start ">
            {/* Story Text */}

            <div className="p-2">
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground ">
                <p>
                  What started as a small passion for farming has grown into a
                  commitment to providing fresh, healthy produce to our
                  community.
                </p>

                <p>
                  We combine traditional farming knowledge with sustainable,
                  climate-smart practices to grow crops that are good for you
                  and gentle on the land.
                </p>

                <p>
                  From planting to harvest, every step we take is guided by
                  care, quality, and responsibility delivering food you can
                  trust directly from our fields to your table.
                </p>
              </div>

              <Button className="mt-8 border-primary" variant="outline" disabled>
                <BadgeCheck className="w-5 h-5" />
                  <span className="font-semibold">
                    Member of Future Farm Initiative
                  </span>
              </Button>
             
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Mission */}
              <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group hover:shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mb-3">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Our Mission
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To grow high-quality fruits and vegetables using good agricultural practices, innovation, and shared knowledge nourishing communities while creating lasting impact
                </p>
              </div>

              {/* Vision */}
              <div className="p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group hover:shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mb-3">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Our Vision
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To ensure access to fresh, nutritious produce, strengthen food security, and empower farmers through knowledge and sustainable agribusiness
                </p>
              </div>

              {/* Values */}
              <div className="sm:col-span-2 p-5 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all group hover:shadow-sm">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors w-fit mb-3">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Our Values
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
