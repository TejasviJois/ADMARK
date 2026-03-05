import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

const custom = [
  "Fully tailored architecture",
  "Scalable backend systems",
  "Unique UI/UX",
  "SEO-first structure",
  "Long-term growth focused",
];

const prebuilt = [
  "Faster deployment",
  "Budget-friendly",
  "Essential features included",
  "Optimized templates",
];

const ComparisonSection = () => (
  <section className="py-20 sm:py-24 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/[0.06] rounded-full blur-[150px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center space-y-4 mb-10"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Choose Your Path</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Custom vs Pre-Built</h2>
      <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
    </motion.div>

    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -4, boxShadow: "0 0 50px hsl(0 80% 50% / 0.2)" }}
          className="relative p-5 sm:p-8 rounded-2xl border-2 border-primary bg-card shadow-glow cursor-default"
        >
          <motion.span
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-3 left-6 bg-gradient-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full"
          >
            Recommended
          </motion.span>
          <h3 className="text-xl font-bold mb-1">Custom Development</h3>
          <p className="text-xs text-muted-foreground mb-6">For Growing Businesses</p>
          <ul className="space-y-3">
            {custom.map((c, i) => (
              <motion.li
                key={c}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm"
              >
                <motion.span whileHover={{ scale: 1.2 }}>
                  <Check className="text-primary shrink-0" size={16} />
                </motion.span>
                {c}
              </motion.li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-6">
            Best for: Startups, SaaS founders, Manufacturers, Scaling Brands
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 mt-6 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold shadow-glow hover:opacity-90 transition-opacity text-sm"
          >
            Get a Quote <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02, y: -4 }}
          className="p-5 sm:p-8 rounded-2xl border border-border bg-card shadow-card cursor-default"
        >
          <h3 className="text-xl font-bold mb-1">Pre-Built Solutions</h3>
          <p className="text-xs text-muted-foreground mb-6">Accelerated Deployment</p>
          <ul className="space-y-3">
            {prebuilt.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm"
              >
                <Check className="text-muted-foreground shrink-0" size={16} />
                {p}
              </motion.li>
            ))}
          </ul>
          <p className="text-xs text-muted-foreground mt-6">
            Best for: Early-stage businesses needing quick digital presence
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 text-center mt-8"
      >
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold shadow-glow hover:opacity-90 transition-opacity text-sm sm:text-base"
        >
          View Our Projects & Testimonials <ArrowRight size={18} />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
