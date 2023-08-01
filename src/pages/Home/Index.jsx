import { motion, useCycle, AnimatePresence } from "framer-motion";

function HomePage() {
  return (
    <section className="bg-home-mobile h-screen w-screen grid items-end">
      <div className="grid py-12 gap-20">
        <div className="text-secondary grid gap-4 h-max mx-6 text-center">
          <span className="font-sans-condensed tracking-270 leading-none">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="text-4xl text-white leading-[100px]">SPACE</h1>
          <p className="leading-[25px] text-[15px]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="m-auto">
          <button className="bg-white z-20 w-37 h-37 rounded-full grid place-content-center shadow-[0px_0px_0px_0px_rgba(255,255,255,1)] hover:shadow-[0px_0px_0px_40px_rgba(255,255,255,0.2)] transition-all">
            <span className="font-serif text-primary text-[20px]">EXPLORE</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
