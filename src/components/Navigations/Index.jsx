import IconClose from "../../assets/shared/icon-close.svg";
import IconHamburger from "../../assets/shared/icon-hamburger.svg";
import IconLogo from "../../assets/shared/logo.svg";
import { useCycle } from "framer-motion";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import { NavLink } from "react-router-dom";

function NavBar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const menuClickHandler = () => {
    toggleMobileNav();
  };

  return (
    <div className="fixed z-30 top-0 inset-x-0 h-[5.5rem] px-6 md:px-[2.4375rem] lg:px-14">
      <div className="w-1/3 2xl:w-[52%] h-[1px] hidden xl:block bg-white/[0.25] absolute top-[5.375rem] left-46 z-10" />
      <nav className="mx-auto h-full font-sans-condensed">
        <div className="relative flex h-full md:h-24 xl:h-24 items-center xl:mt-10">
          <NavLink to="/">
            <img src={IconLogo} className="w-10 h-10 md:w-12 md:h-12" />
          </NavLink>
          <button
            onClick={menuClickHandler}
            className="absolute md:hidden right-0 top-[2.0625rem] z-10"
          >
            <img src={mobileNav ? IconClose : IconHamburger} />
          </button>
        </div>
        <MainNav />
        <MobileNav mobileNav={mobileNav} />
      </nav>
    </div>
  );
}

export default NavBar;
