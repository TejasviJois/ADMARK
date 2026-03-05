import { motion } from "framer-motion";
import ceoImg from "@/assets/ceo TEAM MEMBERS.jpeg";
import ctoImg from "@/assets/cto TEAM MEMBERS.png";

const team = [
  { name: "Tejasvi Jois", role: "Founder & CEO", bio: "Vision-driven strategist focused on scalable digital ecosystems.", image: ceoImg, pos: "object-top" as const },
  { name: "Harshith V. Malipatil", role: "Co-founder & CTO", bio: "Technology architect specializing in robust backend systems and performance engineering.", image: ctoImg, pos: "object-top" as const },
];

const TeamSection = () => (
  <section id="about" className="py-20 sm:py-24 section-alt relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-red-500/[0.04] rounded-full blur-[120px] pointer-events-none" />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container relative z-10 mx-auto px-4 max-w-3xl text-center space-y-4 mb-14"
    >
      <span className="text-primary font-semibold text-xs tracking-[0.2em] uppercase">Who We Are</span>
      <h2 className="text-3xl sm:text-4xl font-bold">Research-First Digital Solutions Agency</h2>
      <div className="mx-auto w-12 h-1 rounded-full bg-gradient-to-r from-primary/80 to-primary/20" />
      <p className="text-muted-foreground leading-relaxed">
        AdMark Digitals, <span className="text-primary font-bold bg-primary/10 px-1.5 py-0.5 rounded">founded in 2024</span>, is a research-first website development and digital solutions agency based in Mysore, Bangalore, and Hyderabad. Unlike typical web design companies, we build{" "}
        <span className="text-foreground font-medium">digital infrastructure</span> — not just websites.
      </p>
    </motion.div>

    <div className="container relative z-10 mx-auto px-4">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-primary font-semibold text-xs tracking-[0.2em] uppercase mb-8"
      >
        The People Behind AdMark
      </motion.p>

      <div className="grid grid-cols-2 gap-4 sm:gap-8 max-w-3xl mx-auto">
        {team.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border shadow-card text-center cursor-default relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-secondary mx-auto mb-3 sm:mb-4 overflow-hidden ring-4 ring-transparent group-hover:ring-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={p.image} alt={p.name} className={`w-full h-full object-cover ${p.pos}`} />
            </motion.div>
            <h3 className="font-bold text-sm sm:text-lg group-hover:text-primary transition-colors">{p.name}</h3>
            <p className="text-primary text-xs sm:text-sm font-medium mb-1 sm:mb-2">{p.role}</p>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{p.bio}</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mt-6 max-w-lg mx-auto"
      >
        Our team combines technical precision with strategic thinking to build digital products that perform.
      </motion.p>
    </div>
  </section>
);

export default TeamSection;
