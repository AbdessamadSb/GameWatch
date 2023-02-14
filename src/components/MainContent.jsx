import React, { useEffect } from "react";
import { motion } from "framer-motion";
import fire from "../assets/fire.svg";
import calender from "../assets/calender.svg";
import Slider from "./Slider";
const MainContent = ({ dataSlider, currIndex, setCurrIndex }) => {
  useEffect(() => {}, [dataSlider]);
  return (
    <div>
      <motion.div
        style={{
          backgroundImage: `url(${
            dataSlider.length
              ? dataSlider[currIndex].short_screenshots[
                  Math.floor(
                    Math.random() *
                      dataSlider[currIndex].short_screenshots.length
                  )
                ].image
              : ""
          })`,
        }}
        className="min-w-[calc(100%+160px)] transition-all bg-center flex items-center flex-col lg:block  bg-cover relative bg-no-repeat  ml-[-80px] my-8 "
      >
        <div className="absolute w-full h-full bg-gradient-to-b from-black md:bg-gradient-to-r md:from-black opacity-50"></div>

        <motion.div
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-20 w-full md:w-[50rem]  lg:w-[70rem]   relative  z-10"
        >
          <h1 className="text-white text-center lg:text-left text-4xl  lg:text-[72px] font-bold font-display h-40 lg:h-60 leading-tight">
            {dataSlider.length ? dataSlider[currIndex].name : "Loading"}
          </h1>
          <div className="flex gap-10 py-8 justify-center lg:justify-start">
            <div className="flex gap-3">
              <img src={fire} />
              <h2 className="text-white text-2xl">
                {dataSlider.length ? dataSlider[currIndex].rating : "Loading"}
              </h2>
            </div>
            <div className="flex gap-3">
              <img src={calender} />
              <h2 className="text-white text-xl">
                {dataSlider.length ? dataSlider[currIndex].released : "Loading"}
              </h2>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="bg-[#7A3FF5] w-full lg:w-auto font-semibold py-3 px-10 rounded-3xl text-white">
              More infos
            </button>
          </div>
        </motion.div>
        <div>
          <Slider
            currIndex={currIndex}
            setCurrIndex={setCurrIndex}
            dataSlider={dataSlider}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
