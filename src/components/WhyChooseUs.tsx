import { motion } from "framer-motion";
import { Clock, DollarSign, Paintbrush, ShieldCheck, Palette, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Clock, title: "35+ Years Experience", desc: "Decades of residential and commercial painting expertise you can count on." },
  { icon: Paintbrush, title: "Premium Materials", desc: "We use top-quality paints from Benjamin Moore and Sherwin-Williams." },
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully licensed (Contractor #808454) with comprehensive insurance coverage." },
  { icon: ThumbsUp, title: "Clean Workmanship", desc: "No-mess process — we protect your home and leave it spotless." },
  { icon: Palette, title: "Color Consultation", desc: "Free expert guidance to help you choose the perfect palette." },
  { icon: DollarSign, title: "Free Estimates", desc: "No-obligation in-home consultations with competitive, transparent pricing." },
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
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-secondary mb-3">
            Why Choose Prime Pro Painter?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We combine decades of experience with premium materials and meticulous attention to detail.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-secondary mb-1">{reason.title}</h3>
                <p className="text-muted-foreground text-sm">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
