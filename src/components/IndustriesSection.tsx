import { motion } from "framer-motion";
import { Factory, Building, Scissors, Rocket, Sparkles, PartyPopper, Store, Truck, Plane } from "lucide-react";

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Building, label: "Infrastructure" },
  { icon: Scissors, label: "Beauty & Salon Brands" },
  { icon: Rocket, label: "SaaS Startups" },
  { icon: Sparkles, label: "Spiritual & Wellness" },
  { icon: PartyPopper, label: "Event & Hospitality" },
  { icon: Store, label: "MSMEs & Enterprises" },
  { icon: Truck, label: "Logistics" },
  { icon: Plane, label: "Drones & Aerospace Equipment Manufacturing" },
];

const IndustriesSection = () => (
  <section className="py-20 sm:py-24 section-alt relative overflow-hidden">
    <div className="absolute top-1/2 right-0 w-80 h-80 bg-red-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center space-y-4 mb-10"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Industries</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Industries We Serve</h2>
      <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
    </motion.div>

    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 max-w-3xl mx-auto">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ scale: 1.1, y: -4, borderColor: "hsl(var(--primary))", boxShadow: "0 10px 30px -10px hsl(0 80% 50% / 0.3)" }}
            className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl bg-card border border-border cursor-default group"
          >
            <motion.div whileHover={{ rotate: 15, scale: 1.2 }}>
              <ind.icon className="text-primary" size={16} />
            </motion.div>
            <span className="text-xs sm:text-sm font-medium group-hover:text-primary transition-colors">{ind.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
