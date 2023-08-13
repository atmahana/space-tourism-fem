import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="fixed z-50 top-0 left-0 w-full h-screen bg-primary origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      />
      <motion.div
        className="fixed z-50 top-0 left-0 w-full h-screen bg-primary origin-right"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
      />
    </>
  );
};

export default Transition;
