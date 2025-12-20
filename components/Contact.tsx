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
    <section id="contact" className="py-24 px-6 ">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in-up">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Get in Touch</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card border border-border rounded-lg p-8">
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
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="What produce are your intrested in..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={loading}
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
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Ready to order?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Contact us to place your order or to learn more about our
                  fresh farm produce. We're here to help!
                </p>
              </div>

              {/* Contact Links */}
              <div className="space-y-4">
                <h4 className="font-medium">Find me on</h4>
                <div className="space-y-3">
                  <a
                    href="mailto:versatilegrowers1@gmail.com"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Mail className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">
                      versatilegrowers1@gmail.com
                    </span>
                  </a>

                  <a
                    href="tel:0769768560"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <Phone className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">
                      0769768560
                    </span>
                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                  >
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="group-hover:text-primary transition-colors">
                      Kitengela, Kajiado County
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
