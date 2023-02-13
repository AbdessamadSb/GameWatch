import React from "react";
import { useSelector } from "react-redux";
import fire from "../assets/fire.svg";
const Game = () => {
  const data = useSelector((state) => state.games.upcoming);
  const RenderedGames = data.map((game) => {
    return (
      <div
        className="xl:w-[23%] md:w-[30%] cursor-pointer z-10 bg-[#0A112D] rounded-2xl   2xl:w-[18%] h-[40rem]"
        key={game.id}
      >
        <div className="max-w-full  transition-all m-auto h-[30rem]">
          <img
            className=" rounded-xl z-0 object-cover object-center  max-w-full h-full"
            src={game.background_image}
            alt=""
          />
        </div>
        <div className=" flex  justify-between p-5 ">
          <div>
            <h3 className="text-white xl:w-48 h-24 font-bold text-lg ">
              {game.name}
            </h3>
            <p className="text-white text-xl">{game.released}</p>
          </div>
          <div className="flex items-center justify-center  bg-[#02071C] h-full px-3 py-1  rounded-lg gap-1">
            <img src={fire} className="w-3" alt="fire" />
            <p className="text-white font-semibold text-sm">{game.rating}</p>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="min-h-[100vw] font-display">
      <h1 className="text-white text-[40px]  font-bold py-10">
        UPCOMING GAMES
      </h1>
      <div className=" flex flex-wrap justify-between gap-y-28">
        {RenderedGames}
      </div>
    </div>
  );
};

export default Game;
