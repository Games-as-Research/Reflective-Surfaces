import Screen from "../components/Screen";
import { useContext, useState, useEffect } from "react";
import GameManager from "../managers/GameManager";
import "../stylesheets/screen0.css";

const DEFAULT_STATE = {
  index: 0,
  background: "./S1_Pippin/Background.png",
  windows: [
    {
      layer: 2,
      minimized: false,
      src: "./S1_Pippin/github.png",
      dimensions: {
        top: 70,
        left: 800,
        width: 561,
        height: 809,
      },
    },
    {
      layer: 1,
      minimized: false,
      src: "./S1_Pippin/vscode.png",
      dimensions: {
        top: 70,
        left: 116,
        width: 590,
        height: 847,
      },
    },
  ],
  dock_icons: ["CHROME", "VSCODE", "UNITY"],
};

const Screen0 = (props) => {
  // This is the startScreen

  const GameMan = useContext(GameManager);

  function PlayHandler() {
    GameMan.nextScreen(1);
  }

  return (
    <>
      <Screen state={DEFAULT_STATE} />
      <div className="dark-overlay">
        <p className="title-text">Reflective Surfaces</p>
        <div className="play-button" onClick={PlayHandler}>
          <p className="play-button-text">Play</p>
        </div>
      </div>
    </>
  );
};

export default Screen0;
