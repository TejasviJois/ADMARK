import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Do you provide website development in Mysore, Bangalore, and Hyderabad?", a: "Yes. We are based in Mysore with operational presence in Bangalore and Hyderabad, serving clients across India and globally." },
  { q: "Do you build custom ERP systems?", a: "Yes. We design and develop fully customized ERP systems tailored to your business operations." },
  { q: "How long does it take to build a website?", a: "Basic websites: 2–3 weeks. Custom platforms: 4–8 weeks depending on scope." },
  { q: "Do you provide ongoing support?", a: "Yes. We offer maintenance, security updates, performance monitoring, and priority support." },
  { q: "Is SEO included in website development?", a: "Yes. Every website we build is SEO-ready with technical optimization included." },
];

const FAQSection = () => (
  <section className="py-20 sm:py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-red-600/[0.04] rounded-full blur-[130px] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 max-w-3xl text-center space-y-4 mb-10"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">FAQs</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
      <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
    </motion.div>

    <div className="container mx-auto px-4 max-w-3xl">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <AccordionItem
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-card px-6 shadow-card hover:border-primary/30 transition-colors duration-300"
            >
              <AccordionTrigger className="text-sm font-medium text-left hover:no-underline hover:text-primary transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
