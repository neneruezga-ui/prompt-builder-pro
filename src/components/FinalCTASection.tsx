import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import LeadForm from "./LeadForm";

const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-4">
              Ready to Transform Your Home?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-6">
              Get your free, no-obligation estimate today. Our team is ready to bring your vision to life with expert craftsmanship and premium materials.
            </p>
            <a
              href="tel:6509103998"
              className="inline-flex items-center gap-2 text-accent font-heading font-bold text-xl hover:text-accent/80 transition-colors"
            >
              <Phone className="w-6 h-6" />
              (650) 910-3998
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
