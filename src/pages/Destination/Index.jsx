import data from "../../data.json";
import ImageMoon from "../../assets/destination/image-moon.webp";
import ImageMars from "../../assets/destination/image-mars.webp";
import ImageEuropa from "../../assets/destination/image-europa.webp";
import ImageTitan from "../../assets/destination/image-titan.webp";
import SwipeableTabs from "../../components/SwipeableTabs";
import { TabPanel } from "react-tabs";

const images = [ImageMoon, ImageMars, ImageEuropa, ImageTitan];

function DestinationPage() {
  const tabNames = ["MOON", "MARS", "EUROPA", "TITAN"];

  return (
    <section className="bg-dest-mobile md:max-xl:bg-dest-tablet xl:bg-dest-desktop bg-cover h-full text-center overflow-auto">
      <div className="pt-[5.5rem] md:max-xl:pt-[8.5rem] xl:pt-[13rem] 2xl:pt-[15rem] flex flex-col items-center md:items-start md:max-xl:px-[2.375rem] xl:px-[10.375rem] 2xl:px-[25rem]">
        <div className="flex gap-4 xl:gap-6 leading-none xl:leading-normal text-white tracking-270 md:tracking-[0.21125rem] xl:tracking-475 items-center pb-8 md:max-xl:pb-14 xl:pb-[3.7rem]">
          <span className="font-sans-condensed opacity-25 font-bold md:max-xl:text-[1.25rem] xl:text-xl">
            01
          </span>
          <h1 className="text-base md:max-xl:text-[1.25rem] xl:text-xl leading-tight font-sans-condensed ">
            PICK YOUR DESTINATION
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[9.8rem] xl:ml-16">
          <SwipeableTabs
            tabNames={tabNames}
            tabsStyle="relative"
            tabListStlyle="absolute inset-x-0 top-48 md:max-xl:top-[22rem] xl:top-0 xl:left-[37.625rem] flex justify-center xl:justify-start gap-[1.625rem] md:max-xl:gap-[2.125rem] xl:gap-[2.125rem]"
            tabStyle="text-secondary uppercase font-sans-condensed tracking-235 md:tracking-270 text-sm md:text-base 2xl:text-lg h-[1.875rem] md:max-xl:h-[2.375rem] xl:h-9 xl:leading-tight cursor-pointer"
            selectedTabStyle="text-white border-b-[3px]"
          >
            {data.destinations.map((destination, index) => (
              <TabPanel
                key={destination.name}
                className="flex flex-col xl:flex-row xl:gap-[9.7rem] px-6 md:max-xl:px-14 xl:px-0"
              >
                <img
                  className="w-[10.625rem] h-[10.625rem] md:max-xl:w-[18.75rem] md:max-xl:h-[18.75rem] xl:w-[27.8125rem] xl:h-[27.8125rem] m-auto xl:m-0 mb-0 md:mb-[3.4rem] xl:self-center"
                  src={images[index]}
                />
                <div className="xl:mt-10">
                  <div className="text-center xl:text-start pt-[4.4rem] md:pt-14 xl:pt-6 pb-8 md:max-xl:pb-12 xl:pb-14 border-b border-[#383B4B]">
                    <h2 className="leading-tight md:leading-none md:pt-4 uppercase text-white text-3xl md:max-xl:text-4xl xl:text-5xl 2xl:text-6xl">
                      {destination.name}
                    </h2>
                    <p className="leading-[1.5625rem] md:max-xl:leading-7 xl:leading-8 md:max-xl:pt-4 xl:pt-5 text-[0.9375rem] md:max-xl:text-base xl:text-lg 2xl:text-[1.3rem] text-secondary">
                      {destination.description}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:max-xl:justify-center gap-8 md:max-xl:gap-3 xl:gap-[4.8rem] py-[2.0625rem] md:py-[1.875rem]">
                    <div className="grid gap-3 md:max-xl:w-[13.5rem] xl:text-start">
                      <h3 className="text-secondary text-sm font-sans-condensed tracking-235  leading-none 2xl:text-lg">
                        AVG. DISTANCE
                      </h3>
                      <p className="font-serif text-xl 2xl:text-2xl text-white uppercase leading-tight">
                        {destination.distance}
                      </p>
                    </div>
                    <div className="grid gap-3 md:max-xl:w-[13.9375rem] xl:text-start">
                      <h3 className="text-secondary text-sm font-sans-condensed tracking-235 leading-none 2xl:text-lg">
                        EST. TRAVEL TIME
                      </h3>
                      <p className="font-serif text-xl 2xl:text-2xl text-white uppercase leading-tight">
                        {destination.travel}
                      </p>
                    </div>
                  </div>
                </div>
              </TabPanel>
            ))}
          </SwipeableTabs>
        </div>
      </div>
    </section>
  );
}

export default DestinationPage;
