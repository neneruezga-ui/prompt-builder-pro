import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "How do I get a free estimate?",
    a: "Simply fill out the form on this page or call us at (650) 910-3998. We'll schedule a convenient time to visit your home, assess the project, and provide a detailed, no-obligation estimate.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Mountain View, San Jose, Palo Alto, Sunnyvale, Santa Clara, and surrounding Bay Area cities. Contact us to confirm service in your area.",
  },
  {
    q: "How long does a typical painting project take?",
    a: "Most interior projects take 2–5 days, while exterior projects may take 3–7 days depending on the size and scope. We'll provide a clear timeline with your estimate.",
  },
  {
    q: "What kind of paint do you use?",
    a: "We use premium, high-quality paints from trusted brands like Benjamin Moore and Sherwin-Williams. We select the best products for each surface and environment.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We are a fully licensed painting contractor (License #808454) with comprehensive insurance coverage for your peace of mind.",
  },
  {
    q: "Do you offer color consultation?",
    a: "Absolutely! We offer expert color consultation to help you choose the perfect palette for your home. We bring sample colors and can advise on current trends and timeless choices.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-24 bg-section-alt">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-lg border border-border px-5">
              <AccordionTrigger className="font-heading font-semibold text-foreground text-left hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
