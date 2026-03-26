import { Phone, Mail } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-secondary py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-1 mb-2">
              <span className="font-heading font-extrabold text-xl text-secondary-foreground">Prime Pro</span>
              <span className="font-heading font-extrabold text-xl text-primary">Painter</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm">Licensed Contractor #808454 • Serving the Bay Area</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a href="tel:6509103998" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
              <Phone className="w-4 h-4" /> (650) 910-3998
            </a>
            <a href="mailto:info@primepropainter.com" className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
              <Mail className="w-4 h-4" /> info@primepropainter.com
            </a>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-secondary-foreground/10 text-center">
          <p className="text-secondary-foreground/40 text-xs">© {new Date().getFullYear()} Prime Pro Painter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
