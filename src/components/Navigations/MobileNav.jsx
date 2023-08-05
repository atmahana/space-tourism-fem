import { NavLink } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const containerVar = {
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

const ulVar = {
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

const liVar = {
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

const liHover = {
  scale: 1.2,
  originX: 0,
};

function MobileNav({ mobileNav }) {
  return (
    <AnimatePresence>
      {mobileNav && (
        <motion.div
          key="mobileNav"
          className="w-[254px] md:hidden px-8 py-30 h-screen absolute backdrop-blur-[81.55px] right-0 bg-white/[0.06] top-0"
          variants={containerVar}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <div className="w-1 bg-white h-8 absolute top-[113px] right-0" />
          <motion.ul
            className="text-white grid gap-8 tracking-270"
            variants={ulVar}
          >
            <AnimatePresence>
              <motion.li
                className="flex gap-[9px] leading-none h-[19px]"
                key="home"
                variants={liVar}
                whileHover={liHover}
              >
                <span className="font-bold">00</span>
                <NavLink to="/">HOME</NavLink>
              </motion.li>
              <motion.li
                className="flex gap-[12px] leading-none h-[19px]"
                key="destination"
                variants={liVar}
                whileHover={liHover}
              >
                <span className="font-bold">01</span>
                <NavLink to="/destination">DESTINATION</NavLink>
              </motion.li>
              <motion.li
                className="flex gap-[10px] leading-none h-[19px]"
                key="crew"
                variants={liVar}
                whileHover={liHover}
              >
                <span className="font-bold">02</span>
                <NavLink to="/crew">CREW</NavLink>
              </motion.li>
              <motion.li
                className="flex gap-[10px] leading-none h-[19px]"
                key="technology"
                variants={liVar}
                whileHover={liHover}
              >
                <span className="font-bold">03</span>
                <NavLink to="/technology">TECHNOLOGY</NavLink>
              </motion.li>
            </AnimatePresence>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
