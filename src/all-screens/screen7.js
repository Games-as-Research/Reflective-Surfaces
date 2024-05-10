import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  index: 7,
  locked: true,
  thumbnail: "./S7_Femke/Background.jpeg",
  background: "./S7_Femke/Background.jpeg",
  windows: [
    {
      layer: 4,
      minimized: false,
      src: "./S7_Femke/gif.png",
      link: "https://y.yarn.co/7d9a564e-e131-4f7d-9ced-708018d38702_text.gif",
      dimensions: {
        top: 490,
        left: 330,
        width: 464,
        height: 356,
      },
    },
    {
      layer: 3,
      minimized: false,
      src: "./S7_Femke/blackboard.png",
      dimensions: {
        top: 39,
        left: 352,
        width: 440,
        height: 361,
      },
    },
    {
      layer: 2,
      minimized: false,
      src: "./S7_Femke/miro.png",
      link: "https://miro.com/app/board/uXjVNyLKL2M=/",
      dimensions: {
        top: 268,
        left: 33,
        width: 575,
        height: 619,
      },
    },
    {
      layer: 1,
      minimized: false,
      src: "./S7_Femke/word.png",
      dimensions: {
        top: 63,
        left: 819,
        width: 746,
        height: 810,
      },
    },
  ],
  OS: "10",
};

const Screen7 = (props) => {
  const GameMan = useContext(GameManager);
  
  useEffect(() => {
    GameMan.unlockScreen(6);
  }, []);
  
  return <Screen state={DEFAULT_STATE} />;
};

export default Screen7;
