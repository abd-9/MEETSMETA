import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SectionAnimation = ({ children, delay, ...res }) => {
  return (
    <motion.div
      initial="initial"
      animate="visible"
      whileInView="visible"
      viewport={{ once: true }}
      exit="exit"
      variants={SectionVariants(delay)}
      {...res}
    >
      {children}
    </motion.div>
  );
};

export const RouteAnimation = ({ children, ...res }) => {
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      variants={RouteVariants}
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
const SectionVariants = (delay = 0.2) => ({
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
});

const RouteVariants = {
  initial: {
    opacity: 0,
    // x: "-3vw",
  },
  visible: {
    opacity: 1,
    // x: 0,
    // transition: { type: "tween", duration: 0.2 },
  },
  exit: {
    // x: "1vh",
    opacity: 0,
    // transition: { type: "tween", duration: 0.2 },
  },
};

export const FadeInWhenVisible = ({ children, delay = 0.2, ...res }) => {
  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true }}
      exit="exit"
      {...res}
      initial="hidden"
      transition={{ delay, duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
        // visible: {
        //   opacity: 1,
        //   // x: 0,
        //   transition: { duration: delay },
        // },
        // exit: {
        //   // x: "1vh",
        //   opacity: 0,
        //   transition: { duration: delay },
        // },
      }}
    >
      {children}
    </motion.div>
  );
};

export const EnterInWhenVisible = ({
  mDir = "left",
  children,
  mDelay = 0.2,
  ...res
}) => {
  const getInitX = mDir === "left" ? "-3vw" : "+3vw";
  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true }}
      exit="exit"
      {...res}
      initial="hidden"
      transition={{ mDelay, duration: 0.3 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: getInitX },
      }}
    >
      {children}
    </motion.div>
  );
};

// const EnterInWhenVisible = {
//   left: LeftEnterInWhenVisible,
//   right: LeftEnterInWhenVisible,
// };
// export { EnterInWhenVisible };
