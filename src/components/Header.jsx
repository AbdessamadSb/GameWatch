import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [openSearch, SetOpenSearch] = useState(false);
  const variants = {
    visible: {
      visibility: "visible",
      width: "100%",
      transition: { duration: 0.3 },
    },
    invisible: { width: "0%", visibility: "hidden" },
  };
  function openSearchBar() {
    SetOpenSearch(!openSearch);
  }
  return (
    <div className="flex flex-col gap-10 md:flex-row justify-between items-center">
      <div className="flex md:flex-row flex-col gap-6 md:gap-10 items-center">
        <div className="flex w-full items-center">
          <div>
            <svg
              width="60"
              height="60"
              viewBox="0 0 78 77"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0H41.67C57.9646 0 72.5033 10.2343 78 25.5738V25.5738H23.0164L0 0Z"
                fill="#F591D7"
              />
              <path
                d="M0 51.1476H75.0164V51.1476C69.7906 66.4426 55.4166 76.7213 39.2534 76.7213H18.7541L0 51.1476Z"
                fill="#51CDF1"
              />
              <path
                d="M0 25.1476H66.0656V51.5738H22.1639L0 25.1476Z"
                fill="#7A3FF5"
              />
            </svg>
          </div>
          <h1 className="text-white text-2xl font-bold font-display ml-2">
            Game Watch
          </h1>
        </div>
        <div className="text-white w-[90vw] md:w-full flex items-center">
          <svg
            onClick={openSearchBar}
            className="absolute cursor-pointer"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35.8674 33.7233H34.7381L34.3379 33.3373C35.7387 31.7078 36.582 29.5923 36.582 27.291C36.582 22.1595 32.4225 18 27.291 18C22.1595 18 18 22.1595 18 27.291C18 32.4225 22.1595 36.582 27.291 36.582C29.5923 36.582 31.7078 35.7387 33.3373 34.3379L33.7233 34.7381V35.8674L40.8702 43L43 40.8702L35.8674 33.7233ZM27.291 33.7233C23.7318 33.7233 20.8588 30.8502 20.8588 27.291C20.8588 23.7318 23.7318 20.8588 27.291 20.8588C30.8502 20.8588 33.7233 23.7318 33.7233 27.291C33.7233 30.8502 30.8502 33.7233 27.291 33.7233Z"
              fill="white"
            />
          </svg>
          <motion.input
            variants={variants}
            animate={openSearch ? "visible" : "invisible"}
            type="text"
            placeholder="Search games.."
            className={`px-14  rounded-2xl h-10   bg-[#0A112D]`}
          />
        </div>
      </div>
      <div className="flex gap-10 items-center">
        <div className="text-white cursor-pointer">
          <svg
            width="24"
            height="30"
            viewBox="0 0 24 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5 30C13.0813 30 14.375 28.6154 14.375 26.9231H8.625C8.625 28.6154 9.90437 30 11.5 30ZM20.125 20.7692V13.0769C20.125 8.35385 17.7675 4.4 13.6562 3.35385V2.30769C13.6562 1.03077 12.6931 0 11.5 0C10.3069 0 9.34375 1.03077 9.34375 2.30769V3.35385C5.21813 4.4 2.875 8.33846 2.875 13.0769V20.7692L0 23.8462V25.3846H23V23.8462L20.125 20.7692Z"
              fill="white"
            />
            <circle cx="18" cy="6" r="6" fill="#FF3232" />
          </svg>
        </div>
        <div className="text-white">Profile</div>
      </div>
    </div>
  );
};

export default Header;
