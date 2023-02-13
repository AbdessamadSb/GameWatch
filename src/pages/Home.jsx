import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import { fetchGames } from "../redux/gamesSlicer";
import { useSelector, useDispatch } from "react-redux";
import Game from "../components/Game";
const Home = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const dataSlider = useSelector((state) => state.games.popular);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGames());
  }, []);
  return (
    <div>
      <div className="mx-10 sm:mx-10 lg:mx-20 py-8">
        <div className="w-[600px] h-[600px] blur-[257px] right-0 top-60 absolute rounded-full bg-[#F591D7]"></div>
        <div className="w-[600px] h-[600px] blur-[257px]  left-0 top-[90rem] absolute rounded-full bg-[#51CDF1]"></div>
        <Header />
        <MainContent
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
          dataSlider={dataSlider}
        />
        <Game />
      </div>
    </div>
  );
};

export default Home;
