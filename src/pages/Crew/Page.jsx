import data from "../../data.json";
import ImgDouglas from "../../assets/crew/image-douglas-hurley.webp";
import ImgMark from "../../assets/crew/image-mark-shuttleworth.webp";
import ImgVictor from "../../assets/crew/image-victor-glover.webp";
import ImgAnousheh from "../../assets/crew/image-anousheh-ansari.webp";
import SwipeableTabs from "../../components/SwipeableTabs";
import { TabPanel } from "react-tabs";
import { motion } from "framer-motion";
import {
  fromBottomFast,
  fromBottomSlow,
  fromLeftFast,
  parentVar,
} from "../../utils/animation";

const images = [ImgDouglas, ImgMark, ImgVictor, ImgAnousheh];

function CrewPage() {
  return (
    <section className="bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop bg-primary h-screen bg-cover overflow-hidden">
      <div className="pt-[5.5rem] md:pt-[8.3rem] xl:pt-[13rem] 2xl:pt-[11.5rem] flex flex-col items-center md:items-start md:px-[2.375rem] xl:px-[10.375rem] 2xl:px-[18rem]">
        <div className="flex gap-[0.875rem] xl:gap-5 tracking-270 md:tracking-[0.21125rem] xl:tracking-475 justify-center">
          <span className="text-base md:text-[1.25rem] xl:text-xl font-sans-condensed font-bold text-white opacity-25">
            02
          </span>
          <h1 className="text-base md:text-[1.25rem] xl:text-xl font-sans-condensed text-white">
            MEET YOUR CREW
          </h1>
        </div>
        <SwipeableTabs
          tabNames={["", "", "", ""]}
          tabsStyle="flex flex-col relative md:max-xl:pt-8"
          tabListStlyle="absolute right-0 left-0 top-72 xl:top-[33.875rem] xl:right-auto xl:pl-1 flex justify-center gap-4 xl:gap-6 cursor-pointer"
          tabStyle="w-[0.625rem] h-[0.625rem] xl:w-[0.9375rem] xl:h-[0.9375rem] 2xl:w-[1.25rem] 2xl:h-[1.25rem] bg-white/[17%] hover:bg-white/50 rounded-full"
          selectedTabStyle="w-[0.625rem] h-[0.625rem] xl:w-[0.9375rem] xl:h-[0.9375rem] 2xl:w-[1.25rem] 2xl:h-[1.25rem] bg-white rounded-full"
        >
          {data.crew.map((crew, index) => (
            <TabPanel
              key={crew.name}
              className="flex flex-col md:flex-col-reverse xl:flex-row-reverse xl:justify-end divide-y md:divide-y-0 divide-[#383B4B] px-6 xl:px-0"
            >
              <motion.img
                className="xl:fixed xl:bottom-0 xl:right-36 2xl:right-80 h-[13.875rem] w-[11.07] md:min-w-[28.5rem] md:h-[35.75rem] xl:h-auto xl:max-h-[44.5rem] mt-8 pl-3 md:pl-10 m-auto md:mt-20"
                src={images[index]}
                initial={fromBottomSlow.hidden}
                animate={fromBottomSlow.visible}
                loading="lazy"
                alt={`Image of ${crew.name}`}
              />
              <motion.div
                className="xl:mt-[7.8rem] text-white text-center xl:text-start md:max-xl:px-22 xl:pr-0 pt-[4.375rem] md:pt-5 2xl:pt-0 xl:w-full"
                variants={parentVar}
                initial="hidden"
                animate="visible"
              >
                <motion.h2
                  className="uppercase text-white/50 md:text-[1.5rem] xl:text-2xl"
                  variants={fromLeftFast}
                >
                  {crew.role}
                </motion.h2>
                <motion.h3
                  className="uppercase text-[1.5rem] md:text-[2.5rem] xl:text-3xl 2xl:text-4xl xl:pb-2"
                  variants={fromBottomFast}
                >
                  {crew.name}
                </motion.h3>
                <motion.p
                  className="text-secondary xl:max-w-[56ch] 2xl:max-w-[75ch] text-[0.9375rem] md:text-base xl:text-lg mt-4 md:mt-2 leading-6 md:leading-7 xl:leading-8 xl:pr-30 2xl:text-[1.3rem]"
                  variants={fromBottomFast}
                >
                  {crew.bio}
                </motion.p>
              </motion.div>
            </TabPanel>
          ))}
        </SwipeableTabs>
      </div>
    </section>
  );
}

export default CrewPage;
