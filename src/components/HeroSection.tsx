import { motion } from "framer-motion";
import { Phone, Star, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";
import heroImage from "@/assets/hero-painting.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Professional house painting in the Bay Area" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative container py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-accent font-heading font-bold text-sm uppercase tracking-wider">
                Licensed Contractor #808454
              </span>
            </div>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4">
              Bay Area's Trusted
              <br />
              <span className="text-accent">Painting Experts</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-6 max-w-lg">
              35+ years of transforming homes with premium finishes. Clean workmanship, lasting results, and free in-home estimates.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-lg px-8">
                <a href="#free-estimate">Get Free Estimate</a>
              </Button>
              <a href="tel:6509103998" className="flex items-center gap-2 text-primary-foreground font-heading font-bold text-lg hover:text-accent transition-colors">
                <Phone className="w-5 h-5" />
                (650) 910-3998
              </a>
            </div>
            <div className="flex items-center gap-1 text-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-primary-foreground/80 text-sm font-body">Trusted by hundreds of Bay Area homeowners</span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
            <div className="bg-background/95 backdrop-blur rounded-xl p-1">
              <div className="bg-primary text-primary-foreground rounded-t-lg px-6 py-3 text-center">
                <p className="font-heading font-bold text-lg">Get Your FREE Estimate Today</p>
                <p className="text-sm text-primary-foreground/80">No obligation • Quick response</p>
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
