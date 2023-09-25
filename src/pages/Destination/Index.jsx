import data from "../../data.json";
import ImageMoon from "../../assets/destination/image-moon.webp";
import ImageMars from "../../assets/destination/image-mars.webp";
import ImageEuropa from "../../assets/destination/image-europa.webp";
import ImageTitan from "../../assets/destination/image-titan.webp";
import SwipeableTabs from "../../components/SwipeableTabs";
import { TabPanel } from "react-tabs";
import { motion } from "framer-motion";
import Transition from "../../components/Transition";

import { parentVar, fromBottomFast, rotateInFast } from "../../utils/animation";

function DestinationPage() {
  const tabNames = ["MOON", "MARS", "EUROPA", "TITAN"];
  const images = [ImageMoon, ImageMars, ImageEuropa, ImageTitan];

  return (
    <section className="bg-dest-mobile md:bg-dest-tablet xl:bg-dest-desktop bg-primary bg-cover h-screen text-center overflow-auto">
      <div className="pt-[5.5rem] md:pt-[8.5rem] xl:pt-[13rem] 2xl:pt-[11.5rem] flex flex-col items-center md:items-start md:px-[2.375rem] xl:px-[10.375rem] 2xl:px-[18rem]">
        <div className="flex gap-4 xl:gap-6 leading-none xl:leading-normal text-white tracking-270 md:tracking-[0.21125rem] xl:tracking-475 items-center pb-8 md:pb-14 xl:pb-[3.7rem]">
          <span className="font-sans-condensed opacity-25 font-bold md:text-[1.25rem] xl:text-xl">
            01
          </span>
          <h1 className="text-base md:text-[1.25rem] xl:text-xl leading-tight font-sans-condensed ">
            PICK YOUR DESTINATION
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[9.8rem] xl:ml-16 2xl:mt-0">
          <SwipeableTabs
            tabNames={tabNames}
            tabsStyle="relative"
            tabListStlyle="absolute inset-x-0 top-48 md:top-[22rem] xl:top-0 xl:left-[37.625rem] 2xl:left-[40.5rem] flex justify-center xl:justify-start gap-[1.625rem] md:gap-[2.125rem] xl:gap-[2.125rem]"
            tabStyle="text-secondary uppercase font-sans-condensed tracking-235 md:tracking-270 text-sm md:text-base 2xl:text-lg h-[1.875rem] md:h-[2.375rem] xl:h-9 xl:leading-tight cursor-pointer"
            selectedTabStyle="uppercase font-sans-condensed tracking-235 md:tracking-270 text-sm md:text-base 2xl:text-lg h-[1.875rem] md:h-[2.375rem] xl:h-9 xl:leading-tight cursor-pointer text-white border-b-[3px]"
          >
            {data.destinations.map((destination, index) => (
              <TabPanel
                key={destination.name}
                className="flex flex-col xl:flex-row xl:gap-[9.7rem] px-6 md:px-14 xl:px-0"
              >
                <motion.img
                  className="w-[10.625rem] h-[10.625rem] md:w-[18.75rem] md:h-[18.75rem] xl:max-2xl:w-[27.8125rem] xl:h-[27.8125rem] 2xl:w-[30rem] 2xl:h-[30rem] m-auto xl:m-0 mb-0 md:mb-[3.4rem] xl:self-center"
                  src={images[index]}
                  initial={rotateInFast.hidden}
                  animate={rotateInFast.visible}
                  loading="lazy"
                  alt={`Image of ${destination.name}`}
                />
                <motion.div
                  className="xl:mt-10"
                  variants={parentVar}
                  initial="hidden"
                  animate="visible"
                >
                  <motion.div
                    className="text-center xl:text-start pt-[4.4rem] md:pt-14 xl:pt-6 pb-8 md:pb-12 xl:pb-14 border-b border-[#383B4B]"
                    variants={fromBottomFast}
                  >
                    <h2 className="leading-tight md:leading-none md:pt-4 uppercase text-white text-3xl md:text-4xl xl:text-5xl 2xl:text-4xl">
                      {destination.name}
                    </h2>
                    <p className="leading-[1.5625rem] md:leading-7 xl:leading-8 md:pt-4 xl:pt-5 text-[0.9375rem] md:text-base xl:text-lg 2xl:text-[1.3rem] text-secondary">
                      {destination.description}
                    </p>
                  </motion.div>
                  <motion.div
                    className="flex flex-col md:flex-row md:max-xl:justify-center gap-8 md:gap-3 xl:gap-[4.8rem] py-[2.0625rem] md:py-[1.875rem]"
                    variants={fromBottomFast}
                  >
                    <div className="grid gap-3 md:w-[13.5rem] xl:text-start">
                      <h3 className="text-secondary text-sm font-sans-condensed tracking-235 leading-none 2xl:text-lg">
                        AVG. DISTANCE
                      </h3>
                      <p className="font-serif text-xl 2xl:text-2xl text-white uppercase leading-tight">
                        {destination.distance}
                      </p>
                    </div>
                    <div className="grid gap-3 md:w-[13.9375rem] xl:text-start">
                      <h3 className="text-secondary text-sm font-sans-condensed tracking-235 leading-none 2xl:text-lg">
                        EST. TRAVEL TIME
                      </h3>
                      <p className="font-serif text-xl 2xl:text-2xl text-white uppercase leading-tight">
                        {destination.travel}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </TabPanel>
            ))}
          </SwipeableTabs>
        </div>
      </div>
    </section>
  );
}

export default Transition(DestinationPage);
