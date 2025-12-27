import { Phone, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

const PHONE_NUMBER = "+254769768560";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // url="https://docs.google.com/forms/d/e/1FAIpQLSdXsJP_XXFs4CL8pqlFQD12F96a_YbIJMvqpwKDY8ta1L7j9w/viewform?usp=header"

  return (
    <footer className="relative bg-linear-to-br from-green-700 via-green-800 to-green-900 text-white">
      {/* Top glow */}
      <div className="absolute inset-x-0 -top-24 h-24 bg-linear-to-t from-green-700/40 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid gap-12 md:grid-cols-3 items-start">
          {/* Brand / Farm Info */}
          <div className="space-y-4 text-center md:text-left">
            <Image
              src="/logo.png"
              alt="Versatile Growers Logo"
              width={150}
              height={150}
              className="mx-auto md:mx-0"
            />
            <p className="text-sm text-white/80 leading-relaxed">
              Quality farm-fresh produce grown with care in Kajiado County, Kenya.
            </p>
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">Owner:</span> Nereah Joan
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 tracking-wide">Quick Links</h4>
            <nav className="space-y-3">
              {["about", "products", "milestones", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block text-sm text-white/70 hover:text-orange-400 transition-colors"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-4 tracking-wide">Contact Us</h4>
            <div className="space-y-4">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="flex items-center justify-center md:justify-start gap-3 text-sm text-white/70 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PHONE_NUMBER}
              </a>

              <a
                href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start gap-3 text-sm text-white/70 hover:text-orange-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>

              <p className="flex items-center justify-center md:justify-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4" />
                Kajiado County, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 border-t border-white/15 pt-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-sm text-white/70">
            <p>© {currentYear} Versatile Growers. All rights reserved.</p>

            <p>
              Powered by{" "}
              <a
                href="#"
                className="text-white hover:text-orange-400 font-medium transition-colors"
              >
                Zuri Tech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
