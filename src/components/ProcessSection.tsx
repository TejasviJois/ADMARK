import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your business, audience, and objectives." },
  { num: "02", title: "Research", desc: "Market study, competitor analysis, SEO mapping." },
  { num: "03", title: "Strategy & Wireframing", desc: "Information architecture + UX flow design." },
  { num: "04", title: "Development", desc: "Clean, scalable, performance-optimized coding." },
  { num: "05", title: "Testing", desc: "Cross-device testing, speed audits, bug fixes." },
  { num: "06", title: "Launch & Scale", desc: "Deployment + analytics + performance monitoring." },
];

const ProcessSection = () => (
  <section id="process" className="py-10 relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center space-y-4 mb-6"
    >
      <span className="text-primary font-semibold text-sm tracking-wider uppercase">How We Work</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Our Strategic Process</h2>
    </motion.div>

    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03, y: -5, boxShadow: "0 20px 40px -15px rgba(0,0,0,0.4), 0 0 30px -5px hsl(0 80% 50% / 0.15)" }}
            className="relative p-6 rounded-2xl bg-card border border-border shadow-card cursor-default overflow-hidden group"
          >
            <motion.span
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 0.15 }}
              className="text-6xl font-bold text-primary absolute top-2 right-4 select-none"
            >
              {s.num}
            </motion.span>
            <div className="relative z-10">
              <motion.h3
                className="font-semibold text-lg mb-2"
                whileHover={{ x: 4 }}
              >
                {s.title}
              </motion.h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
