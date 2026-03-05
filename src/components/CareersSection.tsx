import { motion } from "framer-motion";
import { Briefcase, ArrowRight, TrendingUp, Code, Palette } from "lucide-react";

const internships = [
  {
    title: "Business Development Intern",
    tag: "With commission",
    desc: "Drive growth and partnerships. Earn while you learn through performance-based commission.",
    icon: TrendingUp,
  },
  {
    title: "Web Application Developer Intern",
    tag: null,
    desc: "Build real products. Work on live projects with modern stacks and best practices.",
    icon: Code,
  },
  {
    title: "UI/UX Intern",
    tag: null,
    desc: "Shape user experiences. From research and wireframes to high-fidelity design and handoff.",
    icon: Palette,
  },
  {
    title: "Digital Marketing Intern",
    tag: null,
    desc: "Learn SEO, content, and campaigns. Support real client and brand initiatives.",
    icon: Briefcase,
  },
];

const CareersSection = () => (
  <section id="careers" className="py-20 sm:py-24 section-alt relative overflow-hidden">
    <div className="absolute top-0 left-0 w-80 h-80 bg-red-600/[0.04] rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/[0.03] rounded-full blur-[100px] pointer-events-none" />
    <div className="container relative z-10 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center space-y-4 mb-10"
      >
        <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Careers</span>
        <h2 className="text-3xl sm:text-4xl font-bold">Internships at AdMark</h2>
        <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
        <p className="text-muted-foreground max-w-xl mx-auto">
          Join us to learn, build, and grow. Apply below and we&apos;ll get in touch.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {internships.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border shadow-card hover:border-primary/30 hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <role.icon className="text-primary" size={20} />
              </div>
              {role.tag && (
                <span className="text-[10px] font-semibold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                  {role.tag}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
              {role.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">{role.desc}</p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Apply now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-8"
      >
        Mention the role you&apos;re applying for when you reach out via the contact form below.
      </motion.p>
    </div>
  </section>
);

export default CareersSection;
