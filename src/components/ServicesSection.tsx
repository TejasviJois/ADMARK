import { motion } from "framer-motion";
import { Globe, Cloud, Settings, ShoppingCart, CalendarCheck, RefreshCw, Smartphone, FileText, FolderKanban } from "lucide-react";

const serviceCategories = [
  {
    title: "Web & product development",
    services: [
      { icon: Globe, title: "Custom Website Development", desc: "Modern, fast, scalable websites built using robust technology stacks with SEO-friendly architecture." },
      { icon: Cloud, title: "SaaS Product Development", desc: "End-to-end SaaS platforms with authentication, dashboards, role-based access, and payment integration." },
      { icon: ShoppingCart, title: "E-Commerce Development", desc: "High-converting online stores with payment gateways, inventory management, and CRO-optimized design." },
      { icon: CalendarCheck, title: "Booking & Appointment Systems", desc: "Automated scheduling platforms for salons, hospitals, consultants, and service businesses." },
      { icon: RefreshCw, title: "Website Redesign & Revamp", desc: "Transform outdated websites into modern, responsive, conversion-focused platforms." },
    ],
  },
  {
    title: "Project & research",
    services: [
      { icon: FolderKanban, title: "Project Development", desc: "End-to-end project design, implementation, and delivery with clear milestones and documentation." },
      { icon: FileText, title: "Research Paper Development with Project Proof", desc: "Academic and technical research papers supported by working project proof and implementation evidence." },
    ],
  },
  {
    title: "Mobile",
    services: [
      { icon: Smartphone, title: "Mobile Application Development", desc: "Native and cross-platform mobile apps for iOS and Android, from MVP to full-scale product." },
    ],
  },
  {
    title: "Business systems",
    services: [
      { icon: Settings, title: "ERP & Business Automation", desc: "Custom ERP systems to streamline operations, inventory, HR, finance, and internal workflows." },
    ],
  },
];

const ServicesSection = () => (
  <section id="services" className="py-20 sm:py-24 relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 text-center space-y-4 mb-10"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">What We Do</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Our Core Services</h2>
      <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
    </motion.div>

    <div className="container mx-auto px-4 space-y-10">
      {serviceCategories.map((cat, catIndex) => (
        <motion.div
          key={cat.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary border-b border-border pb-2">
            {cat.title}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border shadow-card cursor-default relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:shadow-glow transition-all duration-300"
                  >
                    <s.icon className="text-primary" size={22} />
                  </motion.div>
                  <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{s.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ServicesSection;
