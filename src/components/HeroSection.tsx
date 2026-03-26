import { motion } from "framer-motion";
import { Phone, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";
import heroImage from "@/assets/hero-painting.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional house painting in the Bay Area" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="relative container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-heading font-bold text-sm uppercase tracking-wider">
                Licensed Contractor #808454
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-secondary-foreground leading-tight mb-4">
              Bay Area's Trusted
              <br />
              <span className="text-primary">Painting Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/80 mb-6 max-w-lg">
              35+ years of transforming homes with premium finishes. Clean workmanship, lasting results, and free in-home estimates.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="#free-estimate">Get Free Estimate</a>
              </Button>
              <a href="tel:6509103998" className="flex items-center gap-2 text-secondary-foreground font-heading font-bold text-lg hover:text-primary transition-colors">
                <Phone className="w-5 h-5" />
                (650) 910-3998
              </a>
            </div>
            <div className="flex items-center gap-1 text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-secondary-foreground/80 text-sm font-body">Trusted by hundreds of Bay Area homeowners</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="bg-background rounded-xl overflow-hidden shadow-elevated">
              <div className="bg-secondary text-secondary-foreground px-6 py-3 text-center">
                <p className="font-heading font-bold text-lg">Get Your FREE Estimate Today</p>
                <p className="text-sm text-secondary-foreground/80">No obligation • Quick response</p>
              </div>
              <LeadForm id="free-estimate" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
