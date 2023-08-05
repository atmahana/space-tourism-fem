import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ImageMoon from "../../../assets/destination/image-moon.webp";
import ImageMars from "../../../assets/destination/image-mars.webp";
import ImageEuropa from "../../../assets/destination/image-europa.webp";
import ImageTitan from "../../../assets/destination/image-titan.webp";

const images = [ImageMoon, ImageMars, ImageEuropa, ImageTitan];

function DestinationTabs({ destinations }) {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Tabs
      className="mt-7"
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <img
        className="w-[10.625rem] h-[10.625rem] m-auto mb-6"
        src={images[tabIndex]}
      />
      <TabList className="flex justify-center gap-[1.625rem]">
        {destinations.map((destination) => (
          <Tab
            key={destination.name}
            selectedClassName="text-white border-b-[3px]"
            className="text-secondary uppercase font-sans-condensed tracking-235 text-sm h-[1.875rem]"
          >
            {destination.name}
          </Tab>
        ))}
      </TabList>

      {destinations.map((destination) => (
        <TabPanel key={destination.name} className="grid px-6">
          <div className="text-center pt-4 pb-8 border-b border-[#383B4B]">
            <h2 className="leading-tight text-white text-3xl uppercase">
              {destination.name}
            </h2>
            <p className="leading-[1.5625rem] text-[0.9375rem] text-secondary">
              {destination.description}
            </p>
          </div>
          <div className="flex flex-col gap-8 py-[2.0625rem]">
            <div className="grid gap-3">
              <h3 className="text-secondary text-sm font-sans-condensed tracking-235 leading-none">
                AVG. DISTANCE
              </h3>
              <p className="font-serif text-xl text-white uppercase leading-tight">
                {destination.distance}
              </p>
            </div>
            <div className="grid gap-3">
              <h3 className="text-secondary text-sm font-sans-condensed tracking-235 leading-none">
                EST. TRAVEL TIME
              </h3>
              <p className="font-serif text-xl text-white uppercase leading-tight">
                {destination.travel}
              </p>
            </div>
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
}

export default DestinationTabs;
