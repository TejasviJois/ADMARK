import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const ClosingSection = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(mouseY, { stiffness: 60, damping: 25 });
  const rotateY = useSpring(mouseX, { stiffness: 60, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(y * 12);
    mouseY.set(-x * 12);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="py-10 sm:py-12 border-t border-border relative overflow-hidden min-h-[80vh] flex items-center"
      style={{ perspective: "1400px" }}
    >
      {/* Animated gradient mesh */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `
            radial-gradient(ellipse 100% 60% at 50% 20%, hsl(0 80% 50% / 0.12), transparent 50%),
            radial-gradient(ellipse 80% 80% at 80% 80%, hsl(0 70% 45% / 0.08), transparent 45%),
            radial-gradient(ellipse 60% 100% at 20% 50%, hsl(0 80% 50% / 0.06), transparent 50%)
          `,
          backgroundSize: "200% 200%",
          animation: "gradient-shift 15s ease infinite",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ borderRadius: ["60% 40% 30% 70%", "30% 60% 70% 40%", "60% 40% 30% 70%"] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[500px] h-[500px] -top-60 -left-40 bg-primary/10 blur-[100px]"
        />
        <motion.div
          animate={{ borderRadius: ["40% 60% 60% 40%", "60% 40% 40% 60%", "40% 60% 60% 40%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-[400px] h-[400px] -bottom-40 -right-40 bg-primary/8 blur-[80px]"
        />
      </div>

      {/* 3D Floating ring (torus-like) */}
      <motion.div
        className="absolute top-[15%] right-[8%] w-32 h-32 rounded-full border-2 border-primary/30 hidden lg:block"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.6, scale: 1 }}
        viewport={{ once: true }}
        animate={{
          rotateY: 360,
          rotateX: [15, -15, 15],
        }}
        transition={{
          rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
          rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-primary/20"
          style={{ transform: "rotateY(90deg)" }}
        />
      </motion.div>

      {/* 3D Cube - left */}
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-20 h-20 hidden lg:flex items-center justify-center"
        style={{ perspective: 400 }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 0.7, x: 0 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="relative w-14 h-14"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateX: 20, rotateY: 360 }}
          transition={{ rotateY: { duration: 22, repeat: Infinity, ease: "linear" }}}
        >
          <div className="absolute inset-0 rounded-lg border-2 border-primary/40 bg-primary/10 backdrop-blur-sm shadow-[0_0_25px_hsl(0_80%_50%_/_0.2)]" style={{ transform: "translateZ(10px)" }} />
          <div className="absolute inset-0 rounded-lg border border-primary/30 bg-primary/5" style={{ transform: "rotateY(90deg) translateZ(20px)" }} />
          <div className="absolute inset-0 rounded-lg border border-primary/30 bg-primary/5" style={{ transform: "rotateY(-90deg) translateZ(20px)" }} />
          <div className="absolute inset-0 rounded-lg border border-primary/20 bg-primary/5" style={{ transform: "rotateX(90deg) translateZ(20px)" }} />
        </motion.div>
      </motion.div>

      {/* Floating diamond / pyramid */}
      <motion.div
        className="absolute top-[35%] left-[10%] w-0 h-0 hidden lg:block"
        style={{
          borderLeft: "20px solid transparent",
          borderRight: "20px solid transparent",
          borderBottom: "35px solid hsl(0 80% 50% / 0.25)",
          filter: "blur(0)",
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{
          rotateY: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Floating accent orbs */}
      {[
        { size: 6, left: "18%", top: "25%", delay: 0 },
        { size: 8, right: "20%", top: "30%", delay: 0.4 },
        { size: 4, left: "15%", bottom: "25%", delay: 0.2 },
        { size: 7, right: "12%", bottom: "30%", delay: 0.6 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: orb.size * 6,
            height: orb.size * 6,
            ...(orb.left && { left: orb.left }),
            ...(orb.right && { right: orb.right }),
            ...(orb.top && { top: orb.top }),
            ...(orb.bottom && { bottom: orb.bottom }),
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Central 3D tilt card */}
      <div className="container relative z-10 mx-auto px-4 flex justify-center">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="group relative w-full max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl overflow-hidden"
            style={{
              boxShadow: "0 25px 80px -20px hsl(0 0% 0% / 0.5), 0 0 60px -15px hsl(0 80% 50% / 0.15)",
            }}
          >
            {/* Card inner glow on hover */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
              style={{
                background: "radial-gradient(ellipse 80% 50% at 50% 0%, hsl(0 80% 50% / 0.08), transparent 60%)",
              }}
            />

            <div className="relative" style={{ transform: "translateZ(20px)" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Your next chapter</span>
              </motion.div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ transform: "translateZ(30px)" }}
              >
                <span className="text-foreground">Don&apos;t just build a website.</span>
                <br />
                <span className="text-gradient">
                  Build a scalable digital foundation.
                </span>
              </h2>

              <p
                className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-xl"
                style={{ transform: "translateZ(15px)" }}
              >
                We engineer digital systems that grow with your business — startup or MSME. Your next stage of growth starts with the right architecture.
              </p>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-glow"
                style={{ transform: "translateZ(40px)" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px hsl(0 80% 50% / 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Start building today <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom floating sphere */}
      <motion.div
        className="absolute bottom-[10%] right-[12%] w-20 h-20 rounded-full hidden lg:block"
        style={{
          background: "radial-gradient(circle at 30% 30%, hsl(0 80% 50% / 0.35), hsl(0 80% 50% / 0.05))",
          boxShadow: "inset -4px -4px 15px rgba(0,0,0,0.3), 0 0 50px hsl(0 80% 50% / 0.2)",
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  );
};

export default ClosingSection;
