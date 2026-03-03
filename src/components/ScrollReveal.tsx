import { motion } from "framer-motion";

type Variant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn" | "blurIn" | "stagger";

const variants: Record<Variant, object> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(12px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

const spring = { type: "spring", stiffness: 100, damping: 20 };
const smooth = { duration: 0.6, ease: [0.16, 1, 0.3, 1] };

type Props = {
  children: React.ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: keyof typeof motion;
  once?: boolean;
  amount?: number;
};

export const ScrollReveal = ({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  as = "div",
  once = true,
  amount = 0.2,
}: Props) => {
  const Component = motion[as] as React.ComponentType<any>;
  const v = variants[variant];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={v}
      transition={{
        ...smooth,
        delay,
        duration,
      }}
      className={className}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
