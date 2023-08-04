import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function DestinationTabs({ destinations }) {
  return (
    <Tabs className="mt-7">
      <TabList className="flex justify-center gap-6">
        {destinations.map((destination) => (
          <Tab
            key={destination.name}
            className="text-secondary uppercase font-sans-condensed tracking-235 text-sm"
          >
            {destination.name}
          </Tab>
        ))}
      </TabList>

      {destinations.map((destination) => (
        <TabPanel
          key={destination.name}
          className="grid divide-y divide-[#383B4B] px-6"
        >
          <div className="text-center py-[2.0625rem]">
            <h2 className="leading-none text-white text-3xl uppercase">
              {destination.name}
            </h2>
            <p className="leading-[1.5625rem] text-[0.9375rem] text-secondary">
              {destination.description}
            </p>
          </div>
          <div className="grid gap-8 py-[2.0625rem]">
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
