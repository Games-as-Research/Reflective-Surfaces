import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  index: 3,
  locked: true,
  thumbnail: "./S3_Rilla/Background.jpeg",
  background: "./S3_Rilla/Background.jpeg",
  windows: [
    {
      layer: 3,
      minimized: false,
      src: "./S3_Rilla/Abstract/abstract.png",
      dimensions: {
        top: 100,
        left: 129,
        width: 867,
        height: 261,
      },
    },
    {
      layer: 2,
      minimized: false,
      src: "./S3_Rilla/Abstract/docs.png",
      dimensions: {
        top: 454,
        left: 129,
        width: 571,
        height: 508,
      },
    },
    {
      layer: 1,
      minimized: false,
      src: "./S3_Rilla/Abstract/pdf.png",
      dimensions: {
        top: 129,
        left: 384,
        width: 1260,
        height: 833,
      },
    },
  ],
  dock_icons: ["CHROME", "PREVIEW", "TEXTEDIT", "DISCORD", "GITHUB"],
};

const Screen3 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(2);
  }, []);
  
  return <Screen state={DEFAULT_STATE} />;
};

export default Screen3;
