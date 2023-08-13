export const containerVar = {
  open: {
    opacity: 1,
    x: "0%",
    transition: {
      when: "beforeChildren",
      type: "tween",
      duration: 0.35,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      when: "afterChildren",
      type: "tween",
      duration: 0.35,
    },
  },
};

export const ulVar = {
  open: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.5,
      staggerChildren: 0.05,
    },
  },
  closed: {
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3,
    },
  },
};

export const liVar = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};
