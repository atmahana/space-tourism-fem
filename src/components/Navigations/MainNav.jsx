import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { id: "home", path: "/", label: "HOME" },
  { id: "destination", path: "destination", label: "DESTINATION" },
  { id: "crew", path: "crew", label: "CREW" },
  { id: "technology", path: "technology", label: "TECHNOLOGY" },
];

function MainNav() {

  return (
    <div className="bg-white/[0.04] w-[28.125rem] xl:w-[51.875rem] hidden md:block absolute right-0 top-0 xl:top-10 backdrop-blur-[81.55px] text-white h-24">
      <ul className="container flex items-end h-full gap-9 xl:gap-12 px-12 xl:px-[7.6875rem] tracking-235 xl:tracking-270 text-sm xl:text-base">
        {tabs.map((tab, index) => (
          <motion.li
            key={tab.id}
            className="flex h-2/3 focus-visible:outline hover:border-b-4 hover:border-[#FFFFFF50]"
          >
            <NavLink
              className={({ isActive }) => (isActive ? "border-b-4" : "")}
              to={tab.path}
              id={tab.id}
            >
              <span className="hidden xl:inline-block mr-2 font-bold">
                0{index}
              </span>
              {tab.label}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

export default MainNav;
