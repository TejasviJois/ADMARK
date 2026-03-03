import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, Zap, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-team.png";

const ROTATING_LINES = [
  "websites that convert",
  "SaaS that scales",
  "digital foundations",
  "growth engines",
];

const HeroSection = () => {
  const [lineIndex, setLineIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 80, damping: 20 });
  const rotateY = useSpring(mouseX, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const t = setInterval(() => setLineIndex((i) => (i + 1) % ROTATING_LINES.length), 2500);
    return () => clearInterval(t);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(y * 8);
    mouseY.set(-x * 8);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-black"
      style={{ perspective: "1200px" }}
    >
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 20% 40%, rgba(220,38,38,0.15), transparent),
            radial-gradient(ellipse 60% 80% at 80% 20%, rgba(185,28,28,0.12), transparent),
            radial-gradient(ellipse 50% 50% at 50% 80%, rgba(127,29,29,0.1), transparent)
          `,
          backgroundSize: "200% 200%",
          animation: "gradient-shift 12s ease infinite",
        }}
      />

      {/* Floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] -top-40 -right-40 bg-red-600/10 blur-3xl"
        />
        <motion.div
          animate={{ borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "40% 60% 60% 40%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[300px] h-[300px] bottom-20 -left-20 bg-red-500/8 blur-3xl"
        />
      </div>

      {/* 3D Floating Cube */}
      <motion.div
        className="absolute top-1/4 right-[10%] w-24 h-24 pointer-events-none hidden lg:flex items-center justify-center"
        style={{ perspective: 500 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          className="relative w-16 h-16"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: 25, rotateY: 360 }}
          transition={{ rotateY: { duration: 18, repeat: Infinity, ease: "linear" }}}
        >
          <div className="absolute inset-0 rounded-lg border-2 border-red-500/40 bg-red-950/60 backdrop-blur-sm shadow-[0_0_30px_rgba(220,38,38,0.2)]" style={{ transform: "translateZ(12px)" }} />
          <div className="absolute inset-0 rounded-lg border border-red-500/30 bg-red-900/30" style={{ transform: "rotateY(90deg) translateZ(24px)" }} />
          <div className="absolute inset-0 rounded-lg border border-red-500/30 bg-red-900/30" style={{ transform: "rotateY(-90deg) translateZ(24px)" }} />
          <div className="absolute inset-0 rounded-lg border border-red-500/20 bg-red-950/40" style={{ transform: "rotateX(90deg) translateZ(24px)" }} />
        </motion.div>
      </motion.div>

      {/* 3D Floating Prism - left side */}
      <motion.div
        className="absolute bottom-1/3 left-[5%] w-16 h-24 pointer-events-none hidden lg:block"
        style={{ perspective: "300px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div
          className="relative w-full h-full"
          animate={{ rotateY: [0, 360], y: [0, -15, 0] }}
          transition={{
            rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 4, repeat: Infinity },
          }}
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(15deg)",
          }}
        >
          <div
            className="absolute inset-0 border border-red-500/25 rounded-sm bg-gradient-to-b from-red-600/20 to-red-900/10"
            style={{ transform: "translateZ(12px)", clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
          />
        </motion.div>
      </motion.div>

      {/* 3D Floating Sphere (glass orb) */}
      <motion.div
        className="absolute top-[40%] left-[12%] w-24 h-24 rounded-full pointer-events-none hidden lg:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.9 }}
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(220,38,38,0.3), rgba(185,28,28,0.1))",
          boxShadow: "inset -5px -5px 20px rgba(0,0,0,0.3), 0 0 40px rgba(220,38,38,0.15)",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-red-500/20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbital dots */}
      {[
        { size: 4, top: "15%", left: "10%", delay: 0 },
        { size: 6, top: "25%", right: "15%", delay: 0.5 },
        { size: 3, bottom: "30%", left: "20%", delay: 1 },
        { size: 5, bottom: "20%", right: "10%", delay: 0.3 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-red-500/20"
          style={{
            width: orb.size * 4,
            height: orb.size * 4,
            ...(orb.top && { top: orb.top }),
            ...(orb.bottom && { bottom: orb.bottom }),
            ...(orb.left && { left: orb.left }),
            ...(orb.right && { right: orb.right }),
          }}
          animate={{ y: [0, -12, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, delay: orb.delay }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/50 border border-red-900/50 mb-8"
            >
              <Zap className="w-4 h-4 text-red-500" />
              <span className="text-sm text-red-200/90">Mysore · Bangalore · Hyderabad</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-4"
            >
              We build{" "}
              <span className="relative inline-block min-w-[220px] sm:min-w-[280px] text-left">
                <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                  {ROTATING_LINES[lineIndex]}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="absolute -right-1 top-0 w-0.5 h-full bg-red-500"
                />
              </span>
              <br />
              <span className="text-neutral-400 font-medium">that grow with you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-neutral-400 max-w-lg mx-auto lg:mx-0 mb-10"
            >
              AdMark Digitals — research-first digital architecture for startups & MSMEs. Not just websites.{" "}
              <span className="text-white">Digital foundations.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#services"
                className="group relative inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-xl font-semibold overflow-hidden"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                Start Your Project
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 border-2 border-red-600/60 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600/15 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Call
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex -space-x-2">
                {[12, 23, 33].map((n) => (
                  <motion.img
                    key={n}
                    src={`https://i.pravatar.cc/150?img=${n}`}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-black object-cover"
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                  />
                ))}
              </div>
              <p className="text-sm text-neutral-500">
                Trusted by <span className="font-bold text-red-500">1.3L+</span> businesses
              </p>
            </motion.div>
          </div>

          {/* Right: 3D Tilt Image Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative order-1 lg:order-2 flex justify-center perspective-1000"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
                transformPerspective: 1000,
              }}
            >
              <div className="absolute -inset-6 bg-red-600/20 rounded-3xl blur-3xl animate-glow-pulse" />

              <motion.div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(220,38,38,0.2), 0 50px 100px -20px rgba(0,0,0,0.6), 0 0 80px -20px rgba(220,38,38,0.15)",
                }}
              >
                <img
                  src={heroImg}
                  alt="AdMark Digitals Team"
                  className="w-full max-w-md mx-auto object-cover aspect-[4/3]"
                />
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-4 left-4 right-4 flex justify-between items-end"
                >
                  <div className="px-4 py-2 rounded-lg bg-black/80 backdrop-blur-md border border-white/10">
                    <p className="text-xs text-neutral-400">15+ Projects</p>
                    <p className="text-lg font-bold text-white">Delivered</p>
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-red-600/90 backdrop-blur-sm">
                    <p className="text-xs text-red-100">100%</p>
                    <p className="text-sm font-bold text-white">Custom</p>
                  </div>
                </motion.div>
              </motion.div>

              <div
                className="absolute -top-2 -right-2 w-24 h-24 border-t-2 border-r-2 border-red-500/50 rounded-tr-2xl"
                style={{ transform: "translateZ(-1px)" }}
              />
            </motion.div>

            {/* 3D Floating stat card - layered depth */}
            <motion.div
              className="absolute -left-4 top-1/2 -translate-y-1/2 w-36 py-4 px-4 rounded-xl bg-black/70 backdrop-blur-md border border-red-900/50 hidden lg:flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
            >
              <p className="text-2xl font-bold text-red-500">15+</p>
              <p className="text-xs text-neutral-400">Industries</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#stats"
            className="flex flex-col items-center gap-2 text-neutral-500 hover:text-red-500 transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
