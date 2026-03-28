import { motion } from "framer-motion";

const projects = [
  {
    label: "Interior Painting",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    label: "Exterior Painting",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    label: "Cabinet Refinishing",
    img: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
  },
  {
    label: "Interior Remodel",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    label: "Exterior Refresh",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7a5a0c?w=800&q=80",
  },
  {
    label: "Kitchen Cabinets",
    img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
  },
];

const ProjectGallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-secondary mb-3">
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every job finished clean, on time, and exactly as quoted.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.label + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl shadow-card">
                <img
                  src={project.img}
                  alt={project.label}
                  loading="lazy"
                  className="w-full h-40 md:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="font-heading font-bold text-secondary text-sm md:text-base text-center mt-3">
                {project.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallerySection;
