import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S6_Enric/Background.jpg",
  OS: "11",
  windows: [
    {
      layer: 6,
      minimized: false,
      type: "CHROME",
      src: "./S6_Enric/docs2.png",
      dimensions: {
        top: 30,
        left: 1123,
        width: 528,
        height: 862,
      },
    },
    {
      layer: 5,
      minimized: false,
      type: "CHROME",
      src: "./S6_Enric/docs1.png",
      dimensions: {
        top: 30,
        left: 532,
        width: 576,
        height: 862,
      },
    },
    {
      layer: 4,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic3.png",
      dimensions: {
        top: 20,
        left: 42,
        width: 188,
        height: 529,
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic2.png",
      dimensions: {
        top: 100,
        left: 192,
        width: 408,
        height: 412,
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic4.png",
      dimensions: {
        top: 200,
        left: 44,
        width: 415,
        height: 486,
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "IMAGE",
      src: "./S6_Enric/pic1.png",
      dimensions: {
        top: 333,
        left: 461,
        width: 499,
        height: 387,
      },
    },
  ],
  dock_icons: [],
};

const Screen6 = (props) => {
  const GameMan = useContext(GameManager);
  useEffect(() => {
    GameMan.unlockScreen(5);
  }, []);

  return <Screen state={DEFAULT_STATE} />;
};

export default Screen6;
