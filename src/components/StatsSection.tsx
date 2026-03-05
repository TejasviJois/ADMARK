import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "9+", label: "Industries Served" },
  { value: "100%", label: "Custom Solutions" },
];

const StatsSection = () => (
  <section id="stats" className="py-16 sm:py-20 section-alt overflow-hidden relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
    <div className="container relative z-10 mx-auto px-4">
      <div className="grid grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="text-center p-3 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-300 cursor-default"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, type: "spring", stiffness: 200 }}
              className="text-2xl sm:text-4xl font-bold text-gradient mb-1 sm:mb-2"
            >
              {s.value}
            </motion.div>
            <div className="text-[10px] sm:text-sm text-muted-foreground leading-tight">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
