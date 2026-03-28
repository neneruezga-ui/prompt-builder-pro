import { motion } from "framer-motion";
import { Phone, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import LeadForm from "./LeadForm";
import heroImg from "@/assets/hero-painting.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-16 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image with dark navy overlay */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional house painting" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="container relative z-10 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
                Licensed Contractor #808454
              </span>
            </div>

            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4">
              Bay Area's Trusted <span className="text-primary">Painting Experts</span>
            </h1>

            <p className="text-white/80 text-lg md:text-xl mb-6 max-w-lg">
              35+ years of expert craftsmanship. Premium materials. Flawless results. Get your free in-home estimate today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button size="lg" asChild>
                <a href="#free-estimate" className="text-base font-bold">
                  Get Free Estimate
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white text-white bg-white/10 hover:bg-white/20">
                <a href="tel:6509103998" className="text-base font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  (650) 910-3998
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-white/70 text-sm">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span>Trusted by hundreds of Bay Area homeowners</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
