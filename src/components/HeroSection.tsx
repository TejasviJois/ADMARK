import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ArrowUpRight } from "lucide-react";

const ROTATING_LINES = [
  "websites that convert",
  "SaaS that scales",
  "digital foundations",
  "growth engines",
];

const HeroSection = () => {
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setLineIndex((i) => (i + 1) % ROTATING_LINES.length), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Vibrant ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% 40%, rgba(220,38,38,0.10), transparent 70%),
              radial-gradient(ellipse 50% 50% at 10% 30%, rgba(185,28,28,0.07), transparent 60%),
              radial-gradient(ellipse 50% 50% at 90% 60%, rgba(185,28,28,0.07), transparent 60%),
              radial-gradient(ellipse 30% 40% at 70% 20%, rgba(239,68,68,0.04), transparent 50%)
            `,
          }}
        />
      </div>

      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")" }} />

      <div className="container relative z-10 mx-auto px-4">
        <div className="flex justify-center min-h-[calc(100vh-10rem)] sm:min-h-[calc(100vh-6rem)] items-center py-8 sm:py-16">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-red-950/60 border border-red-800/50 mb-6 sm:mb-8 shadow-lg shadow-black/20"
            >
              <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-400" />
              <span className="text-xs sm:text-sm font-medium text-red-100/95">Mysore · Bangalore · Hyderabad</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.12] tracking-tight mb-6"
            >
              <span className="block text-white/90 text-[0.9em] font-semibold tracking-wide mb-2">
                We build
              </span>
              <span className="relative inline-block min-w-0 sm:min-w-[320px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={lineIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="block bg-gradient-to-r from-red-300 via-red-400 to-red-500 bg-clip-text text-transparent font-extrabold tracking-tight"
                  >
                    {ROTATING_LINES[lineIndex]}
                  </motion.span>
                </AnimatePresence>
                <span
                  className="absolute left-0 right-0 -bottom-2 h-1.5 rounded-full bg-gradient-to-r from-red-500/90 via-red-400 to-red-500/90"
                  aria-hidden
                />
              </span>
              <span className="block mt-4 text-neutral-400 font-medium text-[0.92em]">
                that grow with you.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
            >
              Research-first digital architecture for startups & MSMEs.{" "}
              <span className="text-white font-medium">Not just websites — digital foundations.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="/services"
                className="group relative inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold overflow-hidden shadow-xl shadow-red-900/40 text-sm sm:text-base"
                whileHover={{ scale: 1.04, boxShadow: "0 24px 48px -16px rgba(220,38,38,0.45)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-red-500/70 text-white/95 px-6 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-red-600/20 hover:border-red-400/80 hover:text-white transition-all text-sm sm:text-base"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Call
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-14 pt-8 border-t border-white/[0.06]"
            >
              <p className="text-sm text-neutral-500">
                Trusted by <span className="font-semibold text-red-400">25+</span> businesses across <span className="font-semibold text-red-400">9</span> industries
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
