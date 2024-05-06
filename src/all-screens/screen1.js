import Screen from "../components/Screen";
import { useContext, useState, useEffect } from "react";
import GameManager from "../managers/GameManager";

const Screen1 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[0].windows);

  useEffect(() => {
    if (GameMan.screensState[0].locked) {
      GameMan.updateScreen(0, { locked: false });
    }
  }, []);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[0].background}
      dock_icons={["CHROME", "VSCODE", "UNITY"]}
    />
  );
};

export default Screen1;
