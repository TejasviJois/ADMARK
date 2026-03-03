import { motion } from "framer-motion";
import ceoImg from "@/assets/ceo TEAM MEMBERS.jpeg";
import ctoImg from "@/assets/cto TEAM MEMBERS.png";

const team = [
  { name: "Harshith V. Malipatil", role: "Founder & CEO", bio: "Vision-driven strategist focused on scalable digital ecosystems.", image: ceoImg, pos: "object-top" as const },
  { name: "Tejasvi Jois", role: "Co-founder & CTO", bio: "Technology architect specializing in robust backend systems and performance engineering.", image: ctoImg, pos: "object-top" as const },
];

const TeamSection = () => (
  <section id="team" className="py-10 relative overflow-hidden">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 text-center space-y-4 mb-6"
    >
      <span className="text-primary font-semibold text-sm tracking-wider uppercase">Our Team</span>
      <h2 className="text-3xl sm:text-4xl font-bold">The Team Behind AdMark Digitals</h2>
    </motion.div>

    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {team.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="group p-6 rounded-2xl bg-card border border-border shadow-card text-center cursor-default relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <motion.div
              className="w-24 h-24 rounded-full bg-secondary mx-auto mb-4 overflow-hidden ring-4 ring-transparent group-hover:ring-primary/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={p.image} alt={p.name} className={`w-full h-full object-cover ${p.pos}`} />
            </motion.div>
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{p.name}</h3>
            <p className="text-primary text-sm font-medium mb-2">{p.role}</p>
            <p className="text-xs text-muted-foreground">{p.bio}</p>
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
