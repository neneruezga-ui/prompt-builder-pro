import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import interiorImg from "@/assets/interior-painting.jpg";
import exteriorImg from "@/assets/exterior-painting.jpg";
import cabinetImg from "@/assets/cabinet-painting.jpg";
import sidingImg from "@/assets/siding-painting.jpg";
import woodImg from "@/assets/wood-staining.jpg";
import doorImg from "@/assets/door-painting.jpg";

const services = [
  { title: "Interior Painting", desc: "Transform your living spaces with flawless walls, ceilings, and trim work.", img: interiorImg },
  { title: "Exterior Painting", desc: "Boost your curb appeal with durable, weather-resistant exterior finishes.", img: exteriorImg },
  { title: "Cabinet Refinishing", desc: "Give your kitchen a fresh look without the cost of a full remodel.", img: cabinetImg },
  { title: "Siding Painting", desc: "Protect and beautify your home's siding with professional-grade coatings.", img: sidingImg },
  { title: "Wood Staining", desc: "Enhance the natural beauty of decks, fences, and wood surfaces.", img: woodImg },
  { title: "Door Painting", desc: "Make a stunning first impression with expertly finished entry and garage doors.", img: doorImg },
];

const ServiceCard = ({ service, i }: { service: typeof services[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: i * 0.1 }}
    className="group bg-background rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow"
  >
    <div className="overflow-hidden h-48">
      <img
        src={service.img}
        alt={service.title}
        loading="lazy"
        width={800}
        height={600}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-5">
      <h3 className="font-heading font-bold text-lg text-secondary mb-1">{service.title}</h3>
      <p className="text-muted-foreground text-sm">{service.desc}</p>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-secondary mb-3">
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From interior walls to exterior wood — we handle every painting project with precision and care.
          </p>
        </motion.div>

        {/* Desktop: always show all 6 in 3-col grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} i={i} />
          ))}
        </div>

        {/* Mobile: single column, show 3 by default */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-6">
            {services.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} service={service} i={i} />
            ))}
          </div>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-6 mt-6">
                  {services.slice(3).map((service, i) => (
                    <ServiceCard key={service.title} service={service} i={i} />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!expanded && (
            <div className="text-center mt-8">
              <button
                onClick={() => setExpanded(true)}
                className="inline-flex items-center gap-2 font-heading font-bold text-primary hover:text-primary/80 transition-colors"
              >
                See All Services
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
