import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";
import DesktopIcon from "../components/DesktopIcon";

const DEFAULT_STATE = {
  background: "./S9_Shahrom/Background.png",
  windows: [
    {
      layer: 2,
      minimized: false,
      type: "GITHUB",
      src: "./S9_Shahrom/github_1.PNG",
      dimensions: {
        top: 415,
        left: 320,
        width: 825,
        height: 464,
      },
      map: {
        name: "Screen9Window1",
        areas: [
          {
            id: "824v520v-d82N-81fv-0d82-bd24f3fb79f4",
            title: "github-fetch--next",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [680, 30, 940, 30, 940, 90, 680, 90],
            polygon: [
              [680, 30],
              [940, 30],
              [940, 90],
              [680, 90],
            ],
          },
        ],
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "OBSIDIAN",
      src: "./S9_Shahrom/obsidian.PNG",
      dimensions: {
        top: 191,
        left: 788,
        width: 958,
        height: 539,
      },
    },
    {
      layer: 4,
      minimized: false,
      type: "CHROME",
      src: "./S9_Shahrom/jira.PNG",
      dimensions: {
        top: 234,
        left: 560,
        width: 1044,
        height: 587,
      },
      map: {
        name: "Screen9Window2",
        areas: [
          {
            id: "824v520v-d82N-81fv-0d82-bd24f3fbiop4",
            title: "jira-close--previous",
            shape: "poly",
            name: "1",
            fillColor: "#84BDE388",
            strokeColor: "black",
            coords: [1605, 100, 1630, 100, 1630, 125, 1605, 125],
            polygon: [
              [1605, 100],
              [1630, 100],
              [1630, 125],
              [1605, 125],
            ],
          },
        ],
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "FINDER",
      src: "./S9_Shahrom/infinite_recursion.png",
      dimensions: {
        top: 114,
        left: 65,
        width: 690,
        height: 190,
      },
    },
  ],
  dock_icons: ["FIREFOX", "TERMINAL"],
};

const Screen9 = (props) => {
  const GameMan = useContext(GameManager);
  useEffect(() => {
    GameMan.unlockScreen(8);
  }, []);

  return (
    <>
      <Screen state={DEFAULT_STATE} backgroundColor={"#C4C4C4"}/>
      {/* Add a terminal Window :D  */}
      <DesktopIcon
        default={{ x: 1400, y: 50 }}
        label={"Macintosh HD"}
        sprite={"./Icons/macintosh_hd.png"}
      />
      <DesktopIcon
        default={{ x: 1400, y: 200 }}
        label={"Photos"}
        sprite={"./Icons/images_folder.png"}
      />
      <DesktopIcon
        default={{ x: 1400, y: 300 }}
        label={"Unity 2022.3.15f1"}
        sprite={"./Icons/unity.png"}
      />
      <DesktopIcon
        default={{ x: 1400, y: 500 }}
        label={"Spotify"}
        sprite={"./Icons/spotify.png"}
      />
    </>
  );
};

export default Screen9;
