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
  <section className="py-10 border-t border-border relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center space-y-4 mb-6"
    >
      <span className="text-primary font-semibold text-sm tracking-wider uppercase">Why Us</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Features That Set Us Apart</h2>
    </motion.div>

    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.08, y: -6, rotate: 2 }}
            className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border text-center cursor-default group"
          >
            <motion.div
              whileHover={{ scale: 1.2, rotate: 10 }}
              className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
            >
              <f.icon className="text-primary" size={24} />
            </motion.div>
            <span className="text-xs font-medium leading-tight group-hover:text-primary transition-colors">{f.label}</span>
          </motion.div>
        ))}
      </div>
    </div>

    {/* News-style ticker */}
    <div className="mt-8 border-y border-border bg-card/30 overflow-hidden">
      <div className="flex w-max animate-ticker py-4">
        {[...tickerLines, ...tickerLines].map((line, i) => (
          <div key={i} className="flex items-center shrink-0 px-8">
            <span className="text-sm sm:text-base font-medium text-muted-foreground whitespace-nowrap">{line}</span>
            <span className="mx-4 text-primary/40" aria-hidden>◆</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
