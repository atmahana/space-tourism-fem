import { NavLink } from "react-router-dom";
import IconClose from "../assets/shared/icon-close.svg";
import IconHamburger from "../assets/shared/icon-hamburger.svg";
import { motion, useCycle, AnimatePresence } from "framer-motion";

const containerVar = {
  open: {
    opacity: 1,
    x: "0%",
    transition: {
      when: "beforeChildren",
      type: "tween",
      duration: 0.25,
    },
  },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

const ulVar = {
  open: {
    transition: { staggerChildren: 1, delayChildren: 1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVar = {
  open: {
    x: "0%",
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    x: "100%",
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  },
};

function NavBar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const menuClickHandler = () => {
    toggleMobileNav();
  };

  return (
    <header>
      <nav className="relative top-0">
        <button
          onClick={menuClickHandler}
          className="absolute right-[26px] top-[33px] z-10"
        >
          <img src={mobileNav ? IconClose : IconHamburger} />
        </button>
        <AnimatePresence>
          {mobileNav && (
            <motion.div
              key="mobileNav"
              className="w-[254px] md:hidden px-8 py-30 h-screen absolute backdrop-blur-sm right-0 bg-slate-700 top-0"
              variants={containerVar}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="w-1 bg-white h-8 absolute top-[113px] right-0" />
              <motion.ul
                className="text-white grid gap-8 tracking-wider"
                variants={ulVar}
              >
                <motion.li
                  className="flex gap-[9px] h-5"
                  variants={liVar}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <span className="font-bold">00</span>
                  <NavLink to="/" end>
                    HOME
                  </NavLink>
                </motion.li>
                <motion.li
                  className="flex gap-[12px]"
                  variants={liVar}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <span className="font-bold">01</span>
                  <NavLink to="/destination">DESTINATION</NavLink>
                </motion.li>
                <motion.li
                  className="flex gap-[10px]"
                  variants={liVar}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <span className="font-bold">02</span>
                  <NavLink to="/crew">CREW</NavLink>
                </motion.li>
                <motion.li
                  className="flex gap-[10px] border-0"
                  variants={liVar}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <span className="font-bold">03</span>
                  <NavLink to="/technology">TECHNOLOGY</NavLink>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default NavBar;
