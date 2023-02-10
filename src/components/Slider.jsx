import React, { useEffect, useRef, useState } from "react";

const Slider = ({ dataSlider, currIndex, setCurrIndex }) => {
  const [width, setWidth] = useState(0);
  const timeoutRef = useRef(null);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    timeoutRef.current = setTimeout(() => nextImage(), 10000);
    if (currIndex % 2 === 0) {
      setWidth(33.4 * currIndex);
      if (currIndex === 10) {
        setWidth(267.2);
      } else {
      }
    } else {
      setWidth(33.4 * (currIndex - 1));
    }
    return () => {
      resetTimeout();
    };
  }, [currIndex]);
  function setIm(e, index) {
    setCurrIndex(index);
  }
  function nextImage() {
    if (currIndex === dataSlider.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  }
  function prevImage() {
    if (currIndex <= 0) {
      setCurrIndex(dataSlider.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  }
  const renderedImg = dataSlider
    ? dataSlider.map((img, index) => {
        return (
          <img
            key={img.id}
            onClick={(e) => setIm(e, index)}
            className={`w-[32.4%]  ml-[1%] aspect-video rounded-xl cursor-pointer ${
              index === currIndex ? "border-[#7A3FF5] border-[4px]" : ""
            }`}
            src={img.background_image}
          />
        );
      })
    : "LOADING";
  return (
    <div
      style={{ userSelect: "none" }}
      className="relative w-[93vw] py-10 mx-auto    lg:w-[50vw]  lg:mr-28"
    >
      <svg
        onClick={prevImage}
        className="z-10 left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute cursor-pointer"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          r="14"
          transform="rotate(180 14 14)"
          fill="#7A3FF5"
        />
        <path
          d="M16 20L10 14L16 8"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        onClick={nextImage}
        className=" z-10 right-0 top-1/2 absolute translate-x-1/2 -translate-y-1/2 cursor-pointer"
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="14" cy="14" r="14" fill="#7A3FF5" />
        <path
          d="M12 8L18 14L12 20"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="overflow-hidden pr-[1%] relative">
        <div
          style={{
            right: `${width}%`,
          }}
          className={`transition-all ease-in-out flex relative items-center`}
        >
          {renderedImg}
        </div>
      </div>
    </div>
  );
};

export default Slider;
