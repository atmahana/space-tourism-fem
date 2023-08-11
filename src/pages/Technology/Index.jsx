import { TabPanel } from "react-tabs";
import SwipeableTabs from "../../components/SwipeableTabs";
import data from "../../data.json";
import ImageVehicleLandscape from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import ImageVehiclePortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import ImageCapsuleLandscape from "../../assets/technology/image-space-capsule-landscape.jpg";
import ImageCapsulePortrait from "../../assets/technology/image-space-capsule-portrait.jpg";
import ImageSpaceportLandscape from "../../assets/technology/image-spaceport-landscape.jpg";
import ImageSpaceportPortrait from "../../assets/technology/image-spaceport-portrait.jpg";

function TechnologyPage() {
  const landscapeImages = [
    ImageVehicleLandscape,
    ImageCapsuleLandscape,
    ImageSpaceportLandscape,
  ];

  const portraitImages = [
    ImageVehiclePortrait,
    ImageCapsulePortrait,
    ImageSpaceportPortrait,
  ];

  return (
    <section className="h-full bg-tech-mobile md:bg-tech-tablet xl:bg-tech-desktop bg-cover">
      <div className="pt-[5.5rem] md:max-xl:pt-[8.6rem] xl:pt-[13rem] 2xl:pt-[11.5rem] flex flex-col items-center md:items-start xl:px-[10.375rem] 2xl:px-[18rem]">
        <div className="flex gap-[0.8rem] xl:gap-5 leading-none xl:leading-normal text-white tracking-270 md:tracking-[0.21125rem] xl:tracking-475 items-center pb-9 md:max-xl:pb-14 xl:pb-[3.7rem]  md:max-xl:px-[2.375rem]">
          <span className="font-sans-condensed opacity-25 font-bold md:max-xl:text-[1.25rem] xl:text-xl">
            03
          </span>
          <h1 className="text-base md:max-xl:text-[1.25rem] xl:text-xl leading-none font-sans-condensed ">
            SPACE LAUNCH 101
          </h1>
        </div>
        <SwipeableTabs
          tabNames={["1", "2", "3"]}
          tabsStyle="relative md:pt-2 xl:-mt-11"
          tabListStlyle="absolute flex xl:flex-col gap-4 xl:gap-8 inset-x-0 justify-center top-[12.69rem] md:max-xl:top-[23.3rem] xl:top-28 font-serif"
          tabStyle="grid place-content-center text-white w-10 md:max-xl:w-[3.75rem] md:max-xl:h-[3.75rem] h-10 xl:w-20 xl:h-20 rounded-full xl:text-xl border border-white/25 cursor-pointer"
          selectedTabStyle="border-white bg-white text-neutral-900"
        >
          {data.technology.map((tech, index) => (
            <TabPanel key={tech.name} className="flex flex-col xl:flex-row-reverse xl:ml-[10.25rem] 2xl:ml-72 xl:w-full">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcSet={landscapeImages[index]}
                />
                <img src={portraitImages[index]} className="min-h-[10.625rem] xl:min-w-[32rem] 2xl:min-w-[37rem]" />
              </picture>
              <div className="grid gap-3 md:gap-2 xl:gap-1 place-content-center xl:place-content-start xl:mt-2 text-center xl:text-start px-6 md:max-xl:px-[10.2rem] xl:px-0 pt-24 md:max-xl:pt-[9.75rem]">
                <div className="grid gap-1 md:max-xl:gap-2">
                  <span className="text-sm md:text-base text-secondary tracking-235 md:max-xl:tracking-270 font-sans-condensed">
                    THE TERMINOLOGY...
                  </span>
                  <h2 className="uppercase text-[1.5rem] md:max-xl:text-[2.5rem] xl:text-[3.5rem] text-white">
                    {tech.name}
                  </h2>
                </div>
                <p className="text-secondary text-[0.9375rem] md:max-xl:text-base xl:text-lg leading-[1.5625rem] md:max-xl:leading-7 xl:leading-8 xl:pr-[9.5rem]">
                  {tech.description}
                </p>
              </div>
            </TabPanel>
          ))}
        </SwipeableTabs>
      </div>
    </section>
  );
}

export default TechnologyPage;
