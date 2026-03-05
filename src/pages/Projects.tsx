import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustWeOverDeliverSection from "@/components/TrustWeOverDeliverSection";

const testimonials = [
  { name: "Vivid Infrastructures", location: "Mysore", url: "https://www.vividinfrastructures.com/", quote: "Everything was perfect from the first design. The website looks great and the team's follow-up was excellent. We couldn't be happier with the results." },
  { name: "Naidile", url: "https://www.naidile.com", quote: "Professional execution with a strong understanding of our brand vision. Clean, modern, and delivered on time." },
  { name: "Nandini Decor", url: "https://www.nandinidecor.com", quote: "The design reflects our creativity beautifully. Smooth communication and a very refined outcome." },
  { name: "DEE Events", url: "https://www.deeevents.in", quote: "A vibrant and well-structured website that showcases our events perfectly. The team understood our requirements clearly." },
  { name: "Shree Samrajya Lakshmi Foundation", url: "https://www.shreesamrajyalakshmifoundation.org/", quote: "Elegant layout, easy navigation, and a strong representation of our mission." },
  { name: "Brookwell Industries", url: "https://brookwellindustries.in/", quote: "A strong corporate presence online. Structured, professional, and performance-driven." },
  { name: "Rama AI", url: "https://www.ramaai.in", quote: "Modern, tech-focused design that aligns perfectly with our AI positioning." },
];

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 sm:pt-28 pb-12 sm:pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-600/[0.06] rounded-full blur-[150px] pointer-events-none" />
        <header className="container relative z-10 mx-auto px-4 text-center">
            <p className="text-primary font-semibold text-xs uppercase tracking-[0.25em] mb-3 sm:mb-4">Portfolio</p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto">
              Work & <span className="text-gradient">testimonials</span>
            </h1>
            <p className="mt-3 sm:mt-4 text-neutral-400 text-base sm:text-lg max-w-xl mx-auto">
              Strategic builds and the voices behind them.
            </p>
          </header>
        </main>

      <main className="pt-8 sm:pt-12 pb-12 sm:pb-20">
        <section className="container mx-auto px-4 max-w-4xl space-y-6 sm:space-y-8 mb-12 sm:mb-20">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl sm:rounded-2xl border border-border bg-card p-5 sm:p-8 md:p-12 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/90 mb-3 sm:mb-4">Featured project</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Dronark Aerospace</h2>
            <a href="https://www.dronarkaerospace.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              dronarkaerospace.com <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl mb-6">
              Not just a client. A founder-led decision. Dronark Aerospace, founded by Drone Prathap (Bigg Boss Kannada), represents ambition, aerospace innovation, and public influence. When a public figure and technology entrepreneur chooses your team — it&apos;s about trust.
            </p>
            <blockquote className="border-l-2 border-primary pl-5 py-1 mb-6 text-foreground/95 text-[15px] leading-relaxed italic">
              &ldquo;We needed a platform that reflects innovation and authority. The execution was strategic, sharp, and aligned with our vision.&rdquo;
            </blockquote>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Positioning & brand authority", "Visibility and scale", "Confident execution"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/80" /> {item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-foreground/90">Top founders don&apos;t hire agencies. They partner with conviction.</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl sm:rounded-2xl border border-border bg-card p-5 sm:p-8 md:p-12 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/90 mb-3 sm:mb-4">Featured technology partner</p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">Kavach.World</h2>
            <a href="https://www.kavach.world/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              kavach.world <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-2xl mb-6">
              A software solutions platform demands structure, precision, and technical credibility. Kavach.World trusted us to translate software capability into digital authority.
            </p>
            <blockquote className="border-l-2 border-primary pl-5 py-1 mb-6 text-foreground/95 text-[15px] leading-relaxed italic">
              &ldquo;Clear, scalable, and strategically built. The platform reflects technical strength and long-term vision.&rdquo;
            </blockquote>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {["Simplify complex offerings", "Enterprise trust", "Scalability", "Brand and growth alignment"].map((item) => (
                <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/80" /> {item}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-medium text-foreground/90">Strategic software positioning.</p>
          </motion.article>
        </section>

        {/* Three corporate pillars */}
        <section className="container mx-auto px-4 max-w-5xl mb-16">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Strategic", desc: "Data-driven decisions and clear roadmaps for every engagement." },
              { label: "Reliable", desc: "On-time delivery and consistent quality across projects." },
              { label: "Results-driven", desc: "Focused on outcomes that grow your business and brand." },
            ].map((pillar, i) => (
              <motion.div
                key={pillar.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-xl border border-border bg-card p-6 text-center transition-all duration-300 ease-out hover:border-primary/25 shadow-card"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/90 mb-2">{pillar.label}</p>
                <p className="text-sm text-muted-foreground">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mb-8">
          <div className="h-px bg-border" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mt-6">Client testimonials</p>
        </div>

        <section className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((t, i) => (
              <motion.a
                key={t.url}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className="block p-6 rounded-xl border border-border bg-card text-foreground transition-all duration-300 ease-out hover:border-primary/25 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-foreground mb-1.5">
                  {t.name}
                  {t.location && <span className="text-muted-foreground font-normal"> — {t.location}</span>}
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  View project <ExternalLink className="w-3 h-3" />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        <TrustWeOverDeliverSection />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
