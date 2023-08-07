import DestinationTabs from "../../components/Tabs/Destination/DestinationTabs";
import data from "../../data.json";
import { useState } from "react";
import ImageMoon from "../../assets/destination/image-moon.webp";
import ImageMars from "../../assets/destination/image-mars.webp";
import ImageEuropa from "../../assets/destination/image-europa.webp";
import ImageTitan from "../../assets/destination/image-titan.webp";

const images = [ImageMoon, ImageMars, ImageEuropa, ImageTitan];

function DestinationPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const selectHandler = (index) => setTabIndex(index);

  return (
    <section className="bg-dest-mobile md:max-xl:bg-dest-tablet xl:bg-dest-desktop bg-cover h-full text-center overflow-y-scroll">
      <div className="pt-[88px] md:max-xl:pt-[136px] xl:pt-[13rem] flex flex-col items-center md:items-start md:max-xl:px-[2.375rem] xl:px-[10.375rem]">
        <div className="flex gap-4 xl:gap-6 leading-none xl:leading-normal text-white tracking-270 md:tracking-[0.21125rem] xl:tracking-475 items-center pb-8 md:max-xl:pb-14 xl:pb-[3.7rem]">
          <span className="font-sans-condensed opacity-25 font-bold md:max-xl:text-[1.25rem] xl:text-xl">
            01
          </span>
          <h1 className="text-base md:max-xl:text-[1.25rem] xl:text-xl leading-tight font-sans-condensed ">
            PICK YOUR DESTINATION
          </h1>
        </div>
        <div className="flex flex-col xl:flex-row xl:gap-[9.8rem] xl:ml-16">
          <img
            className="w-[10.625rem] h-[10.625rem] md:max-xl:w-[18.75rem] md:max-xl:h-[18.75rem] xl:w-[27.8125rem] xl:h-[27.8125rem] m-auto xl:m-0 mb-0 md:mb-[3.4rem] xl:self-center"
            src={images[tabIndex]}
          />
          <DestinationTabs
            destinations={data.destinations}
            tabIndex={tabIndex}
            onSelectHandler={selectHandler}
          />
        </div>
      </div>
    </section>
  );
}

export default DestinationPage;
