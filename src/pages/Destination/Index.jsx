import DestinationTabs from "../../components/Tabs/Destination/DestinationTabs";
import data from "../../data.json";

function DestinationPage() {
  return (
    <section className="bg-dest-mobile bg-cover h-full text-center overflow-y-scroll">
      <div className="pt-[88px] flex flex-col items-center">
        <div className="flex gap-[1.125rem] leading-none text-white tracking-270 items-center pb-2">
          <span className="font-sans-condensed opacity-25 font-bold">01</span>
          <h1 className="text-base font-sans-condensed ">
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
