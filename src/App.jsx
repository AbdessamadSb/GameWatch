import { useState, useEffect } from "react";
import Header from "./components/Header";
import { fetchGames } from "./redux/gamesSlicer";
import { useSelector, useDispatch } from "react-redux";

import MainContent from "./components/MainContent";

function App() {
  const [currIndex, setCurrIndex] = useState(0);

  const dataSlider = useSelector((state) => state.games.newGames);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGames());
  }, []);
  return (
    <div className="App min-h-screen overflow-hidden relative bg-[#02071C]">
      <div className="mx-10 sm:mx-10 lg:mx-20 py-8">
        <div className="w-[600px] h-[600px] blur-[200px] right-0 top-56 absolute rounded-full bg-[#F591D7]"></div>
        <Header />
        <MainContent
          currIndex={currIndex}
          setCurrIndex={setCurrIndex}
          dataSlider={dataSlider}
        />
      </div>
    </div>
  );
}

export default App;
