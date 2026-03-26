import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Mountain View, CA",
    text: "Prime Pro Painter did an incredible job on our entire home interior. The attention to detail was amazing, and they left our house spotless. Highly recommend!",
  },
  {
    name: "David L.",
    location: "Palo Alto, CA",
    text: "We hired them for exterior painting and couldn't be happier. Professional crew, great communication, and the finished result looks stunning.",
  },
  {
    name: "Jennifer K.",
    location: "Sunnyvale, CA",
    text: "They refinished our kitchen cabinets and it looks like a brand new kitchen! The color consultation was extremely helpful. Worth every penny.",
  },
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
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
            What Our <span className="text-primary">Customers Say</span>
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
              <Quote className="w-8 h-8 text-accent/30 mb-3" />
              <p className="text-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>
              <p className="font-heading font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
