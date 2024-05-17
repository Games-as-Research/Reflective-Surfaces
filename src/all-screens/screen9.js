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
        left: 186,
        width: 825,
        height: 464,
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
      <Screen state={DEFAULT_STATE} />
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
