import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S4_Chip/Background.jpg",
  windows: [
    {
      layer: 4,
      minimized: false,
      type: "TEXTEDIT",
      src: "./S4_Chip/video_transcript.png",
      dimensions: {
        top: 113,
        left: 832,
        width: 836,
        height: 853,
      },
    },
    {
      layer: 3,
      minimized: false,
      type: "FIREFOX",
      src: "./S4_Chip/hiteam.png",
      dimensions: {
        top: 240,
        left: 39,
        width: 678,
        height: 767,
      },
    },
    {
      layer: 2,
      minimized: false,
      type: "GARAGEBAND",
      src: "./S4_Chip/audio.png",
      dimensions: {
        top: 59,
        left: 330,
        width: 888,
        height: 399,
      },
    },
    {
      layer: 1,
      minimized: false,
      type: "DISCORD",
      src: "./S4_Chip/discord_rilla.png",
      dimensions: {
        top: 585,
        left: 717,
        width: 485,
        height: 422,
      },
    },
  ],
  dock_icons: [
    "PAGES",
    "MAIL",
    "BLENDER",
    "MUSIC",
    "ZOTERO",
    "VOICEMEMO",
  ],
};

const Screen4 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(3);
  }, []);

  return <Screen state={DEFAULT_STATE} />;
};

export default Screen4;
