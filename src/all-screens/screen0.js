import Screen from "../components/Screen";
import { useContext, useState, useEffect } from "react";
import GameManager from "../managers/GameManager";
import "../stylesheets/screen0.css";

const Screen0 = (props) => {
  // This is the startScreen

  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[0].windows);

  useEffect(() => {
    if (GameMan.screensState[0].locked) {
      GameMan.updateScreen(0, { locked: false });
    }
  }, []);

  function PlayHandler() {
    GameMan.nextScreen(1);
  }

  return (
    <>
      <Screen
        windows={[]}
        setWindows={[]}
        backgroundImage={GameMan.screensState[0].background}
      />
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
