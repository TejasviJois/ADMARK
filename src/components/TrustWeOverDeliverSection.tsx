import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

const TrustWeOverDeliverSection = () => {
  return (
    <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center px-4 py-16 sm:py-28 overflow-hidden section-alt">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/[0.07] rounded-full blur-[160px]" />
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-red-500/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-red-500/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
        <motion.p
          className="font-bold text-foreground tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          Trust Us
        </motion.p>
        <motion.p
          className="font-bold text-foreground tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
        >
          We Deliver
        </motion.p>
        <motion.p
          className="font-bold tracking-tight bg-gradient-to-r from-red-400 via-red-500 to-red-400 bg-clip-text text-transparent"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
        >
          Beyond Expectations.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
          className="mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-red-500/80 to-red-500/20 mt-6"
        />
      </div>
    </section>
  );
};

export default TrustWeOverDeliverSection;
