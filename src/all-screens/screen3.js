import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const DEFAULT_STATE = {
  background: "./S3_Rilla/Background.jpeg",
  windows: [
    {
      layer: 4,
      minimized: true,
      type: "FINDER",
      src: "./S3_Rilla/Closing/file_explorer.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 942,
        height: 227,
      },
    },
    {
      layer: 9,
      minimized: true,
      type: "TEXTEDIT",
      src: "./S3_Rilla/Abstract/abstract.png",
      dimensions: {
        top: 100,
        left: 129,
        width: 867,
        height: 261,
      },
    },
    {
      layer: 8,
      minimized: true,
      type: "CHROME",
      src: "./S3_Rilla/Abstract/docs.png",
      dimensions: {
        top: 454,
        left: 129,
        width: 571,
        height: 508,
      },
    },
    {
      layer: 7,
      minimized: true,
      type: "PREVIEW",
      src: "./S3_Rilla/Abstract/pdf.png",
      dimensions: {
        top: 129,
        left: 384,
        width: 780,
        height: 516,
      },
    },
    // P2
    {
      layer: 6,
      minimized: true,
      type: "DISCORD",
      src: "./S3_Rilla/Closing/discordJoey.png",
      dimensions: {
        top: 129,
        left: 384,
        width: 713,
        height: 613,
      },
    },
    {
      layer: 5,
      minimized: true,
      type: "CHROME",
      src: "./S3_Rilla/Closing/docs_rTd.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 857,
        height: 916,
      },
    },

    {
      layer: 4,
      minimized: true,
      type: "DISCORD",
      src: "./S3_Rilla/Context/discord_matt.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 857,
        height: 916,
      },
    },
    {
      layer: 3,
      minimized: true,
      type: "CHROME",
      src: "./S3_Rilla/Context/docs_context.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 857,
        height: 916,
      },
    },
    {
      layer: 2,
      minimized: true,
      type: "GITHUB",
      src: "./S3_Rilla/Context/gh_desktop.png",
      dimensions: {
        top: 96,
        left: 55,
        width: 555,
        height: 361,
      },
    },
  ],
  dock_icons: [],
};

const Screen3 = (props) => {
  const GameMan = useContext(GameManager);

  useEffect(() => {
    GameMan.unlockScreen(2);
  }, []);

  return <Screen state={DEFAULT_STATE} />;
};

export default Screen3;
