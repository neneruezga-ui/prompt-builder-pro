import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah M.", location: "Mountain View", text: "Prime Pro Painter transformed our home! The attention to detail was incredible and the team was so professional. Highly recommend!" },
  { name: "David L.", location: "Palo Alto", text: "Best painters in the Bay Area. They refinished our kitchen cabinets and they look brand new. Fair pricing and excellent work." },
  { name: "Jennifer K.", location: "Sunnyvale", text: "From the free estimate to the final walk-through, everything was smooth and professional. Our exterior looks amazing!" },
];

const TestimonialsSection = () => {
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
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl p-6 shadow-card"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div>
                <p className="font-heading font-bold text-secondary">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}, CA</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
