import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/cn";

type AnimationVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  delay?: number;
}

const animations: Record<AnimationVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
};

export const AnimatedSection = ({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      variants={animations[variant]}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
