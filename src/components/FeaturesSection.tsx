import { motion } from "framer-motion";
import { Code, Zap, Smartphone, Shield, Cloud, Target, Search, MessageCircle } from "lucide-react";

const features = [
  { icon: Code, label: "SEO-Optimized Code Structure" },
  { icon: Zap, label: "Lightning Fast Performance" },
  { icon: Smartphone, label: "100% Responsive Layouts" },
  { icon: Shield, label: "Secure Backend Architecture" },
  { icon: Cloud, label: "Scalable Cloud-Ready Infrastructure" },
  { icon: Target, label: "Conversion-Focused UI Design" },
  { icon: Search, label: "Research-Based Strategy" },
  { icon: MessageCircle, label: "Transparent Communication" },
];

const tickerLines = [
  "Develop it once. Scale it forever.",
  "Engineer it with precision. Launch it with confidence.",
  "Built for today. Structured for tomorrow.",
  "Design with purpose. Code with performance.",
  "Start strong. Grow unstoppable.",
  "From idea to infrastructure — done right the first time.",
  "Not just developed. Strategically architected.",
  "Crafted to impress. Engineered to convert.",
];

const FeaturesSection = () => (
  <section className="py-20 sm:py-24 relative overflow-hidden">
    <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center space-y-4 mb-10"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Why Us</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Features That Set Us Apart</h2>
      <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
    </motion.div>

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -4 }}
            className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-card border border-border text-center cursor-default group"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            >
              <f.icon className="text-primary" size={20} />
            </motion.div>
            <span className="text-[10px] sm:text-xs font-medium leading-tight group-hover:text-primary transition-colors">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* News-style ticker */}
    <div className="mt-8 border-y border-border bg-card/60 overflow-hidden">
      <div className="flex w-max animate-ticker py-4">
        {[...tickerLines, ...tickerLines].map((line, i) => (
          <div key={i} className="flex items-center shrink-0 px-4 sm:px-8">
            <span className="text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap">{line}</span>
            <span className="mx-4 text-primary/40" aria-hidden>◆</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
