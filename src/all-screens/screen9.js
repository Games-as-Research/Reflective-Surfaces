import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";
import DesktopIcon from "../components/DesktopIcon";

const DEFAULT_STATE = {
  background: "./S9_Shahrom/Background.jpg",
  windows: [],
  dock_icons: ["FIREFOX", "OBSIDIAN", "UNITY", "TERMINAL"],
};

const Screen9 = (props) => {
  const GameMan = useContext(GameManager);
  useEffect(() => {
    GameMan.unlockScreen(8);
  }, []);
  
  return (
    <>
      <Screen state={DEFAULT_STATE} />
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
