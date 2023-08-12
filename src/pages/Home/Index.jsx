import { motion } from "framer-motion";
import { parentVar, fromBottomFast, fadeInSlow } from "../../utils/animation";
function HomePage() {
  return (
    <section className="bg-home-mobile md:bg-home-tablet xl:bg-home-desktop bg-cover h-screen w-screen">
      <div className="h-full flex flex-col justify-center items-center xl:items-end xl:pb-[9%] 2xl:pb-[12%] xl:flex-row gap-20 md:gap-[9.75rem] xl:gap-[24.125rem]">
        <motion.div
          className="mt-16 md:mt-28 xl:mt-0 text-secondary grid gap-4 md:gap-6 h-max mx-6 md:mx-40 xl:mx-0 text-center xl:w-[28.125rem] xl:h-96 2xl:h-[30rem] xl:text-start"
          variants={parentVar}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            className="font-sans-condensed tracking-270 md:tracking-[3.38px] xl:tracking-475 leading-none xl:leading-8 md:text-[1.25rem] xl:text-xl"
            variants={fromBottomFast}
          >
            SO, YOU WANT TO TRAVEL TO
          </motion.span>
          <motion.h1
            className="text-4xl md:text-6xl text-white leading-[100px] md:leading-[150px] xl:leading-[175px]"
            variants={fromBottomFast}
          >
            SPACE
          </motion.h1>
          <motion.p
            className="leading-[25px] md:leading-7 xl:leading-8 text-[15px] md:text-base xl:text-lg "
            variants={fromBottomFast}
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </motion.p>
        </motion.div>
        <motion.div variants={parentVar} initial="hidden" animate="visible">
          <motion.button
            className="bg-white z-20 w-37 h-37 md:w-62 md:h-62 xl:w-[17.125rem] xl:h-[17.125rem] rounded-full grid place-content-center shadow-[0px_0px_0px_0px_rgba(255,255,255,0)] hover:shadow-[0px_0px_0px_2.75rem_rgba(255,255,255,0.2)] transition-all"
            variants={fadeInSlow}
          >
            <span className="font-serif text-primary text-[20px] md:text-2xl tracking-wider mt-2 md:mt-0 xl:tracking-235">
              EXPLORE
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default HomePage;
