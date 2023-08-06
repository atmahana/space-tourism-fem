import DestinationTabs from "../../components/Tabs/Destination/DestinationTabs";
import data from "../../data.json";

function DestinationPage() {
  return (
    <section className="bg-dest-mobile md:max-xl:bg-dest-tablet bg-cover h-full text-center overflow-y-scroll">
      <div className="pt-[88px] md:max-xl:pt-[136px] flex flex-col items-center md:items-start md:max-xl:px-[2.375rem]">
        <div className="flex gap-4 leading-none text-white tracking-270 md:tracking-[0.21125rem] items-center pb-1">
          <span className="font-sans-condensed opacity-25 font-bold md:max-xl:text-[1.25rem] ">
            01
          </span>
          <h1 className="text-base md:max-xl:text-[1.25rem] leading-tight font-sans-condensed ">
            PICK YOUR DESTINATION
          </h1>
        </div>
        <div>
          <DestinationTabs destinations={data.destinations} />
        </div>
      </div>
    </section>
  );
}

export default DestinationPage;
