import { motion } from "framer-motion";

const projects = [
  {
    label: "Interior Painting",
    before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    label: "Exterior Painting",
    before: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    after: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    label: "Cabinet Refinishing",
    before: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    after: "https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=800&q=80",
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
            Our Recent Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See the difference professional painting makes — real before &amp; after results from Bay Area homes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-card">
                    <img
                      src={project.before}
                      alt={`${project.label} before`}
                      loading="lazy"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <p className="text-xs font-heading font-bold text-muted-foreground uppercase tracking-wider text-center">
                    Before
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="overflow-hidden rounded-lg shadow-card">
                    <img
                      src={project.after}
                      alt={`${project.label} after`}
                      loading="lazy"
                      className="w-full h-40 object-cover"
                    />
                  </div>
                  <p className="text-xs font-heading font-bold text-primary uppercase tracking-wider text-center">
                    After
                  </p>
                </div>
              </div>
              <p className="font-heading font-bold text-secondary text-center text-lg">
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
