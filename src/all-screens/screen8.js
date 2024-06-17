import { P5JS } from "../components/P5JS";
import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S8_Vadim/Background.jpeg",
  OS: "11",
  windows: [
    {
      layer: 6,
      minimized: false,
      type: "WORD",
      src: "./S8_Vadim/word1.png",
      dimensions: {
        top: 82,
        left: 891,
        width: 658,
        height: 759,
      },
      map: {
        name: "Screen8Window1",
        areas: [
          {
            id: "824v520v-d82n-81fv-0d82-bd24f3fb79f4",
            title: "autosave--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [60, 15, 200, 15, 200, 45, 60, 45],
            polygon: [
              [60, 15],
              [200, 15],
              [200, 45],
              [60, 45],
            ],
          },
        ],
      },
    },
    {
      layer: 5,
      minimized: false,
      type: "WORD",
      src: "./S8_Vadim/word2.png",
      dimensions: {
        top: 140,
        left: 624,
        width: 596,
        height: 686,
      },
    },
    {
      layer: 4,
      minimized: false,
      type: "UNITY",
      src: "./S8_Vadim/unity.png",
      dimensions: {
        top: 404,
        left: 326,
        width: 521,
        height: 361,
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "EDGE",
      src: "./S8_Vadim/trello.png",
      dimensions: {
        top: 82,
        left: 326,
        width: 476,
        height: 598,
      },
      map: {
        name: "Screen8Window2",
        areas: [
          {
            id: "824v520v-d82N-81fv-0d82-bd24f3fb79f4",
            title: "jira--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [950, 710, 1150, 710, 1150, 750, 950, 750],
            polygon: [
              [950, 710],
              [1150, 710],
              [1150, 750],
              [950, 750],
            ],
          },
        ],
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "GITKRAKEN",
      src: "./S8_Vadim/gitKraken.png",
      dimensions: {
        top: 216,
        left: 87,
        width: 492,
        height: 304,
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "RIDER",
      src: "./S8_Vadim/ryder.png",
      dimensions: {
        top: 550,
        left: 86,
        width: 490,
        height: 290,
      },
    },
  ],
  dock_icons: [],
};

const Screen8 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(7);
  }, []);

  return (
    <>
      {/* <P5JS /> */}
      <Screen state={DEFAULT_STATE} />
    </>
  );
};

export default Screen8;
