import { Phone, MessageCircle, MapPin } from "lucide-react";

const PHONE_NUMBER = "+254769768560";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container  mx-auto ">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center gap-4 md:flex-row justify-between  md:px-12 mb-8">
            {/* Farm Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-display font-bold mb-4">
                Versatile growers
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-4">
                Quality farm-fresh produce grown with care in Kajiado County, Kenya.
              </p>
              <p className="text-primary-foreground/70 text-sm">
                <strong className="text-primary-foreground">Owner:</strong> Nereah Joan
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <nav className="space-y-2">
                <a href="#about" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  About Us
                </a>
                <a href="#products" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Products
                </a>
                <a href="#milestones" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Milestones
                </a>
                <a href="#contact" className="block text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {PHONE_NUMBER}
                </a>
                <a
                  href={`https://wa.me/${PHONE_NUMBER.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
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
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-12">
              <p className="text-primary-foreground/60 text-sm">
                © {currentYear} Versatile growers. All rights reserved.
              </p>
              <p className="text-primary-foreground/60 text-sm">
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
