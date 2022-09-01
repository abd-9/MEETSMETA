import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SectionAnimation = ({ children, ...res }) => {
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      variants={SectionVariants}
      {...res}
    >
      {children}
    </motion.div>
  );
};
export const ListAnimation = ({ delay, children, ...res }) => {
  return (
    <motion.div
      variants={ListVariants(delay)}
      initial="initial"
      animate="visible"
      {...res}
    >
      {children}
    </motion.div>
  );
};

export const AP = AnimatePresence;

export const ListVariants = (delay) => ({
  initial: { opacity: 0, y: 15 },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      when: "beforeChildren",
    },
  },
});
const SectionVariants = {
  initial: {
    opacity: 0,
    x: "-1vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", duration: 0.2 },
  },
  exit: {
    x: "1vh",
    opacity: 0,
    transition: { type: "tween", duration: 0.2 },
  },
};
