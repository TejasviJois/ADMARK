import { motion } from "framer-motion";
import { Code, Layers, Search, Zap, Shield } from "lucide-react";

const specialties = [
  "Custom Website Development",
  "ERP & Business Automation Systems",
  "SaaS Platforms",
  "E-Commerce Development",
  "Booking & Appointment Systems",
  "SEO-Optimized Architecture",
];

const qualities = [
  { icon: Code, label: "100% Custom Built" },
  { icon: Search, label: "SEO-Ready" },
  { icon: Layers, label: "Scalable" },
  { icon: Zap, label: "Conversion-Focused" },
  { icon: Shield, label: "Performance Optimized" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

const AboutSection = () => (
  <section id="about" className="py-10 relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 max-w-3xl text-center space-y-4 mb-6"
    >
      <span className="text-primary font-semibold text-sm tracking-wider uppercase">Who We Are</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Research-First Digital Solutions Agency</h2>
      <p className="text-muted-foreground leading-relaxed">
        AdMark Digitals is a research-first website development and digital solutions agency based in Mysore, Bangalore, and Hyderabad. Unlike typical web design companies, we build{" "}
        <span className="text-foreground font-medium">digital infrastructure</span> — not just websites.
      </p>
    </motion.div>

    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h3 className="text-xl font-semibold mb-6">We Specialize In</h3>
        <div className="space-y-3">
          {specialties.map((s, i) => (
            <motion.div
              key={s}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ x: 8, borderColor: "hsl(var(--primary) / 0.4)" }}
              className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50 cursor-default transition-colors"
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-primary shrink-0"
                whileHover={{ scale: 1.5 }}
              />
              <span className="text-sm font-medium">{s}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6">Every Solution We Create Is</h3>
        <div className="grid grid-cols-2 gap-4">
          {qualities.map((q, i) => (
            <motion.div
              key={q.label}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.3)" }}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-card cursor-default"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <q.icon className="text-primary shrink-0" size={20} />
              </motion.div>
              <span className="text-sm font-medium">{q.label}</span>
            </motion.div>
          ))}
        </div>
        <p className="text-muted-foreground text-sm mt-6 leading-relaxed">
          Our clients trust us for structured execution, transparent communication, and measurable business impact.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
