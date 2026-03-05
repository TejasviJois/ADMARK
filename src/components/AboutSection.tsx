import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="py-20 sm:py-24 relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 max-w-3xl text-center space-y-4"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Who We Are</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Research-First Digital Solutions Agency</h2>
      <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
      <p className="text-muted-foreground leading-relaxed">
        AdMark Digitals, <span className="text-primary font-bold bg-primary/10 px-1.5 py-0.5 rounded">founded in 2024</span>, is a research-first website development and digital solutions agency based in Mysore, Bangalore, and Hyderabad. Unlike typical web design companies, we build{" "}
        <span className="text-foreground font-medium">digital infrastructure</span> — not just websites.
      </p>
    </motion.div>
  </section>
);

export default AboutSection;
