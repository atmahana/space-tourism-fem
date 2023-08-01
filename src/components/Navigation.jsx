import { NavLink } from "react-router-dom";
import IconClose from "../assets/shared/icon-close.svg";
import IconHamburger from "../assets/shared/icon-hamburger.svg";
import IconLogo from "../assets/shared/logo.svg";
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
    transition: { staggerChildren: 5, delayChildren: 5 },
  },
  closed: {
    transition: { staggerChildren: 0.5, staggerDirection: -1 },
  },
};

const liVar = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function NavBar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const menuClickHandler = () => {
    toggleMobileNav();
  };

  return (
    <header className="fixed top-0 inset-x-0 h-[88px] px-6">
      <nav className="container mx-auto h-full font-sans-condensed">
        <div className="relative w-full flex h-full items-center">
          <img src={IconLogo} className="w-10 h-10" />
          <button
            onClick={menuClickHandler}
            className="absolute right-0 top-[33px] z-10"
          >
            <img src={mobileNav ? IconClose : IconHamburger} />
          </button>
        </div>
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
                <motion.li
                  className="flex gap-[9px] leading-none h-[19px]"
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
                  className="flex gap-[12px] leading-none h-[19px]"
                  variants={liVar}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <span className="font-bold">01</span>
                  <NavLink to="/destination">DESTINATION</NavLink>
                </motion.li>
                <motion.li
                  className="flex gap-[10px] leading-none h-[19px]"
                  variants={liVar}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  <span className="font-bold">02</span>
                  <NavLink to="/crew">CREW</NavLink>
                </motion.li>
                <motion.li
                  className="flex gap-[10px] leading-none h-[19px]"
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
