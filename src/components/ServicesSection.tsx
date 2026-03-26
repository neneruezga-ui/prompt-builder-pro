import { motion } from "framer-motion";
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

const ServicesSection = () => {
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
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From interior walls to exterior wood — we handle every painting project with precision and care.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
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
                <h3 className="font-heading font-bold text-lg text-foreground mb-1">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
