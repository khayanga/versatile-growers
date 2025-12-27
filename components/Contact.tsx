"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();

  const [loading, setLoading] = useState<boolean>(false);
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
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      toast({
        title: "Message sent ✨",
        description: "Thanks for reaching out! I’ll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again or reach me directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
  <section
    id="contact"
    className="relative py-24 px-6 bg-linear-to-b from-green-50 via-white to-orange-50"
  >
    <div className="mx-auto max-w-6xl">
      <div className="space-y-14 animate-fade-in-up">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a question or want to place an order? We’d love to hear from you.
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-green-500 to-orange-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Form Card */}
          <div className="bg-card/90 backdrop-blur border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="focus-visible:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="focus-visible:ring-green-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="What produce are you interested in?"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="focus-visible:ring-green-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full bg-linear-to-r from-green-600 to-orange-500 hover:opacity-90 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Ready to order?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reach out directly via email or phone, or send us a message using
                the form. We respond fast.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
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
                    className="group flex items-center gap-4 p-5 rounded-xl border border-border bg-card/80 backdrop-blur hover:border-orange-500/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-green-500 to-orange-500 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium group-hover:text-orange-600 transition-colors">
                      {item.text}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

}
