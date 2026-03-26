import { motion } from "framer-motion";
import { Award, Clock, ShieldCheck, Palette, Sparkles, DollarSign } from "lucide-react";

const reasons = [
  { icon: Award, title: "35+ Years Experience", desc: "Decades of expertise in residential and commercial painting projects." },
  { icon: Sparkles, title: "Premium Materials", desc: "We use only high-quality paints and materials for long-lasting, beautiful finishes." },
  { icon: ShieldCheck, title: "Thorough Prep Work", desc: "Detailed surface preparation ensures superior adhesion and results." },
  { icon: Clock, title: "Clean & No-Mess", desc: "We protect your property and leave every space spotless when we're done." },
  { icon: Palette, title: "Color Consultation", desc: "Expert guidance to help you choose the perfect colors for your home." },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Affordable rates without compromising on quality or craftsmanship." },
];

const WhyChooseUs = () => {
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
            Why Choose <span className="text-accent">Prime Pro Painter?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We go above and beyond to deliver results that exceed your expectations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
