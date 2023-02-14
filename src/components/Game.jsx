import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import fire from "../assets/fire.svg";
import { motion, useAnimation, useInView } from "framer-motion";

const Game = () => {
  const data = useSelector((state) => state.games.upcoming);
  const control = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.9 },
    },
    hidden: { opacity: 0, scale: 0, y: "-40%" },
  };
  useEffect(() => {
    console.log(inView);
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const RenderedGames = data.map((game) => {
    return (
      <div
        className="xl:w-[23%] md:w-[30%]  z-10 bg-[#0A112D] rounded-2xl 2xl:w-[19%]"
        key={game.id}
      >
        <div className="max-w-full cursor-pointer  transition-all m-auto h-[30rem]">
          <img
            className=" rounded-xl z-0 object-cover object-center  max-w-full h-full"
            src={game.background_image}
            alt=""
          />
        </div>
        <div className=" flex py-5 px-3 justify-between">
          <div>
            <h3 className="text-white xl:w-48 h-24 text-lg  font-bold md:text-base lg:text-lg ">
              {game.name}
            </h3>
            <p className="text-white text-xl">{game.released}</p>
          </div>
          <div className="flex items-center justify-center bg-[#02071C] h-full px-3 py-1 rounded-lg gap-1">
            <img src={fire} className="w-3" alt="fire" />
            <p className="text-white font-semibold text-sm">{game.rating.toFixed(1)}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="font-display">
      <h1 className="text-white text-[40px] font-bold py-10">UPCOMING GAMES</h1>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={control}
        className=" flex flex-wrap justify-between gap-y-28"
      >
        {RenderedGames}
      </motion.div>
    </div>
  );
};

export default Game;
