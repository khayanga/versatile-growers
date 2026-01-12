'use client'
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
         <a
  href="https://www.facebook.com/share/1CGZHVXGFu/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-3 group"
>
  {/* Logo Badge */}
  <div
    className={`relative rounded-full p-2 transition-all duration-300 ${
      isScrolled
        ? "bg-white shadow-sm"
        : "bg-white/20 backdrop-blur-md"
    }`}
  >
    <Image
      src="/logo.png"
      alt="Versatile Growers Logo"
      width={40}
      height={40}
      className="object-contain transition-transform duration-300 group-hover:scale-105"
      priority
    />
  </div>

  {/* Brand Name */}
  <span
    className={`font-display font-bold text-lg tracking-wide transition-colors ${
      isScrolled ? "text-foreground" : "text-primary-foreground"
    }`}
  >
    Versatile Growers
  </span>
</a>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? isScrolled
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary-foreground/20 text-primary-foreground"
                    : isScrolled
                    ? "text-muted-foreground hover:text-foreground hover:bg-orange-500/10"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-orange-500/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-80 pb-4" : "max-h-0"
          }`}
        >
          <div
            className={`flex flex-col gap-1 rounded-2xl p-2 ${
              isScrolled ? "bg-card" : "bg-foreground/20 backdrop-blur-md"
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.href.slice(1)
                    ? "bg-primary text-primary-foreground"
                    : isScrolled
                    ? "text-muted-foreground hover:bg-orange-500/10 hover:text-foreground"
                    : "text-primary-foreground/90 hover:bg-orange-500/10"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
