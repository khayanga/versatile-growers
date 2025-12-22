import { Phone, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

const PHONE_NUMBER = "+254769768560";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-r from-green-500 to-green-800 text-primary-foreground py-12">
      <div className="container  mx-auto ">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center gap-4 md:flex-row justify-between  md:px-12 mb-8">
            {/* Farm Info */}
            <div className="text-center md:text-left">
              <div>
                <Image 
                src="/logo.png"
                alt="Versatile Growers Logo"
                width={150}
                height={150}
                className="mx-auto md:mx-0 mb-4"
                />
              </div>
              <p className="text-white text-sm mb-4">
                Quality farm-fresh produce grown with care in Kajiado County, Kenya.
              </p>
              <p className="text-white text-sm">
                <strong className="text-white">Owner:</strong> Nereah Joan
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-primary-foreground/70 hover:text-orange-400 text-sm transition-colors">
                  About Us
                </a>
                <a href="#products" className="block text-primary-foreground/70 hover:text-orange-400 text-sm transition-colors">
                  Products
                </a>
                <a href="#milestones" className="block text-primary-foreground/70 hover:text-orange-400 text-sm transition-colors">
                  Milestones
                </a>
                <a href="#contact" className="block text-primary-foreground/70 hover:text-orange-400 text-sm transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-orange-400 text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBER}
                </a>
                <a
                  href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-orange-400 text-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
                <p className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4" />
                  Kajiado County, Kenya
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-12">
              <p className="text-white text-sm">
                © {currentYear} Versatile growers. All rights reserved.
              </p>
              <p className="text-white text-sm">
                Powered by{" "}
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:underline font-medium"
                >
                  Zuri Tech 
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
