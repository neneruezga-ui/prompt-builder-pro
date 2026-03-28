import { motion } from "framer-motion";

const projects = [
  {
    label: "Interior Painting",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
  },
  {
    label: "Exterior Painting",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
  },
  {
    label: "Cabinet Refinishing",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    label: "Interior Remodel",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
  },
  {
    label: "Exterior Refresh",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    label: "Kitchen Cabinets",
    image: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
  },
];

const ProjectGallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-secondary mb-3">
            Our Work
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Every job finished clean, on time, and exactly as quoted.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-white text-center">
                <p className="font-heading font-semibold text-secondary text-sm">{project.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
