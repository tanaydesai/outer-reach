"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TextRevealWipe = ({ children, duration = 0.4, delay = 0.5, className}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative inline-block ${className}`}>
      <span className="invisible">{children}</span>
      {isAnimating && (
        <motion.span
          initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", transition: { duration, delay, ease: "easeOut" } }}
          className={`absolute inset-0 w-fit`}
        >
          {children}
        </motion.span>
      )}
    </div>
  );
};
