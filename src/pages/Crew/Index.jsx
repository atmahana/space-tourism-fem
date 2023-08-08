import data from "../../data.json";
import ImgDouglas from "../../assets/crew/image-douglas-hurley.webp";
import ImgMark from "../../assets/crew/image-mark-shuttleworth.webp";
import ImgVictor from "../../assets/crew/image-victor-glover.webp";
import ImgAnousheh from "../../assets/crew/image-anousheh-ansari.webp";
import SwipeableTabs from "../../components/SwipeableTabs";
import { TabPanel } from "react-tabs";
import { useState } from "react";

const images = [ImgDouglas, ImgMark, ImgVictor, ImgAnousheh];

function CrewPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedIndex(index);
  };

  return (
    <section className="bg-crew-mobile h-full bg-cover">
      <div className="pt-[5.5rem] md:max-xl:pt-[8.5rem] xl:pt-[13rem] flex flex-col items-center md:items-start md:max-xl:px-[2.375rem] xl:px-[10.375rem]">
        <div className="flex gap-[0.875rem] tracking-270 justify-center">
          <span className="text-base font-sans-condensed font-bold text-white opacity-25">
            02
          </span>
          <h1 className="text-base font-sans-condensed text-white">
            MEET YOUR CREW
          </h1>
        </div>
        <div className="pt-7 divide-y divide-[#383B4B] w-full px-6">
          <img
            className="h-[13.875rem] w-[11.07] pl-3 m-auto"
            src={images[selectedIndex]}
          />
          <SwipeableTabs
            selectedIndex={selectedIndex}
            onSelect={handleTabSelect}
            tabNames={['', '', '', '']}
            tabsStyle="pt-8"
            tabListStlyle="flex justify-center gap-4 pb-8"
            tabStyle="w-[0.625rem] h-[0.625rem] bg-white opacity-[17%] rounded-full"
            selectedTabStyle="w-[0.625rem] h-[0.625rem] bg-white opacity-100"
          >
            {data.crew.map((crew) => (
              <TabPanel key={crew.name}>
                <div className="flex flex-col gap-20 justify-center items-center">
                  <div className="text-white text-center">
                    <h2 className="uppercase opacity-50">{crew.role}</h2>
                    <h3 className="uppercase text-[1.5rem]">{crew.name}</h3>
                    <p className="text-secondary text-[0.9375rem] mt-4 leading-6">
                      {crew.bio}
                    </p>
                  </div>
                </div>
              </TabPanel>
            ))}
          </SwipeableTabs>
          {/* <div className="w-full max-w-lg">
            <Carousel autoSlide={false}>
              {data.crew.map((crew, index) => (
                <div className="w-80 h-[467px] flex flex-col gap-20 justify-center items-center">
                  <img src={images[index]} className="w-[177px] h-[222px]"></img>
                  <div className="text-white text-center">
                    <h2 className="uppercase opacity-50">{crew.role}</h2>
                    <h3 className="uppercase text-[1.5rem]">{crew.name}</h3>
                    <p className="text-secondary text-[0.9375rem] mt-3 leading-6">{crew.bio}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default CrewPage;
