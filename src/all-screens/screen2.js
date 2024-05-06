import Screen from "../components/Screen";
import { useContext, useEffect, useState } from "react";
import GameManager from "../managers/GameManager";

const Screen2 = (props) => {
  const GameMan = useContext(GameManager);
  const [ordWindows, setOrdWindows] = useState(GameMan.screensState[1].windows);

  useEffect(() => {
    if (GameMan.screensState[1].locked) {
      GameMan.updateScreen(1, { locked: false });
    }
  }, []);

  return (
    <Screen
      windows={ordWindows}
      setWindows={setOrdWindows}
      backgroundImage={GameMan.screensState[1].background}
      dock_icons={["FIREFOX", "OBSIDIAN", "RIDER", "DISCORD"]}
    />
  );
};

export default Screen2;
