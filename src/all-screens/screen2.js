import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S2_Matt/Background.png",
  windows: [
    {
      layer: 5,
      minimized: false,
      type: "OBSIDIAN",
      src: "./S2_Matt/obsidian.png",
      dimensions: {
        top: 80,
        left: 805,
        width: 846,
        height: 772,
      },
    },
    {
      layer: 4,
      minimized: false,
      type: "FIREFOX",
      src: "./S2_Matt/firefox.png",
      dimensions: {
        top: 346,
        left: 415,
        width: 370,
        height: 506,
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "RIDER",
      src: "./S2_Matt/ryder.png",
      dimensions: {
        top: 380,
        left: 33,
        width: 1073,
        height: 566,
      },
      map: {
        name: "Screen2",
        areas: [
          {
            id: "469f9800-c45a-483f-b13e-bd24f3fb79f4",
            title: "commit-and-push--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [225, 1535, 521, 1535, 521, 1585, 225, 1585],
            polygon: [
              [225, 1535],
              [521, 1535],
              [521, 1585],
              [225, 1585],
            ],
          },
        ],
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "FIREFOX",
      src: "./S2_Matt/docs.png",
      dimensions: {
        top: 114,
        left: 65,
        width: 695,
        height: 580,
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "FIREFOX",
      src: "./S2_Matt/github.png",
      dimensions: {
        top: 338,
        left: 839,
        width: 757,
        height: 591,
      },
    },
  ],
  dock_icons: [],
};

const Screen2 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(1);
    GameMan.Narrate(1);
  }, []);

  return <Screen state={DEFAULT_STATE} backgroundColor={"#CD90CB"} />;
};

export default Screen2;
