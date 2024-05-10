import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  thumbnail: "./S5_Kalervo/Background.jpeg",
  background: "./S5_Kalervo/Background.jpeg",
  windows: [
    {
      layer: 3,
      minimized: false,
      src: "./S5_Kalervo/discussion.png",
      dimensions: {
        top: 90,
        left: 708,
        width: 797,
        height: 680,
      },
    },
    {
      layer: 2,
      minimized: false,
      src: "./S5_Kalervo/docs.png",
      dimensions: {
        top: 90,
        left: 56,
        width: 713,
        height: 894,
      },
    },
    {
      layer: 1,
      minimized: false,
      src: "./S5_Kalervo/discord_rilla.png",
      dimensions: {
        top: 205,
        left: 750,
        width: 683,
        height: 751,
      },
    },
  ],
  dock_icons: ["FIREFOX", "TEXTEDIT", "DISCORD", "SPOTIFY"],
};

const Screen5 = (props) => {
  const GameMan = useContext(GameManager);
  useEffect(() => {
    GameMan.unlockScreen(4);
  }, []);
  return <Screen state={DEFAULT_STATE} />;
};

export default Screen5;
