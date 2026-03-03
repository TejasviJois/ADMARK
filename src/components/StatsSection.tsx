import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Delivered" },
  { value: "9+", label: "Industries Served" },
  { value: "100%", label: "Custom Solutions" },
  { value: "★", label: "Client-Centric Execution" },
];

const industries = [
  "Manufacturing", "Infrastructure", "Event & Décor Brands",
  "Beauty & Makeup Studios", "SaaS Startups", "Spiritual & AI Platforms",
];

const StatsSection = () => (
  <section id="stats" className="py-10 border-y border-border overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-default"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              className="text-4xl font-bold text-gradient mb-2"
            >
              {s.value}
            </motion.div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-sm text-muted-foreground mb-4">We&apos;ve worked with</p>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.08, borderColor: "hsl(var(--primary))" }}
              className="px-4 py-2 rounded-full border border-border text-xs font-medium text-secondary-foreground bg-secondary/50 hover:bg-primary/10 transition-colors cursor-default"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default StatsSection;
