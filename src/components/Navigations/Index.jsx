import IconClose from "../../assets/shared/icon-close.svg";
import IconHamburger from "../../assets/shared/icon-hamburger.svg";
import IconLogo from "../../assets/shared/logo.svg";
import { useCycle } from "framer-motion";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

function NavBar() {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const menuClickHandler = () => {
    toggleMobileNav();
  };

  return (
    <header className="fixed z-50 top-0 inset-x-0 h-[88px] px-6 md:px-[39px] lg:px-14">
      <div className="w-1/3 2xl:w-[52%] h-[1px] hidden xl:block bg-white/[0.25] absolute top-[5.375rem] left-46 z-10" />
      <nav className="mx-auto h-full font-sans-condensed">
        <div className="relative flex h-full md:h-24 xl:h-24 items-center xl:mt-10">
          <img src={IconLogo} className="w-10 h-10 md:w-12 md:h-12" />
          {windowSize[0] < 768 && (
            <button
              onClick={menuClickHandler}
              className="absolute right-0 top-[33px] z-10"
            >
              <img src={mobileNav ? IconClose : IconHamburger} />
            </button>
          )}
        </div>
        <MainNav />
        <MobileNav mobileNav={mobileNav} />
      </nav>
    </header>
  );
}

export default NavBar;
