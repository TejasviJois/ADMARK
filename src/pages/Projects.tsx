import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
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
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-20">
        <header className="container mx-auto px-4 mb-16">
          <p className="text-primary font-semibold text-xs uppercase tracking-[0.25em] mb-4">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground max-w-3xl">
            Work & <span className="text-gradient">testimonials</span>
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl">
            Strategic builds and the voices behind them.
          </p>
        </header>

        <section className="container mx-auto px-4 max-w-4xl space-y-8 mb-20">
          <article className="rounded-2xl border border-border bg-card p-8 sm:p-12 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/90 mb-4">Featured project</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">Dronark Aerospace</h2>
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
          </article>

          <article className="rounded-2xl border border-border bg-card p-8 sm:p-12 transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary/90 mb-4">Featured technology partner</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-2">Kavach.World</h2>
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
          </article>
        </section>

        {/* Three corporate pillars */}
        <section className="container mx-auto px-4 max-w-5xl mb-16">
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-card/80 p-6 text-center transition-all duration-300 ease-out hover:border-primary/25 hover:-translate-y-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/90 mb-2">Strategic</p>
              <p className="text-sm text-muted-foreground">Data-driven decisions and clear roadmaps for every engagement.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-6 text-center transition-all duration-300 ease-out hover:border-primary/25 hover:-translate-y-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/90 mb-2">Reliable</p>
              <p className="text-sm text-muted-foreground">On-time delivery and consistent quality across projects.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-6 text-center transition-all duration-300 ease-out hover:border-primary/25 hover:-translate-y-0.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary/90 mb-2">Results-driven</p>
              <p className="text-sm text-muted-foreground">Focused on outcomes that grow your business and brand.</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-4xl mb-8">
          <div className="h-px bg-border" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mt-6">Client testimonials</p>
        </div>

        <section className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <a
                key={t.url}
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 rounded-xl border border-border bg-card text-foreground transition-all duration-300 ease-out hover:border-primary/25 hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-foreground mb-1.5">
                  {t.name}
                  {t.location && <span className="text-muted-foreground font-normal"> — {t.location}</span>}
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  View project <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>
        </section>

        <TrustWeOverDeliverSection />

        <section className="container mx-auto px-4 mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to home
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
