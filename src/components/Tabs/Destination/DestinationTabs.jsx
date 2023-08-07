import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function DestinationTabs({ destinations, tabIndex, onSelectHandler }) {

  const selectHandler = (index) => {
    onSelectHandler(index);
  }

  return (
    <Tabs
      className="mt-6 md:mt-0 xl:self-start"
      selectedIndex={tabIndex}
      onSelect={selectHandler}
    >
      <TabList className="flex justify-center xl:justify-start gap-[1.625rem] md:max-xl:gap-[2.125rem] xl:gap-[2.125rem]">
        {destinations.map((destination) => (
          <Tab
            key={destination.name}
            selectedClassName="text-white border-b-[3px]"
            className="text-secondary uppercase font-sans-condensed tracking-235 md:tracking-270 text-sm md:text-base h-[1.875rem] md:max-xl:h-[2.375rem] xl:h-9 xl:leading-tight"
          >
            {destination.name}
          </Tab>
        ))}
      </TabList>

      {destinations.map((destination) => (
        <TabPanel key={destination.name} className="grid px-6 md:px-14 xl:px-0">
          <div className="text-center xl:text-start pt-4 xl:pt-6 pb-8 md:max-xl:pb-12 xl:pb-14 border-b border-[#383B4B]">
            <h2 className="leading-tight md:leading-none md:pt-5 uppercase text-white text-3xl md:max-xl:text-4xl xl:text-5xl">
              {destination.name}
            </h2>
            <p className="leading-[1.5625rem] md:max-xl:leading-7 xl:leading-8 md:max-xl:pt-4 xl:pt-5 text-[0.9375rem] md:max-xl:text-base xl:text-lg text-secondary">
              {destination.description}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:max-xl:justify-center gap-8 md:max-xl:gap-3 xl:gap-[4.8rem] py-[2.0625rem] md:py-[1.875rem]">
            <div className="grid gap-3 md:max-xl:w-[13.5rem] xl:text-start">
              <h3 className="text-secondary text-sm font-sans-condensed tracking-235 leading-none">
                AVG. DISTANCE
              </h3>
              <p className="font-serif text-xl text-white uppercase leading-tight">
                {destination.distance}
              </p>
            </div>
            <div className="grid gap-3 md:max-xl:w-[13.9375rem] xl:text-start">
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
