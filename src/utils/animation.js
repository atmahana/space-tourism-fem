export const parentVar = {
  visible: {
    transition: {
      type: "tween",
      duration: 1,
      staggerChildren: 0.25,
    },
  },
  hidden: {
    transition: {
      type: "tween",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export const fromBottomFast = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const fromLeftFast = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export const fromRightFast = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    x: 100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

export const fadeInSlow = {
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const fadeInFast = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const rotateInFast = {
  visible: {
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  hidden: { rotate: 180, scale: 0.8 },
};
