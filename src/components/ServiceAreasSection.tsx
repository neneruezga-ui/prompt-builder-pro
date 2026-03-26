import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  "Mountain View",
  "San Jose",
  "Palo Alto",
  "Sunnyvale",
  "Santa Clara",
  "Cupertino",
  "Los Altos",
  "Milpitas",
  "Campbell",
  "Saratoga",
  "Los Gatos",
  "Redwood City",
];

const ServiceAreasSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
            Serving the <span className="text-accent">Bay Area</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proudly serving homeowners and businesses throughout the South Bay and surrounding communities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {areas.map((area, i) => (
            <motion.div
              key={area}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <span className="font-heading font-semibold text-sm text-foreground">{area}, CA</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;
