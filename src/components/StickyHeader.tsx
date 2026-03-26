import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-1">
          <span className="font-heading font-extrabold text-xl text-secondary">Prime Pro</span>
          <span className="font-heading font-extrabold text-xl text-primary">Painter</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="tel:6509103998" className="hidden sm:flex items-center gap-2 font-heading font-bold text-primary">
            <Phone className="w-4 h-4" />
            (650) 910-3998
          </a>
          <Button asChild>
            <a href="#free-estimate">Free Estimate</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
