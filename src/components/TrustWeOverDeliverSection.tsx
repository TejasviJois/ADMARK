import { motion } from "framer-motion";

const EASE_PREMIUM = [0.22, 1, 0.36, 1];
const DURATION = 0.9;
const STAGGER = 0.2;

const TrustWeOverDeliverSection = () => {
  return (
    <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 bg-background overflow-hidden">
      <div className="w-full max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
        <motion.p
          className="font-bold text-foreground tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: DURATION,
            ease: EASE_PREMIUM,
            delay: 0,
          }}
        >
          Trust Us
        </motion.p>
        <motion.p
          className="font-bold text-foreground tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: DURATION,
            ease: EASE_PREMIUM,
            delay: STAGGER,
          }}
        >
          We Deliver
        </motion.p>
        <motion.p
          className="font-bold text-foreground tracking-tight"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: DURATION,
            ease: EASE_PREMIUM,
            delay: STAGGER * 2,
          }}
        >
          Beyond Expectations.
        </motion.p>
      </div>
    </section>
  );
};

export default TrustWeOverDeliverSection;
