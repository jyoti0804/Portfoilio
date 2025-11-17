"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export const GlobalAnimationWrapper = ({ children }) => {
  // Scroll Effect (smooth opacity + scale)
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

  return (
    <motion.div
      // Page Load Animation (runs once)
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}

      // Scroll reactive smooth animation
      style={{ opacity, scale }}

      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};
