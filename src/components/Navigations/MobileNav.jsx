import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ulVar, liVar, containerVar } from "./nav-anim";

function MobileNav({ mobileNav }) {
  return (
    <AnimatePresence>
      {mobileNav && (
        <motion.div
          key="mobileNav"
          className="w-[15.875rem] md:hidden pl-8 py-28 h-screen absolute backdrop-blur-[81.55px] right-0 bg-white/[0.06] top-0"
          variants={containerVar}
          initial="closed"
          animate="open"
          exit="closed"
        >
          <motion.ul
            className="text-white grid gap-[1.15rem] tracking-270"
            variants={ulVar}
          >
            <AnimatePresence>
              <motion.li
                className="flex gap-[0.5625rem] items-center leading-loose h-8"
                key="home"
                variants={liVar}
              >
                <span className="font-bold">00</span>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "border-r-4 w-full" : ""
                  }
                >
                  HOME
                </NavLink>
              </motion.li>
              <motion.li
                className="flex gap-[0.75rem] items-center leading-loose h-8"
                key="destination"
                variants={liVar}
              >
                <span className="font-bold">01</span>
                <NavLink
                  to="/destination"
                  className={({ isActive }) =>
                    isActive ? "border-r-4 w-full" : ""
                  }
                >
                  DESTINATION
                </NavLink>
              </motion.li>
              <motion.li
                className="flex gap-[0.625rem] items-center leading-loose h-8"
                key="crew"
                variants={liVar}
              >
                <span className="font-bold">02</span>
                <NavLink
                  to="/crew"
                  className={({ isActive }) =>
                    isActive ? "border-r-4 w-full" : ""
                  }
                >
                  CREW
                </NavLink>
              </motion.li>
              <motion.li
                className="flex gap-[0.625rem] items-center leading-loose h-8"
                key="technology"
                variants={liVar}
              >
                <span className="font-bold">03</span>
                <NavLink
                  to="/technology"
                  className={({ isActive }) =>
                    isActive ? "border-r-4 w-full" : ""
                  }
                >
                  TECHNOLOGY
                </NavLink>
              </motion.li>
            </AnimatePresence>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileNav;
