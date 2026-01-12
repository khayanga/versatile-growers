"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields before sending.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxdSK-cPlMm-P2GPd507iSa1oenSLWSjHPZzCjcs11EM2EX-dYsDR6n2tDblrZxGebd/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
        }
      );

      if (!response.ok) throw new Error("Request failed");

      toast({
        title: "Message sent ✨",
        description: "Thanks for reaching out! We’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      toast({
        title: "Failed to send",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 bg-linear-to-b from-green-50 via-white to-orange-50"
    >
      <div className="mx-auto max-w-6xl">
        <div className="space-y-14 animate-fade-in-up">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have a question or want to place an order? We’d love to hear from
              you.
            </p>
            <div className="h-1 w-24 bg-linear-to-r from-green-500 to-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="bg-card/90 backdrop-blur border border-border rounded-2xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What produce are you interested in?"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Ready to order?</h3>
                <p className="text-muted-foreground">
                  Reach out directly or send us a message. We respond fast.
                </p>
              </div>

              {[
                {
                  icon: Mail,
                  text: "versatilegrowers1@gmail.com",
                  href: "mailto:versatilegrowers1@gmail.com",
                },
                {
                  icon: Phone,
                  text: "0769768560",
                  href: "tel:0769768560",
                },
                
                {
                  icon: MapPin,
                  text: "Kitengela, Kajiado County",
                  href: "#",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-5 rounded-xl border bg-card"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-orange-500 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
